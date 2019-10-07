import * as THREE from './ThreeWrapper'
import {
  initUmbra,
  deinitUmbra,
  Math as UmbraMath,
  Assets,
  UmbraInstance,
  PlatformFeatures,
  TextureCapability,
  TextureType,
  ColorSpace,
  Runtime,
  Scene,
  VertexBuffer,
} from '@umbra3d/umbrajs'
import { ThreeFormats } from './ThreeFormats'
import { PublicLink } from './Locator'
import { Model, ModelFactory, MeshDescriptor } from './Model'
import { WebGLRenderer } from 'three'
import { HeapBufferView } from '@umbra3d/umbrajs/dist/Heap'

function makeBoundingSphere(aabb: UmbraMath.BoundingBox) {
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

class ThreejsIntegration implements ModelFactory {
  // Upper VRAM memory use limit in bytes
  memoryLimit = 500 * 1024 * 1024
  // Upper total download size limit in bytes. Turned off by default.
  downloadLimit = 0
  // Per frame asset loading time budget in milliseconds
  perFrameBudget = 10

  onStreamingUpdate: (progress: number) => void
  onStreamingComplete: () => void

  // An instance of the umbrajs library for debugging
  umbrajs: UmbraInstance

  private runtime: Runtime
  private features: PlatformFeatures
  private renderer: WebGLRenderer
  private updateTask: number = undefined

  private assetSizes = new Map<any, number>()
  private textureMemoryUsed = 0
  private meshMemoryUsed = 0
  private lastQualityLowerFrame = -1

  private get memoryUsed() {
    return this.textureMemoryUsed + this.meshMemoryUsed
  }

  private models = new Set<Model>()

  private oldState = {
    progress: 0,
    downloadLimitReached: false,
  }

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

    this.startEventUpdate(1000 / 60)
  }

  startEventUpdate(interval: number) {
    this.stopEventUpdate()
    this.updateTask = window.setInterval(() => {
      this.updateEvents()
      this.models.forEach(m => (m as any).updateNetworkEvents())
    }, interval)
  }

  stopEventUpdate() {
    if (typeof this.updateTask !== 'undefined') {
      window.clearInterval(this.updateTask)
      delete this.updateTask
    }
  }

  update() {
    const downloadLimitReached =
      this.downloadLimit !== 0 &&
      this.getStats().maxBytesDownloaded >= this.downloadLimit

    // If the limit is reached we freeze all updates. View frustum culling
    // will still work, but the streaming set is kept static.
    if (downloadLimitReached) {
      if (!this.oldState.downloadLimitReached) {
        this.umbrajs.abortDownloads()
      }
    } else {
      this.runtime.update()
      this.runtime.loadAssets(this.handlers, this.perFrameBudget)
    }

    this.oldState.downloadLimitReached = downloadLimitReached

    if (this.memoryUsed / this.memoryLimit < 0.25) {
      this.adjustQuality(1.1)
    }
  }

  createModel(link: string | PublicLink): Model {
    let url: string
    if (typeof link === 'string') {
      url = link
    } else if (typeof link === 'object') {
      if (('token' in link) as any) {
        console.warn(
          'Connection with {token, projectID, modelID} is deprecated. Use {key, project, model} or a string locator instad.',
        )
        link.key = link['token']
        link.project = link['projectID']
        link.model = link['modelID']
      }

      if (!('key' in link && 'project' in link && 'model' in link)) {
        throw new Error(
          'createModel() expects an object with properties "key", "project", and "model"',
        )
      }
      url = `key=${link.key}&project=${link.project}&model=${link.model}`
    } else {
      throw new TypeError('expected either string or an object argument')
    }

    const scene = this.runtime.connectPublic(url)
    const model = new Model(
      this.runtime,
      scene,
      this.renderer,
      this.features,
      m => this.models.delete(m),
    )
    this.models.add(model)
    return model
  }

  createModelWithURL(url: string): Model {
    const scene = this.runtime.connectLocal(url)
    const model = new Model(
      this.runtime,
      scene,
      this.renderer,
      this.features,
      m => this.models.delete(m),
    )
    this.models.add(model)
    return model
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
    return this.memoryUsed + bytes < this.memoryLimit
  }

  private adjustQuality(factor: number) {
    if (this.renderer.info.render.frame == this.lastQualityLowerFrame) {
      return
    }
    this.models.forEach((m: Model) => {
      m.qualityFactor = Math.min(1, m.qualityFactor * factor)
    })
    this.lastQualityLowerFrame = this.renderer.info.render.frame
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

  // AssetLoad handlers that create and remove materials, textures, and meshes
  private handlers = {
    LoadMaterial: (load: Assets.LoadMaterial) => {
      load.prepare(this.runtime.addAsset(load.data))
      load.finish(Assets.AssetLoadResult.Success)
    },
    UnloadMaterial: (unload: Assets.Unload) => {
      this.runtime.removeAsset(unload, unload.data)
      unload.finish()
    },
    LoadTexture: (load: Assets.LoadTexture) => {
      const info = load.data.info
      const buffer = load.data.buffer

      let glformat

      if (ThreeFormats.hasOwnProperty(info.format)) {
        glformat = ThreeFormats[info.format]
      }

      if (!glformat) {
        // Add a dummy object for unknown formats. They will appear as a solid black color.
        console.log('Unknown texture format', info.format)
        this.runtime.addAsset({ isTexture: false })
        return
      }

      if (!this.canFitInMemory(buffer.size)) {
        load.finish(Assets.AssetLoadResult.OutOfMemory)
        this.adjustQuality(0.8)
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
      load.prepare(this.runtime.addAsset(tex))
      load.finish(Assets.AssetLoadResult.Success)
    },
    UnloadTexture: (unload: Assets.Unload) => {
      // Free texture data only if it's not a dummy texture
      if (unload.data.isTexture) {
        unload.data.dispose()
      }

      if (this.assetSizes.has(unload.data)) {
        this.textureMemoryUsed -= this.assetSizes.get(unload.data)
        this.assetSizes.delete(unload.data)
      }

      this.runtime.removeAsset(unload, unload.data)
      unload.finish()
    },
    LoadMesh: (load: Assets.LoadMesh) => {
      /**
       * LoadMesh gives us all the vertex data in load.data.buffers.
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
        .map(name => load.data.buffers[name])
        .forEach(buffer => {
          if (buffer) {
            totalSize += buffer.data.size
          }
        })

      if (!this.canFitInMemory(totalSize)) {
        load.finish(Assets.AssetLoadResult.OutOfMemory)
        this.adjustQuality(0.8)
        return
      }

      const geometry = new THREE.BufferGeometry()
      const indexArray = load.data.buffers['index'].data.getArray()
      const indices = Array.from(indexArray as any)
      geometry.setIndex(indices as number[])
      geometry.boundingSphere = makeBoundingSphere(load.data.bounds)

      Object.keys(attribs).forEach(name => {
        const buffer = load.data.buffers[name] as VertexBuffer

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
        materialDesc: load.data.material,
      }

      this.meshMemoryUsed += totalSize
      this.assetSizes.set(meshDescriptor, totalSize)
      load.prepare(this.runtime.addAsset(meshDescriptor))
      load.finish(Assets.AssetLoadResult.Success)
    },
    UnloadMesh: (unload: Assets.Unload) => {
      const meshDesc = unload.data
      if (this.assetSizes.has(unload.data)) {
        this.meshMemoryUsed -= this.assetSizes.get(unload.data)
        this.assetSizes.delete(unload.data)
      }
      // Tell Umbra's runtime that this asset doesn't exist anymore and finish the job
      this.runtime.removeAsset(unload, meshDesc)
      // Release three.js's resources
      meshDesc.geometry.dispose()
      unload.finish()
    },
  }

  private updateEvents() {
    const progress = this.getStreamingProgress()
    if (this.oldState.progress != progress) {
      if (this.onStreamingUpdate) {
        this.onStreamingUpdate(progress)
      }
      if (progress === 1.0 && this.onStreamingComplete) {
        this.onStreamingComplete()
      }
    }

    this.oldState.progress = progress
  }

  getStreamingProgress(): number {
    return this.runtime.getStreamingProgress()
  }

  dispose() {
    window.clearInterval(this.updateTask)

    this.models.forEach((m: Model) => m.dispose())

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
export { ModelLoader as Loader } from './Loader'
