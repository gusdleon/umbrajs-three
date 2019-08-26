import * as THREE from 'three'
import { initUmbra, Formats } from '@umbra3d/umbrajs'
import { ThreeFormats } from './ThreeFormats.js'
import { ModelObject } from './ModelObject.js'

/**
 * A wrapper type for mesh geometry and its material. Only the ModelObject instantiates the
 * THREE.Mesh objects that are passed to the renderer. ModelObject also creates the final
 * THREE.Material instance using the textures and transparency flag in 'materialDesc'
 */
function MeshDescriptor (geometry, materialDesc) {
  this.geometry = geometry
  this.materialDesc = materialDesc
}

function makeBoundingSphere (aabb) {
  const min = aabb[0]
  const max = aabb[1]
  const size = new THREE.Vector3(max[0] - min[0], max[1] - min[1], max[2] - min[2])
  const pos = new THREE.Vector3(min[0] + size.x * 0.5, min[1] + size.y * 0.5, min[2] + size.z * 0.5)
  return new THREE.Sphere(pos, size.length())
}

export function initWithThreeJS (renderer, userConfig) {
  const supportedVersions = ['106', '107']
  if (!supportedVersions.includes(THREE.REVISION)) {
    const names = supportedVersions.join(', ')
    throw new Error(`Only three.js versions ${names} are supported. Got version ${THREE.REVISION} instead.`)
  }

  if (!renderer) {
    throw new TypeError('"renderer" should be of type THREE.WebGLRenderer')
  }

  return initUmbra(userConfig).then(Umbra => {
    const context = 'getContext' in renderer ? renderer.getContext() : renderer.context
    const features = Umbra.getPlatformFeatures(context)

    // Three.js does not support BC5 compressed formats so we manually disable them.
    features.capabilityMask &= ~Formats.TextureCapability.BC5

    let runtime = Umbra.createRuntime(features)

    /**
     * Creating a model is an asynchronous operation because we might need to query the Project API
     * to map the given string names into numeric IDs. If IDs or URL are used then the promise will
     * resolve immediately.
     */
    let createModel = cloudArgs => {
      const scene = runtime.createScene()

      return new Promise((resolve, reject) => {
        try {
          if ('url' in cloudArgs) {
            scene.connectWithURL(cloudArgs.url)
            resolve(new ModelObject(runtime, scene, renderer, { features }))
          } else {
            return Umbra.getIDs(cloudArgs).then(
              IDs => {
                if ('apiURL' in cloudArgs) {
                  scene.connectToCustomAPI(cloudArgs.token, IDs.project, IDs.model, cloudArgs.apiURL)
                } else {
                  scene.connect(cloudArgs.token, IDs.project, IDs.model)
                }
                resolve(new ModelObject(runtime, scene, renderer, { features }))
              },
              () => {
                console.log('error')
                throw new Error(`Couldn't fetch IDs matching names ${cloudArgs.project} and ${cloudArgs.model}`)
              })
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
    let update = function (timeBudget = 10) {
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

          let tex
          if (glformat.compressed) {
            const mip = {
              width: info.width,
              height: info.height,
              data: pixelData
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
           * We make all textures linear to avoid gamma expansion at texture fetch time.
           * This is slightly wrong because texture filtering and shading will be done
           * in gamma space, but this behavior is what people usually expect.
           */
          if (info.textureType === 'diffuse' && !renderer.gammaOutput) {
            tex.encoding = THREE.LinearEncoding
          } else {
            tex.encoding = info.colorSpace === 'linear' ? THREE.LinearEncoding : THREE.sRGBEncoding
          }

          tex.needsUpdate = true

          runtime.addAsset(job, tex)
        },
        DestroyTexture: job => {
          // Free texture data only if it's not a dummy texture
          if (job.data.isTexture) {
            job.data.dispose()
          }
          runtime.removeAsset(job, job.data)
        },
        CreateMesh: job => {
          /**
           * The mesh creation job gives us all the vertex data in job.data.buffers.
           * The buffers are only valid during this handler, and the memory will be
           * reused for other meshes later. Therefore we make copies of the arrays
           * for three.js which is something we would have to do anyway.
           */

          const geometry = new THREE.BufferGeometry()
          const indexArray = job.data.buffers['index'].getArray()
          const indices = Array.from(indexArray)
          geometry.setIndex(indices)
          geometry.boundingSphere = makeBoundingSphere(job.data.bounds)

          const attribs = {
            position: { components: 3 },
            normal: { components: 3 },
            uv: { components: 2 },
            tangent: { components: 3 }
          }

          Object.keys(attribs).forEach(name => {
            const buffer = job.data.buffers[name]

            if (buffer) {
              const array = buffer.getArray()
              const attrib = new THREE.Float32BufferAttribute(array.slice(), attribs[name].components)
              geometry.addAttribute(name, attrib)
            }
          })

          const meshDescriptor = new MeshDescriptor(geometry, job.data.material)
          runtime.addAsset(job, meshDescriptor)
        },
        DestroyMesh: job => {
          const meshDesc = job.data
          // Tell Umbra's runtime that this asset doesn't exist anymore and finish the job
          runtime.removeAsset(job, meshDesc)
          // Release three.js's resources
          meshDesc.geometry.dispose()
        }
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
    function getStats () {
      return {
        maxBytesDownloaded: Umbra.nativeModule.maxBytesDownloaded,
        minBytesDownloaded: Umbra.nativeModule.minBytesDownloaded
      }
    }

    return {
      createModel,
      getStats,
      update: update,
      dispose: () => {
        runtime.destroy()
        runtime = undefined
      },
      lib: Umbra,
      runtime: runtime
    }
  })
}
