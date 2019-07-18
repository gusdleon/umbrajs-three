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


