import * as THREE from 'three'
import { UmbraLibrary, Formats } from '@umbra3d/umbrajs'
import { createShaderPatcher } from './ShaderPatcher.js'
import { ThreeFormats } from './ThreeFormats.js'

class ObjectPool {
  constructor () {
    this.usedList = []
    this.freeList = []
  }

  allocate (makeFunc) {
    let obj
    if (this.freeList.length > 0) {
      obj = this.freeList.pop()
    } else {
      obj = makeFunc()
    }

    this.usedList.push(obj)
    return obj
  }

  freeAll (clearFunc) {
    for (let i = 0; i < this.usedList.length; i++) {
      if (clearFunc) {
        clearFunc(this.usedList[i])
      }
      this.freeList.push(this.usedList[i])
    }
    this.usedList.length = 0
  }
}

/**
 * A wrapper type for mesh geometry and its material. Only the ModelObject instantiates the
 * THREE.Mesh objects that are passed to the renderer. ModelObject also creates the final
 * THREE.Material instance using the textures and transparency flag in 'materialDesc'
 */
function MeshDescriptor (geometry, materialDesc) {
  this.geometry = geometry
  this.materialDesc = materialDesc
}

function ModelObject (runtime, scene, renderer, platform) {
  THREE.Object3D.call(this)

  // User editable config
  this.quality = 0.5 // Streaming model quality. Ranges from 0 to 1.
  this.opaqueMaterial = new THREE.MeshBasicMaterial()
  this.wireframe = false

  // Streaming debug info accessible through getInfo()
  this.stats = {
    numVisible: 0,
    numShadowCasters: 0,
    numCachedMaterials: 0,
    numAssets: 0
  }

  // We need to present ourselves as a LOD object to get the update() call
  this.isLOD = true
  this.autoUpdate = true
  this.renderer = renderer
  this.cameraToView = new Map()
  this.viewLastUsed = new Map()
  this.materialPool = new ObjectPool()
  this.shaderPatcher = createShaderPatcher(platform.supportedFormats)
  this.name = 'UmbraModel'

  // Add API objects under their own object for clarity
  this.umbra = {
    runtime: runtime,
    scene: scene
  }

  // Temporary values we don't want to reallocate every frame
  this.matrixWorldInverse = new THREE.Matrix4()
  this.projScreenMatrix = new THREE.Matrix4()
  this.cameraWorldPosition = new THREE.Vector3()

  this.tempVector = new THREE.Vector3()
  this.dirVector = new THREE.Vector3()
}

ModelObject.prototype = Object.create(THREE.Object3D.prototype)
ModelObject.prototype.constructor = THREE.Object3D

ModelObject.prototype.getInfo = function () {
  let info = { connected: this.umbra.scene.isConnected() }
  if (info.connected) {
    info['sceneInfo'] = this.umbra.scene.getInfo()
  }
  Object.assign(info, this.stats)
  return info
}

function findLights (scene) {
  const lights = []
  scene.traverseVisible(obj => {
    if (obj.isDirectionalLight && obj.castShadow) {
      lights.push(obj)
    }
  })

  return lights
}

ModelObject.prototype.pruneOldViews = function (frame) {
  /**
   * We get no notification when cameras are removed from the scene graph
   * so we'll go and remove old views.
   */
  for (let [view, lastUsed] of this.viewLastUsed) {
    if (frame - lastUsed > 1000) {
      for (let [cam, view2] of this.cameraToView) {
        if (view2 === view) {
          this.cameraToView.delete(cam)
          break
        }
      }
      this.umbra.runtime.destroyView(view)
      this.viewLastUsed.delete(view)
    }
  }
}

ModelObject.prototype.update = function (camera) {
  let scene

  this.traverseAncestors(obj => {
    if (obj.isScene) {
      scene = obj
    }
  })

  if (!scene && !scene.isScene) {
    console.log('No parent scene found')
    return
  }

  let lights = []

  if (this.renderer.shadowMap.enabled) {
    lights = findLights(scene)
  }

  let view = this.cameraToView.get(camera)

  if (!view) {
    view = this.umbra.runtime.createView()
    this.cameraToView.set(camera, view)
  }

  const frame = this.renderer.info.render.frame
  this.viewLastUsed.set(view, frame)

  this.pruneOldViews(frame)

  this.umbra.scene.update(this.matrixWorld.elements)

  this.matrixWorldInverse.getInverse(camera.matrixWorld)
  this.projScreenMatrix.multiplyMatrices(camera.projectionMatrix, this.matrixWorldInverse)

  let dir = this.dirVector
  let vector3 = this.tempVector

  const lightDirections = lights.map(light => {
    dir.setFromMatrixPosition(light.target.matrixWorld)
    vector3.setFromMatrixPosition(light.matrixWorld)
    dir.sub(vector3)
    return [dir.x, dir.y, dir.z]
  }, lights)

  // By default we stream in meshes around the camera, but the user can override it too.
  if (camera.umbraStreamingPosition) {
    this.cameraWorldPosition.copy(camera.umbraStreamingPosition)
  } else {
    camera.getWorldPosition(this.cameraWorldPosition)
  }

  const pos = this.cameraWorldPosition
  view.update(this.projScreenMatrix.elements, [pos.x, pos.y, pos.z], this.quality, lightDirections)

  this.stats.numVisible = 0
  this.stats.numAssets = this.umbra.runtime.assets.size

  /**
   * Next we find the visible Umbra meshes and add them to the scene graph.
   * This is pretty tricky, because we want more meshes to show up in the shadow map pass
   * than in the main camera render pass. This is why 'mesh.castShadow' doesn't help here
   * since it does the exact opposite.
   *
   * We use a workaround that first adds the common meshes as children of the Umbra model
   * object but stashes the shadow caster meshes (visible only from lights) to an extra
   * list 'shadowCasters'.
   *
   * The trick is that after the children, we add a 'proxy' object that presents itself
   * as a 'LOD' object. As a consequence it gets its own update() call, and there we go
   * and add the shadow casters also to the children list. At this point the opaque
   * renderable objects were already collected to their own render list, so 'children'
   * is safe to modify.
   *
   * In essence, the flow is the following.
   *
   *    three.js                           model object (this)
   *    --------                           ------------------
   *    Starts traversing scene graph
   *    Calls model.update(cam) ---------> Updates views
   *                                       Fetches a list of renderables
   *                                       Adds common meshes to this.children
   *    Adds model.children to
   *      the render list
   *    Starts rendering model.children
   *    Calls proxy.update(cam) ---------> Proxy goes and adds shadow casters to this.children
   *    Starts the shadow pass
   *    Adds model.children to shadow
   *      render list
   *    Renders the shadow pass
   *    Renders the opaque pass
   *    Renders the transparent pass
   *
   * As you can see, the 'this.children' list is mutated halfway through the renderer's
   * scene graph traversal so that different object list ends up to the shadow pass render code.
   */

  // First filter away last frame's meshes
  let newChildren = []
  for (let i = 0; i < this.children.length; i++) {
    if (!this.children[i].isUmbraMesh) {
      newChildren.push(this.children[i])
    }
  }

  this.children = newChildren

  let shadowCasters = []

  let proxy = new THREE.Object3D()
  proxy.isLOD = true
  proxy.autoUpdate = true
  proxy.update = cam => {
    // Remove the proxy itself
    this.children.pop()

    // Add the shadow casters
    for (let i = 0; i < shadowCasters.length; i++) {
      this.children.push(shadowCasters[i])
    }
  }

  this.materialPool.freeAll(mat => {
    // Remove references to textures so GC can release the three.js objects
    delete mat.map
    delete mat.normalMap
    delete mat.metalnessMap
    delete mat.roughnessMap
  })

  const batchSize = 200
  let visible = []

  do {
    visible = view.getVisible(batchSize)

    for (let i = 0; i < visible.length; i++) {
      const { materialDesc, geometry } = visible[i].mesh

      // Fetch a new material from the pool if we already have free ones. This avoids
      // extra allocations and more importantly 'onBeforeCompile' calls.
      const material = this.materialPool.allocate(() => this.opaqueMaterial.clone())
      material.wireframe = this.wireframe

      material.onBeforeCompile = (shader, renderer) => {
        /**
         * If the original material already had a custom preprocessor callback we need to call
         * that first. We need to use 'apply' in case the callback uses 'this' reference to
         * access some material properties.
         */
        if (this.opaqueMaterial.onBeforeCompile) {
          this.opaqueMaterial.onBeforeCompile.apply(material, [shader, renderer])
        }

        this.shaderPatcher(shader, renderer)
      }

      const diffuseMap = materialDesc.textures[Formats.TextureType.DIFFUSE]
      const normalMap = materialDesc.textures[Formats.TextureType.NORMAL]
      const metalglossMap = materialDesc.textures[Formats.TextureType.SPECULAR]

      if (diffuseMap && diffuseMap.isTexture) {
        material.map = diffuseMap
      }

      if (normalMap && normalMap.isTexture) {
        material.normalMap = normalMap
        material.vertexTangents = true
        material.normalMapType = THREE.TangentSpaceNormalMap
      }

      if (metalglossMap && metalglossMap.isTexture) {
        material.metalnessMap = metalglossMap
        material.metalness = 1.0
        material.roughnessMap = metalglossMap
        material.roughness = 1.0
      }

      /**
       * We instatiate new Mesh objects each frame but the constructor is very cheap
       * and the references should live for a very short time since 'this.children'
       * gets cleared every frame. However if this still causes too much allocations
       * an object pool could help.
       */
      const mesh = new THREE.Mesh(geometry, material)
      mesh.isUmbraMesh = true
      mesh.matrixWorld.copy(this.matrixWorld)
      mesh.castShadow = this.castShadow
      mesh.receiveShadow = this.receiveShadow
      mesh.visible = true
      this.children.push(mesh)

      if ((visible[i].mask & 0x01) === 0) {
        shadowCasters.push(mesh)
        mesh.frustumCulled = true
      } else {
        this.children.push(mesh)
        mesh.frustumCulled = false
      }
    }

    this.stats.numVisible += visible.length
  } while (visible.length === batchSize)

  this.stats.numShadowCasters = shadowCasters.length
  this.stats.numCachedMaterials = this.materialPool.usedList.length + this.materialPool.freeList.length

  if (shadowCasters.length > 0) {
    this.children.push(proxy)
  }
}

ModelObject.prototype.dispose = function () {
  this.umbra.runtime.destroyView(this.umbra.view)
  this.umbra.runtime.destroyScene(this.umbra.scene)
  // Runtime must be manually freed by the user with .dispose() of the API object
}

function makeBoundingSphere (aabb) {
  const min = aabb[0]
  const max = aabb[1]
  const size = new THREE.Vector3(max[0] - min[0], max[1] - min[1], max[2] - min[2])
  const pos = new THREE.Vector3(min[0] + size.x * 0.5, min[1] + size.y * 0.5, min[2] + size.z * 0.5)
  return new THREE.Sphere(pos, size.length())
}

export function initWithThreeJS (renderer, userConfig) {
  return UmbraLibrary(userConfig).then(Umbra => {
    const supportedFormats = Umbra.getSupportedTextureFormats(renderer.context)

    // Three.js does not support BC5 compressed formats so we manually disable them.
    supportedFormats.flags &= ~Formats.TextureCapability.BC5

    let runtime = new Umbra.wrappers.Runtime(new Umbra.wrappers.Client(), supportedFormats)

    /**
     * Creating a model is an asynchronous operation because we might need to query the Project API
     * to map the given string names into numeric IDs. If the IDs are used then the promise will
     * resolve immediately.
     */
    let modelFactory = cloudArgs => {
      return Umbra.getIDs(cloudArgs).then((IDs) => {
        const scene = runtime.createScene()
        scene.connect(cloudArgs.token, IDs.project, IDs.model)

        const model = new ModelObject(runtime, scene, renderer, {
          supportedFormats: supportedFormats
        })

        return model
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
            console.log('Unknown texture format', info.format)
            job.fail()
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

    return {
      createModel: modelFactory,
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
