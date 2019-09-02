import * as THREE from 'three'
import {
  Formats,
  PlatformFeatures,
  Runtime,
  Scene,
  View,
} from '@umbra3d/umbrajs'
import { ShaderPatcher } from './ShaderPatcher'
import { ObjectPool } from './ObjectPool'

type UmbraMesh = THREE.Mesh & { isUmbraMesh: true }
type UmbraCamera = THREE.Camera & { umbraStreamingPosition?: THREE.Vector3 }

/**
 * A wrapper type for mesh geometry and its material. Only the ModelObject instantiates the
 * THREE.Mesh objects that are passed to the renderer. ModelObject also creates the final
 * THREE.Material instance using the textures and transparency flag in 'materialDesc'
 */
export interface MeshDescriptor {
  geometry
  materialDesc
}

export class Model extends THREE.Object3D {
  // User editable config
  quality = 0.5 // Streaming model quality. Ranges from 0 to 1.
  opaqueMaterial = new THREE.MeshBasicMaterial()
  wireframe = false
  freeze = false

  // We need to present ourselves as a LOD object to get the update() call
  readonly isLOD = true
  readonly autoUpdate = true
  readonly name = 'UmbraModel'

  private renderer: THREE.WebGLRenderer

  private materialPool = new ObjectPool<THREE.Material>()
  private cameraToView = new Map<THREE.Camera, View>()
  private viewLastUsed = new Map<View, number>()
  private shaderPatcher: ShaderPatcher

  private stats = {
    numVisible: 0,
    numShadowCasters: 0,
    numCachedMaterials: 0,
    numAssets: 0,
  }

  private umbra: {
    runtime: Runtime
    scene: Scene
  }

  // Temporary values we don't want to reallocate every frame
  private matrixWorldInverse = new THREE.Matrix4()
  private projScreenMatrix = new THREE.Matrix4()
  private cameraWorldPosition = new THREE.Vector3()
  private tempVector = new THREE.Vector3()
  private dirVector = new THREE.Vector3()

  constructor(
    runtime: Runtime,
    scene: Scene,
    renderer: THREE.WebGLRenderer,
    features: PlatformFeatures,
  ) {
    super()

    this.renderer = renderer
    this.shaderPatcher = new ShaderPatcher(features.formats)

    // We need to flip the Z-axis since models are stored in "left-handed Y is up" coordinate system
    this.scale.set(1.0, 1.0, -1.0)

    // Add API objects under their own object for clarity
    this.umbra = {
      runtime: runtime,
      scene: scene,
    }
  }

  getInfo() {
    const info = { connected: this.umbra.scene.isConnected() }
    if (info.connected) {
      info['sceneInfo'] = this.umbra.scene.getInfo()
    }
    Object.assign(info, this.stats)
    return info
  }

  getBounds(): THREE.Box3 {
    if (!this.umbra.scene.isConnected()) {
      return undefined
    }

    const info = this.umbra.scene.getInfo()
    const bounds = info.bounds
    const min = bounds.min
    const max = bounds.max
    const box = new THREE.Box3(
      new THREE.Vector3(min[0], min[1], min[2]),
      new THREE.Vector3(max[0], max[1], max[2]),
    )
    return box
  }

  getCenter(): THREE.Vector3 {
    const bounds = this.getBounds()
    bounds.applyMatrix4(this.matrixWorld)
    const center = new THREE.Vector3()
    bounds.getCenter(center)
    return center
  }

  private pruneOldViews(frame: number): void {
    /**
     * We get no notification when cameras are removed from the scene graph
     * so we'll go and remove old views.
     */
    for (const [view, lastUsed] of this.viewLastUsed) {
      if (frame - lastUsed > 1000) {
        for (const [cam, view2] of this.cameraToView) {
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

  update = function(camera: UmbraCamera) {
    let scene

    if (this.freeze) {
      return
    }

    this.traverseAncestors(obj => {
      if (obj.isScene) {
        scene = obj
      }
    })

    if (!scene && !scene.isScene) {
      console.log('No parent scene found')
      return
    }

    function findLights(scene: THREE.Scene) {
      const lights = []
      scene.traverseVisible((obj: any) => {
        if (obj.isDirectionalLight && obj.castShadow) {
          lights.push(obj)
        }
      })

      return lights
    }

    let lights: THREE.DirectionalLight[] = []

    if (this.renderer.shadowMap.enabled) {
      lights = findLights(scene)
    }

    let view = this.cameraToView.get(camera)

    if (!view) {
      view = this.umbra.runtime.createView()
      this.cameraToView.set(camera, view)
    }

    const frame: number = this.renderer.info.render.frame

    this.viewLastUsed.set(view, frame)
    this.pruneOldViews(frame)

    this.umbra.scene.update(this.matrixWorld.elements)

    // If we are using a PBR material then we might need to flip the tangent vector
    if (typeof this.opaqueMaterial.normalMapType !== 'undefined') {
      // TODO(pvaananen): Would be nice to avoid recalculating the determinant every frame.
      const flip = this.matrixWorld.determinant() < 0

      if (flip !== this.shaderPatcher.flipTangent) {
        this.shaderPatcher.flipTangent = flip
        this.materialPool.clear()
      }
    }

    this.matrixWorldInverse.getInverse(camera.matrixWorld)
    this.projScreenMatrix.multiplyMatrices(
      camera.projectionMatrix,
      this.matrixWorldInverse,
    )

    const dir = this.dirVector
    const vector3 = this.tempVector

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
    view.update(
      this.projScreenMatrix.elements,
      [pos.x, pos.y, pos.z],
      this.quality,
      lightDirections,
    )

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
    const newChildren = []
    for (let i = 0; i < this.children.length; i++) {
      if (!this.children[i].isUmbraMesh) {
        newChildren.push(this.children[i])
      }
    }

    this.children = newChildren

    const shadowCasters = []

    const proxy = new THREE.Object3D() as any
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
        const { materialDesc, geometry } = visible[i].mesh as MeshDescriptor

        // Fetch a new material from the pool if we already have free ones. This avoids
        // extra allocations and more importantly 'onBeforeCompile' calls.
        const material = this.materialPool.allocate(() =>
          this.opaqueMaterial.clone(),
        )
        material.wireframe = this.wireframe
        material.transparent = materialDesc.transparent

        material.onBeforeCompile = (shader, renderer) => {
          /**
           * If the original material already had a custom preprocessor callback we need to call
           * that first. We need to use 'apply' in case the callback uses 'this' reference to
           * access some material properties.
           */
          if (this.opaqueMaterial.onBeforeCompile) {
            this.opaqueMaterial.onBeforeCompile.apply(material, [
              shader,
              renderer,
            ])
          }

          this.shaderPatcher.process(shader, renderer)
        }

        const diffuseMap = materialDesc.textures[Formats.TextureType.DIFFUSE]
        const normalMap = materialDesc.textures[Formats.TextureType.NORMAL]
        const metalglossMap =
          materialDesc.textures[Formats.TextureType.SPECULAR]

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
        const mesh = new THREE.Mesh(geometry, material) as UmbraMesh
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
    this.stats.numCachedMaterials =
      this.materialPool.usedList.length + this.materialPool.freeList.length

    if (shadowCasters.length > 0) {
      this.children.push(proxy)
    }
  }

  dispose() {
    for (const view of this.cameraToView.values()) {
      this.umbra.runtime.destroyView(view)
    }

    // Remove all Umbra meshes from children
    this.children = this.children.filter((x: UmbraMesh) => !x.isUmbraMesh)

    // Dispose all cached materials
    this.materialPool.freeAll(mat => mat.dispose())

    // We don't dispose mesh geometries here because they are managed by the Runtime

    this.umbra.runtime.destroyScene(this.umbra.scene)
    // Runtime must be manually freed by the user with .dispose() of the API object
  }
}
