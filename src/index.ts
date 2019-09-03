import * as THREE from './ThreeWrapper'
import {
  initUmbra,
  deinitUmbra,
  Formats,
  Math,
  ConnectionArgs,
  AssetJob,
} from '@umbra3d/umbrajs'
import { ThreeFormats } from './ThreeFormats'
import { Model, MeshDescriptor } from './Model'

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

export function initWithThreeJS(
  renderer: THREE.WebGLRenderer,
  userConfig: { wasmURL?: string },
) {
  if (!renderer) {
    throw new TypeError('"renderer" should be of type THREE.WebGLRenderer')
  }

  return initUmbra(userConfig).then(Umbra => {
    let context: WebGLRenderingContext
    // three.js r106 has no 'getContext'
    if ('getContext' in renderer) {
      context = renderer.getContext()
    } else {
      context = (renderer as any).context
    }
    const features = Umbra.getPlatformFeatures(context)

    // Three.js does not support BC5 compressed formats so we manually disable them.
    features.capabilityMask &= ~Formats.TextureCapability.BC5

    let runtime = Umbra.createRuntime(features)

    /**
     * Creating a model is an asynchronous operation because we might need to query the Project API
     * to map the given string names into numeric IDs. If IDs or URL are used then the promise will
     * resolve immediately.
     */
    const createModel = (
      cloudArgs: (ConnectionArgs & { apiURL?: string }) | { url: string },
    ): Promise<Model> => {
      const scene = runtime.createScene()

      return new Promise((resolve, reject) => {
        try {
          if ('url' in cloudArgs) {
            scene.connectWithURL(cloudArgs.url)
            resolve(new Model(runtime, scene, renderer, features))
          } else if ('token' in cloudArgs) {
            return Umbra.getIDs(cloudArgs).then(
              // on resolve
              IDs => {
                if ('apiURL' in cloudArgs) {
                  scene.connectToCustomAPI(
                    cloudArgs.token,
                    IDs.project,
                    IDs.model,
                    cloudArgs.apiURL,
                  )
                } else {
                  scene.connect(cloudArgs.token, IDs.project, IDs.model)
                }
                resolve(new Model(runtime, scene, renderer, features))
              },
              // on reject
              () => {
                const args = cloudArgs as any
                throw new Error(
                  `Couldn't fetch IDs matching arguments ${args.project} and ${args.model}`,
                )
              },
            )
          } else {
            throw new Error('Invalid connection arguments')
          }
        } catch (e) {
          runtime.destroyScene(scene)
          reject(e)
        }
      })
    }

    /*
     * This launches new downloads and hands out generated assets to three.js.
     * Should be called at the beginning of a frame.
     */
    const update = function(timeBudget = 10) {
      const handlers = {
        CreateMaterial: job => {
          runtime.addAsset(job, job.data)
        },
        DestroyMaterial: job => {
          runtime.removeAsset(job, job.data)
        },
        CreateTexture: job => {
          const info = job.data.info
          const buffer = job.data.buffer

          let glformat

          if (ThreeFormats.hasOwnProperty(info.format)) {
            glformat = ThreeFormats[info.format]
          }

          if (!glformat) {
            // Add a dummy object for unknown formats. They will appear as a solid black color.
            console.log('Unknown texture format', info.format)
            runtime.addAsset(job, { isTexture: false })
            return
          }

          // eslint-disable-next-line new-cap
          const pixelData = new buffer.type(buffer.getArray().slice())

          let tex: THREE.CompressedTexture | THREE.DataTexture
          if (glformat.compressed) {
            const mip = {
              width: info.width,
              height: info.height,
              data: pixelData,
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

          /**
           * A workaround for the case where we directly output colors in gamma space.
           * We make diffuse textures linear to avoid gamma expansion at texture fetch time.
           * This is slightly wrong because texture filtering and shading will be done
           * in gamma space, but this behavior is what people usually expect.
           */
          if (info.textureType === 'diffuse' && !renderer.gammaOutput) {
            tex.encoding = THREE.LinearEncoding
          } else {
            tex.encoding =
              info.colorSpace === 'linear'
                ? THREE.LinearEncoding
                : THREE.sRGBEncoding
          }

          tex.needsUpdate = true

          runtime.addAsset(job, tex)
        },
        DestroyTexture: (job: AssetJob.DestroyTexture) => {
          // Free texture data only if it's not a dummy texture
          if (job.data.isTexture) {
            job.data.dispose()
          }
          runtime.removeAsset(job, job.data)
        },
        CreateMesh: (job: AssetJob.CreateMesh) => {
          /**
           * The mesh creation job gives us all the vertex data in job.data.buffers.
           * The buffers are only valid during this handler, and the memory will be
           * reused for other meshes later. Therefore we make copies of the arrays
           * for three.js which is something we would have to do anyway.
           */

          const geometry = new THREE.BufferGeometry()
          const indexArray = job.data.buffers['index'].getArray() as any
          const indices = Array.from(indexArray)
          geometry.setIndex(indices as number[])
          geometry.boundingSphere = makeBoundingSphere(job.data.bounds)

          const attribs = {
            position: { components: 3 },
            normal: { components: 3 },
            uv: { components: 2 },
            tangent: { components: 3 },
          }

          Object.keys(attribs).forEach(name => {
            const buffer = job.data.buffers[name]

            if (buffer) {
              const array = buffer.getArray()
              const attrib = new THREE.Float32BufferAttribute(
                array.slice(),
                attribs[name].components,
              )
              geometry.addAttribute(name, attrib)
            }
          })

          const meshDescriptor: MeshDescriptor = {
            geometry: geometry,
            materialDesc: job.data.material,
          }
          runtime.addAsset(job, meshDescriptor)
        },
        DestroyMesh: job => {
          const meshDesc = job.data
          // Tell Umbra's runtime that this asset doesn't exist anymore and finish the job
          runtime.removeAsset(job, meshDesc)
          // Release three.js's resources
          meshDesc.geometry.dispose()
        },
      }

      runtime.handleJobs(handlers, timeBudget)
      runtime.update()
    }

    /**
     * Returns streaming information. We can't tell which files came from the browser cache
     * so we report lower and upper limits of the true download size.
     *
     * The returned object has the following fields:
     *
     *  'maxBytesDownloaded' is an upper limit assuming no file was cached,
     *  'minBytesDownloaded' is the corresponding lower limit assuming all duplicates came from cache.
     *
     */
    function getStats() {
      return {
        maxBytesDownloaded: Umbra.nativeModule.maxBytesDownloaded,
        minBytesDownloaded: Umbra.nativeModule.minBytesDownloaded,
      }
    }

    return {
      createModel,
      getStats,
      update: update,
      dispose: () => {
        runtime.assets.forEach((asset, userPtr) => {
          // TODO: Use separate types for assets instead
          if ('geometry' in asset) {
            asset.geometry.dispose()
          }
          if ('dispose' in asset) {
            asset.dispose()
          }
        })
        runtime.destroy()
        runtime = undefined

        deinitUmbra(Umbra)
      },
      lib: Umbra,
      runtime: runtime,
    }
  })
}
