import * as THREE from 'three'
import UmbraLibrary from 'umbrajs'

function makeFormat (format, type) {
  return { format: format, type: type }
}

const textureFormats = {
  rgb24: makeFormat(THREE.RGBFormat, THREE.UnsignedByte),
  rgba32: makeFormat(THREE.RGBAFormat, THREE.UnsignedByte),
  bc1: makeFormat(THREE.RGBA_S3TC_DXT1_Format, THREE.UnsignedByte),
  bc3: makeFormat(THREE.RGBA_S3TC_DXT5_Format, THREE.UnsignedByte),
  etc1_rgb: makeFormat(THREE.RGB_ETC1_Format, THREE.UnsignedByte),
  astc_4x4: makeFormat(THREE.RGBA_ASTC_4x4_Format, THREE.UnsignedByte)
}

/**
 * A wrapper type for mesh geometry and its material. Only the ModelObject instantiates the
 * THREE.Mesh objects that are passed to the renderer. ModelObject also creates the final
 * THREE.Material instance using the textures and transparency flag in 'materialDesc'
 */
function MeshDescriptor(geometry, materialDesc) {
  this.geometry = geometry
  this.materialDesc = materialDesc
}

function ModelObject (runtime, scene, renderer) {
  THREE.Object3D.call(this)

  // User editable config
  this.quality = 0.5 // Streaming model quality. Ranges from 0 to 1.
  this.opaqueMaterial = new THREE.MeshBasicMaterial()

  // Streaming debug info accessible through getInfo()
  this.stats = {
    numVisible: 0,
    numShadowCasters: 0,
    numAssets: 0,
  }

  // We need to present ourselves as a LOD object to get the update() call
  this.isLOD = true
  this.autoUpdate = true
  this.renderer = renderer
  this.cameraToView = new Map()
  this.viewLastUsed = new Map()
  this.name = 'UmbraModel'

  // Add API objects under their own object for clarity
  this.umbra = {
    runtime: runtime,
    scene: scene,
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
    // TODO remove old views
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

  const batchSize = 200
  this.children.length = 0
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

  let visible = []

  do {
    visible = view.getVisible(batchSize)

    for (let i = 0; i < visible.length; i++) {
      const meshDesc = visible[i].mesh

      // TODO create a new material only per new texture?
      const material = this.opaqueMaterial.clone()

      const DIFFUSE_INDEX = 0
      const diffuseMap = meshDesc.materialDesc.textures[DIFFUSE_INDEX]

      if (diffuseMap && diffuseMap.isTexture) {
        material.map = diffuseMap
      }

      /**
       * We instatiate new Mesh objects each frame but the constructor is very cheap
       * and the references should live for a very short time since 'this.children'
       * gets cleared every frame. However if this still causes too much allocations
       * an object pool could help.
       */
      const mesh = new THREE.Mesh(meshDesc.geometry, material)
      mesh.name = "umbramesh"
      mesh.matrixWorld.copy(this.matrixWorld)
      mesh.castShadow = this.castShadow
      mesh.receiveShadow = this.receiveShadow
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

  if (shadowCasters.length > 0) {
    this.children.push(proxy)
  }

}


ModelObject.prototype.dispose = function () {
  this.umbra.runtime.destroyView(this.umbra.view)
  this.umbra.runtime.destroyScene(this.umbra.scene)
  // Runtime must be manually freed by the user with .dispose() of the API object
}

function makeBoundingSphere(aabb) {
  const min = aabb[0]
  const max = aabb[1]
  const size = new THREE.Vector3(max[0] - min[0], max[1] - min[1], max[2] - min[2])
  const pos = new THREE.Vector3(min[0] + size.x * 0.5, min[1] + size.y * 0.5, min[2] + size.z * 0.5)
  return new THREE.Sphere(pos, size.length())
}

export function initWithThreeJS (renderer, userConfig) {
  const config = Object.assign({ resourcePipelineBytes: 50 * 1024 * 1024 }, userConfig)

  return UmbraLibrary(config).then(Umbra => {
    const api = {
      nonLinearShading: true,
    }

    const supportedFormats = Umbra.getSupportedTextureFormats(renderer.context)
    let runtime = new Umbra.wrappers.Runtime(new Umbra.wrappers.Client(), supportedFormats.flags, config.resourcePipelineBytes)

    /**
     * Creating a model is an asynchronous operation because we might need to query the Project API
     * to map the given string names into numeric IDs. If the IDs are used then the promise will
     * resolve immediately.
     */
    let modelFactory = cloudArgs => {
      return Umbra.getIDs(cloudArgs).then((IDs) => {
        const scene = runtime.createScene()
        scene.connect(cloudArgs.token, IDs.project, IDs.model)

        const model = new ModelObject(runtime, scene, renderer)

        // If the renderer is not gamma correct then sRGB textures shouldn't be used.
        api.nonLinearShading = !renderer.gammaOutput

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

          // We only support diffuse textures for now
          if (info.textureType !== 'diffuse') {
            runtime.addAsset(job, { dummy: true })
            buffer.destroy()
            return
          }

          let glformat

          if (textureFormats.hasOwnProperty(info.format)) {
            glformat = textureFormats[info.format]
          }

          if (!glformat) {
            console.log('Unknown texture format', info.format)
            buffer.destroy()
            job.fail()
            return
          }

          /**
           * We need to copy the texture data here since three.js takes ownership
           * of the contents.
           */

          const mip = {
            width: info.width,
            height: info.height,
            data: new Uint8Array(buffer.bytes().slice())
          }

          buffer.destroy()

          const tex = new THREE.CompressedTexture([mip], info.width, info.height)
          tex.format = glformat.format
          tex.type = glformat.type
          tex.magFilter = THREE.LinearFilter
          tex.minFilter = THREE.LinearFilter
          tex.anisotropy = 0

          /**
           * If gamma correction is not applied to the framebuffer (a three.js default)
           * then we need to keep diffuse textures as 'linear' to avoid darkening them.
           *
           * NOTE: This should be done only when using the unlit BasicMaterial shader.
           */
          if (info.colorSpace === 'linear' || api.nonLinearShading) {
            tex.encoding = THREE.LinearEncoding
          } else {
            tex.encoding = THREE.sRGBEncoding
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
          // The mesh creation job gives us all the vertex data in job.data.buffers
          const posArray = job.data.buffers['position']
          const uvArray = job.data.buffers['uv']
          const indexArray = job.data.buffers['index']

          const indices = Array.from(indexArray.view())
          indexArray.destroy()
          delete job.data.buffers['index']

          const geometry = new THREE.BufferGeometry()

          const pos = new THREE.Float32BufferAttribute(posArray.floats().slice(), 3)
          const uv = new THREE.Float32BufferAttribute(uvArray.floats().slice(), 2)

          geometry.addAttribute('position', pos)
          geometry.addAttribute('uv', uv)
          geometry.setIndex(indices)

          geometry.boundingSphere = makeBoundingSphere(job.data.bounds)

          posArray.destroy()
          delete job.data.buffers['position']
          uvArray.destroy()
          delete job.data.buffers['uv']

          if (job.data.buffers['normal']) {
            const normalArray = job.data.buffers['normal']
            const normal = new THREE.Float32BufferAttribute(normalArray.floats().slice(), 3)
            geometry.addAttribute('normal', normal)

            normalArray.destroy()
            delete job.data.buffers['normal']
          }

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

    return Object.assign(api, {
      createModel: modelFactory,
      update: update,
      dispose: () => {
        runtime.destroy()
        runtime = undefined
      },
      lib: Umbra,
      runtime: runtime
    })
  })
}
