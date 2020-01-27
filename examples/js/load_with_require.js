requirejs.config({
  appDir: '.',
  baseUrl: 'js',
  paths: {
    three: ['//cdnjs.cloudflare.com/ajax/libs/three.js/108/three.min'],
  },
})

requirejs(['three', '../../dist/umbrajs-three.amd'], function(
  THREE,
  UmbraRuntime,
) {
  'use strict'

  // First create a three.js renderer
  const canvas = document.querySelector('#c')
  let renderer = new THREE.WebGLRenderer({ canvas })

  let init = UmbraRuntime.initWithThreeJS(renderer, {
    wasmURL: '/dist/umbra.wasm',
  })
  let sceneInit = init.then(function(Umbra) {
    // Create the Umbra scene object
    return Umbra.createScene(
      'key=pubk-6f592e67-5aec-479a-ad9e-46ad4e4fe699&project=745415655&model=745415871',
    )
  })

  Promise.all([init, sceneInit]).then(function([Umbra, umbraScene]) {
    // Set up a basic three.js scene
    let scene = new THREE.Scene()
    scene.background = new THREE.Color(0x222222)
    let camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.01,
      1000,
    )

    renderer.setSize(window.innerWidth, window.innerHeight)

    scene.add(umbraScene)

    // Point the camera at the object
    camera.position.set(-0.5, 0.1, 1)

    let animate = function() {
      // Find visible blocks and update streaming
      Umbra.update()

      // Regular three.js update
      renderer.render(scene, camera)
      requestAnimationFrame(animate)
    }

    // Start the animation loop
    animate()
  })
})
