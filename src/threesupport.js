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
 * Extend three's Object3D and add streamed-in meshes as children.
 */
function ModelObject (runtime, scene, view) {
  THREE.Object3D.call(this)

  this.quality = 0.5 // Streaming model quality. Ranges from 0 to 1.
  this.msPerFrame = 10 // How long can we afford to spend on decompressing assets.
  this.frustumCulled = false // Umbra does its own frustum culling
  this.opaqueMaterial = new THREE.MeshBasicMaterial()

  // Add API objects under their own object for clarity
  this.umbra = {
    runtime: runtime,
    scene: scene,
    view: view
  }

  // Can be used to enable workarounds
  this.quirks = {
    nonLinearShading: false
  }
}

ModelObject.prototype = Object.create(THREE.Object3D.prototype)
ModelObject.prototype.constructor = THREE.Object3D

ModelObject.prototype.getInfo = function () {
  let info = { connected: this.umbra.scene.isConnected() }
  if (info.connected) {
    info['sceneInfo'] = this.umbra.scene.getInfo()
  }
  return info
}

ModelObject.prototype.updateVisible = function (scene, camera) {
  if (typeof scene === 'undefined' || !scene.isScene) {
    throw new Error('No scene passed in as argument.')
  }

  if (typeof camera === 'undefined' || !camera.isCamera) {
    throw new Error('No camera passed in as argument.')
  }

  const runtime = this.umbra.runtime

  const handlers = {
    CreateMaterial: (job) => {
      runtime.addAsset(job, job.data)
    },
    DestroyMaterial: (job) => {
      runtime.removeAsset(job, job.data)
    },
    CreateTexture: (job) => {
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
       * of the contents, and we can't guarantee that the view would be valid
       * after memory growth anyway.
       */

      const mip = {
        width: info.width,
        height: info.height,
        data: new Uint8Array(buffer.bytes().slice())
      }

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
      if (info.colorSpace === 'linear' || this.quirks.nonLinearShading) {
        tex.encoding = THREE.LinearEncoding
      } else {
        tex.encoding = THREE.sRGBEncoding
      }

      tex.needsUpdate = true

      runtime.addAsset(job, tex)
      buffer.destroy()
    },
    DestroyTexture: (job) => {
      // Free texture data only if it's not a dummy texture
      if (job.data.isTexture) {
        job.data.dispose()
      }
      runtime.removeAsset(job, job.data)
    },
    CreateMesh: (job) => {
      // The mesh creation job gives us all the vertex data in job.data.buffers
      const posArray = job.data.buffers['position']
      const uvArray = job.data.buffers['uv']
      const indexArray = job.data.buffers['index']

      // FIXME these buffers may get neutered by memory growth before the GPU upload
      const geometry = new THREE.BufferGeometry()

      if (job.data.buffers['normal']) {
        const normalArray = job.data.buffers['normal']
        const normal = new THREE.Float32BufferAttribute(normalArray.floats().slice(), 3)

        normal.onUploadCallback = () => {
          normalArray.destroy()
          delete job.data.buffers['normal']
        }

        geometry.addAttribute('normal', normal)
      }

      const pos = new THREE.Float32BufferAttribute(posArray.floats().slice(), 3)
      const uv = new THREE.Float32BufferAttribute(uvArray.floats().slice(), 2)

      const indices = Array.from(indexArray.view())

      pos.onUploadCallback = () => {
        posArray.destroy()
        delete job.data.buffers['position']
      }

      uv.onUploadCallback = () => {
        uvArray.destroy()
        delete job.data.buffers['uv']
      }

      geometry.addAttribute('position', pos)
      geometry.addAttribute('uv', uv)
      geometry.setIndex(indices)

      // TODO create a new material for a mesh only if it has a new texture
      const material = this.opaqueMaterial.clone()

      // TODO replace these with an object from the library side?
      const DIFFUSE_INDEX = 0
      const diffuseMap = job.data.material.textures[DIFFUSE_INDEX]

      if (diffuseMap && diffuseMap.isTexture) {
        material.map = diffuseMap
      }

      // Create a new three.js mesh object per Umbra mesh
      const mesh = new THREE.Mesh(geometry, material)
      mesh.frustumCulled = false
      this.add(mesh)

      // We need a reference to the vertex buffers so we can free them when necessary
      mesh.userData.buffers = job.data.buffers

      // Register the asset with Umbra's runtime so it can referenced later when rendering
      runtime.addAsset(job, mesh)
    },
    DestroyMesh: (job) => {
      const mesh = job.data

      // Deallocate Emscripten heap blocks where vertex attributes were stored
      runtime.deallocateBuffers(mesh.userData.buffers)
      // Remove object from scene graph
      this.remove(mesh)
      // Free three.js resources (e.g. VBOs)
      mesh.geometry.dispose()
      // Tell Umbra's runtime that this asset doesn't exist anymore and finish the job
      runtime.removeAsset(job, mesh)
    }
  }

  runtime.handleJobs(handlers, this.msPerFrame)

  this.umbra.scene.update(scene.matrix.elements)

  const pos = camera.position

  // TODO don't instantiate these matrices every frame
  let matrixWorldInverse = new THREE.Matrix4()
  matrixWorldInverse.getInverse(camera.matrixWorld)
  let projScreenMatrix = new THREE.Matrix4()
  projScreenMatrix.multiplyMatrices(camera.projectionMatrix, matrixWorldInverse)

  this.umbra.view.update(projScreenMatrix.elements, [pos.x, pos.y, pos.z], this.quality)
  runtime.update()

  for (let i = 0; i < this.children.length; i++) {
    this.children[i].visible = false
  }

  const visible = this.umbra.view.getVisible(1000)

  // DEBUG MESSAGES
  window.visibleObjects = visible.length
  window.assetCount = runtime.assets.size

  for (let i = 0; i < visible.length; i++) {
    visible[i].mesh.visible = true
  }
}

ModelObject.prototype.dispose = function () {
  this.umbra.runtime.destroyView(this.umbra.view)
  this.umbra.runtime.destroyScene(this.umbra.scene)
  // Runtime must be manually freed by the user with .dispose() of the API object
}

export function initWithThreeJS (renderer, config) {
  return UmbraLibrary(config).then((Umbra) => {
    const supportedFormats = Umbra.getSupportedTextureFormats(renderer.context)
    let runtime = new Umbra.wrappers.Runtime(new Umbra.wrappers.Client(), supportedFormats.flags)

    /**
     * Creating a model is an asynchronous operation because we might need to query the Project API
     * to map the given string names into numeric IDs. If the IDs are used then the promise will
     * resolve immediately.
     */
    let modelFactory = (cloudArgs) => {
      return Umbra.getIDs(cloudArgs).then((IDs) => {
        const scene = runtime.createScene()
        scene.connect(cloudArgs.token, IDs.project, IDs.model)
        const view = runtime.createView()

        const model = new ModelObject(runtime, scene, view)

        // If the renderer is not gamma correct then sRGB textures shouldn't be used.
        model.quirks.nonLinearShading = !renderer.gammaOutput

        return model
      })
    }

    return {
      createModel: modelFactory,
      dispose: () => {
        runtime.destroy()
        runtime = undefined
      },
      lib: Umbra
    }
  })
}
