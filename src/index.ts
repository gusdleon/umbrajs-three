import * as THREE from './ThreeWrapper'
import {
  initUmbra,
  deinitUmbra,
  Math,
  Assets,
  UmbraInstance,
  PlatformFeatures,
  TextureCapability,
  TextureType,
  ColorSpace,
  Runtime,
  VertexBuffer,
} from '@umbra3d/umbrajs'
import { ThreeFormats } from './ThreeFormats'
import { Model, MeshDescriptor } from './Model'
import { WebGLRenderer } from 'three'
import { HeapBufferView } from '@umbra3d/umbrajs/dist/Heap'

function makeBoundingSphere(aabb: Math.BoundingBox) {
  const min = aabb[0]
  const max = aabb[1]
  const size = new THREE.Vector3(
    max[0] - min[0],
    max[1] - min[1],
    max[2] - min[2],
  )
  const pos = new THREE.Vector3(
    min[0] + size.x * 0.5,
    min[1] + size.y * 0.5,
    min[2] + size.z * 0.5,
  )
  return new THREE.Sphere(pos, size.length())
}

class ThreejsIntegration {
  // Upper VRAM memory use limit in bytes
  memoryLimit = 500 * 1024 * 1024

  // An instance of the umbrajs library for debugging
  umbrajs: UmbraInstance

  private runtime: Runtime
  private features: PlatformFeatures
  private renderer: WebGLRenderer

  private assetSizes = new Map<any, number>()
  private textureMemoryUsed = 0
  private meshMemoryUsed = 0

  // This class should be instantiated via initUmbra()
  constructor(umbrajs: UmbraInstance, renderer: WebGLRenderer) {
    let context: WebGLRenderingContext
    // three.js r106 has no 'getContext'
    if ('getContext' in renderer) {
      context = renderer.getContext()
    } else {
      context = (renderer as any).context
    }
    const features = umbrajs.getPlatformFeatures(context)

    // Three.js does not support BC5 compressed formats so we manually disable them.
    features.capabilityMask &= ~TextureCapability.BC5

    this.umbrajs = umbrajs
    this.runtime = umbrajs.createRuntime(features)
    this.renderer = renderer
    this.features = features
  }

  /**
   * Creating a model is an asynchronous operation because we might need to query the Project API
   * to map the given string names into numeric IDs. If IDs or URL are used then the promise will
   * resolve immediately.
   */
  /*createModel(
    cloudArgs: (ConnectionArgs & { apiURL?: string }) | { url: string },
  ): Promise<Model> {*/

  createModel(publicKey: string): Model {
    //const scene = this.runtime.createScene()
    const scene = this.runtime.connectPublic(publicKey)
    return new Model(this.runtime, scene, this.renderer, this.features)
  }

  /**
   * Returns streaming information. We can't tell which files came from the browser cache
   * so we report lower and upper limits of the true download size.
   *
   * The returned object has the following fields:
   *
   *  'maxBytesDownloaded' an upper limit assuming no file was cached,
   *  'minBytesDownloaded' the corresponding lower limit assuming all duplicates came from cache.
   *  'textureMemoryUse' the number of bytes used by texture assets
   *  'meshMemoryUse' the number of bytes used by mesh assets
   *
   */
  getStats() {
    return Object.assign(this.umbrajs.getStreamingInfo(), {
      textureMemoryUsed: this.textureMemoryUsed,
      meshMemoryUsed: this.meshMemoryUsed,
    })
  }

  private canFitInMemory(bytes: number) {
    return (
      this.textureMemoryUsed + this.meshMemoryUsed + bytes < this.memoryLimit
    )
  }

  // Converts a texture descriptor and a pixel buffer to a three.js compatible texture
  private makeTexture(
    info,
    buffer: HeapBufferView,
    glformat,
  ): THREE.CompressedTexture | THREE.DataTexture {
    const pixelData = buffer.getArray().slice() as THREE.TypedArray

    let tex
    if (glformat.compressed) {
      const mip = {
        width: info.width,
        height: info.height,
        data: pixelData as Uint8ClampedArray,
      }
      tex = new THREE.CompressedTexture([mip], info.width, info.height)
    } else {
      tex = new THREE.DataTexture(pixelData, info.width, info.height)
    }

    tex.format = glformat.format
    tex.type = glformat.type
    tex.magFilter = THREE.LinearFilter
    tex.minFilter = THREE.LinearFilter
    tex.anisotropy = 0

    return tex
  }

  // AssetJob handlers that create and remove materials, textures, and meshes
  private handlers = {
    LoadMaterial: (job: Assets.LoadMaterial) => {
      this.runtime.addAsset(job, job.data)
    },
    UnloadMaterial: (job: Assets.Unload) => {
      this.runtime.removeAsset(job, job.data)
    },
    LoadTexture: (job: Assets.LoadTexture) => {
      const info = job.data.info
      const buffer = job.data.buffer

      let glformat

      if (ThreeFormats.hasOwnProperty(info.format)) {
        glformat = ThreeFormats[info.format]
      }

      if (!glformat) {
        // Add a dummy object for unknown formats. They will appear as a solid black color.
        console.log('Unknown texture format', info.format)
        this.runtime.addAsset(job, { isTexture: false })
        return
      }

      if (!this.canFitInMemory(buffer.size)) {
        job.fail()
        return
      }

      const tex = this.makeTexture(info, buffer, glformat)

      /**
       * A workaround for the case where we directly output colors in gamma space.
       * We make diffuse textures linear to avoid gamma expansion at texture fetch time.
       * This is slightly wrong because texture filtering and shading will be done
       * in gamma space, but this behavior is what people usually expect.
       */
      if (
        info.textureType === TextureType.Diffuse &&
        !this.renderer.gammaOutput
      ) {
        tex.encoding = THREE.LinearEncoding
      } else {
        tex.encoding =
          info.colorSpace === ColorSpace.Linear
            ? THREE.LinearEncoding
            : THREE.sRGBEncoding
      }

      tex.needsUpdate = true

      this.textureMemoryUsed += buffer.size
      this.assetSizes.set(tex, buffer.size)
      this.runtime.addAsset(job, tex)
    },
    UnloadTexture: (job: Assets.Unload) => {
      // Free texture data only if it's not a dummy texture
      if (job.data.isTexture) {
        job.data.dispose()
      }

      if (this.assetSizes.has(job.data)) {
        this.textureMemoryUsed -= this.assetSizes.get(job.data)
        this.assetSizes.delete(job.data)
      }

      this.runtime.removeAsset(job, job.data)
    },
    LoadMesh: (job: Assets.LoadMesh) => {
      /**
       * The mesh creation job gives us all the vertex data in job.data.buffers.
       * The buffers are only valid during this handler, and the memory will be
       * reused for other meshes later. Therefore we make copies of the arrays
       * for three.js which is something we would have to do anyway.
       */

      const attribs = {
        position: { components: 3 },
        normal: { components: 3 },
        uv: { components: 2 },
        tangent: { components: 3 },
      }

      let totalSize = 0
      Object.keys(attribs)
        .map(name => job.data.buffers[name].data)
        .forEach(buffer => {
          if (buffer) {
            totalSize += buffer.size
          }
        })

      if (!this.canFitInMemory(totalSize)) {
        const memoryUse = this.textureMemoryUsed + this.meshMemoryUsed
        console.log(
          `Could not fit mesh of size ${totalSize} in memory. Total use: ${memoryUse}`,
        )
        job.finish(Assets.AssetLoadResult.OutOfMemory, 0)
        return
      }

      const geometry = new THREE.BufferGeometry()
      const indexArray = job.data.buffers['index'].data.getArray()
      const indices = Array.from(indexArray as any)
      geometry.setIndex(indices as number[])
      geometry.boundingSphere = makeBoundingSphere(job.data.bounds)

      Object.keys(attribs).forEach(name => {
        const buffer = job.data.buffers[name] as VertexBuffer

        if (buffer) {
          const view = buffer.data
          const array = view.getArray()
          const attrib = new THREE.Float32BufferAttribute(
            array.slice(),
            attribs[name].components,
          )
          geometry.addAttribute(name, attrib)
        }
      })

      const meshDescriptor: MeshDescriptor = {
        geometry,
        materialDesc: job.data.material,
      }

      this.meshMemoryUsed += totalSize
      this.assetSizes.set(meshDescriptor, totalSize)
      this.runtime.addAsset(job, meshDescriptor)
    },
    UnloadMesh: (job: Assets.Unload) => {
      const meshDesc = job.data
      if (this.assetSizes.has(job.data)) {
        this.meshMemoryUsed -= this.assetSizes.get(job.data)
        this.assetSizes.delete(job.data)
      }
      // Tell Umbra's runtime that this asset doesn't exist anymore and finish the job
      this.runtime.removeAsset(job, meshDesc)
      // Release three.js's resources
      meshDesc.geometry.dispose()
    },
  }

  /*
   * This launches new downloads and hands out generated assets to three.js.
   * Should be called at the beginning of a frame.
   */
  update(timeBudget = 10) {
    this.runtime.handleJobs(this.handlers, timeBudget)
    this.runtime.update()
  }

  dispose() {
    this.runtime.assets.forEach((asset, userPtr) => {
      if ('geometry' in asset) {
        asset.geometry.dispose()
      }
      if ('dispose' in asset) {
        asset.dispose()
      }
    })

    this.assetSizes.clear()
    this.textureMemoryUsed = 0
    this.meshMemoryUsed = 0

    this.runtime.destroy()
    this.runtime = undefined

    deinitUmbra(this.umbrajs)
  }
}

export function initWithThreeJS(
  renderer: THREE.WebGLRenderer,
  userConfig: { wasmURL?: string },
) {
  if (!renderer) {
    throw new TypeError('"renderer" should be of type THREE.WebGLRenderer')
  }

  return initUmbra(userConfig).then(Umbra => {
    return new ThreejsIntegration(Umbra, renderer)
  })
}

// Hide the library object constructor by wrapping it in an interface
interface UmbrajsThree extends ThreejsIntegration {}
export { Model, UmbrajsThree }
