/**
 * Common utilities for examples.
 */

// Creates a mesh based on a THREE.Box3 bounding box.
function makeBoundingBoxMesh (box) {
  let size = new THREE.Vector3()
  let center = new THREE.Vector3()
  box.getSize(size)
  box.getCenter(center)
  const geometry = new THREE.BoxGeometry(size.x, size.y, size.z)
  geometry.translate(center.x, center.y, center.z)
  const material = new THREE.MeshBasicMaterial({
    color: 0x00FF00,
    wireframe: true
  })
  return new THREE.Mesh(geometry, material)
}

// Sets up the automatic resize handler
function setResizeListener (renderer, camera) {
  const listener = () => {
    renderer.setSize(window.innerWidth, window.innerHeight)
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
  }

  window.addEventListener('resize', listener)
  listener()
}

function makeSphere (radius, color) {
  var geometry = new THREE.SphereGeometry(radius, 32, 32)
  var material = new THREE.MeshBasicMaterial({ color })
  return new THREE.Mesh(geometry, material)
}

// Points the given OrbitControls instance 'controls' at 'model'
function placeCamera (controls, model) {
  let box = model.getBounds()
  let center = model.getCenter()
  let size = new THREE.Vector3()
  box.getSize(size)

  let sphere = new THREE.Sphere()
  box.getBoundingSphere(sphere)
  let diagonal = sphere.radius
  let p = center.clone()
  p.x += diagonal
  p.z += diagonal
  p.y += size.y

  controls.target = center.clone()
  controls.object.position.set(p.x, p.y, p.z)
}

// Sets the camera near and far clip planes to match model scale
function setCameraRange (camera, model) {
  const bounds = model.getBounds()
  const x = bounds.max.x - bounds.min.x
  const y = bounds.max.y - bounds.min.y
  const z = bounds.max.z - bounds.min.z
  const diagonal = Math.sqrt(x * x + y * y + z * z)

  camera.near = Math.max(0.01, Math.min(1.0, diagonal / 1e4))
  camera.far = Math.max(100, diagonal * 4)
  camera.updateProjectionMatrix()
}

function makeDebugMaterial(config, glslExpression) {
  let material = new THREE.MeshPhysicalMaterial(config)
  material.onBeforeCompile = (shader, renderer) => {
    shader.fragmentShader = shader.fragmentShader.replace(/}$/, `gl_FragColor = vec4(${glslExpression}, 1.);\n}`)
  }
  return material
}
