# Umbra support for three.js

**Render massive 3D models in real time with three.js**

This is an extension to three.js that allows you to stream in and render large models using [Umbra's cloud service](https://www.umbra3d.com/).

**Live Demos**

<a href="https://umbrasoftware.github.io/umbrajs-three/examples/studio.html" target="_blank"><img src="img/littledude.jpg" alt="Studio example" /></a>
<a href="https://umbrasoftware.github.io/umbrajs-three/examples/shadows.html" target="_blank"><img src="img/pbr.jpg" alt="PBR example" /></a>
<a href="https://umbrasoftware.github.io/umbrajs-three/examples/streaming_position.html" target="_blank"><img src="img/bridge.jpg" alt="Streaming position example" /></a>

Click on any of the images above to see Umbra running in your browser.

[Getting Started](https://github.com/UmbraSoftware/umbrajs-three/wiki/Getting-Started) &mdash;
[Example code](https://github.com/UmbraSoftware/umbrajs-three/tree/master/examples) &mdash;
[API reference](https://github.com/UmbraSoftware/umbrajs-three/wiki/Library-API)

## Usage

Download the library from the `dist/` directory of this repository or `npm install @umbra3d/umbrajs-three`. Then add it to your HTML:

```html
<script src="umbrajs-three.js"></script>
```

If you used `npm install` you can find the file in `node_modules/@umbra3d/umbrajs-three/dist/umbrajs-three.js`. You need also `umbra.wasm`, see [Webpack build](https://github.com/UmbraSoftware/umbrajs-three/wiki/Deployment#webpack-build) for more.

First create a three.js renderer and then initialize Umbra and and pass in a three.js renderer as an argument:

```javascript
let Umbra = await UmbraRuntime.initWithThreeJS(renderer)
let umbraScene = Umbra.createScene(
  'key=pubk-6f592e67-5aec-479a-ad9e-46ad4e4fe699&project=745415655&model=745415871',
)
```

The string argument identifies the optimized 3D scene to be streamed from Umbra's cloud.

You can then create a three.js scene and add our `umbraScene` to it:

```javascript
var scene = new THREE.Scene()
scene.add(umbraScene)
```

Finally, inside your animation loop you must update the runtime:

```javascript
Umbra.update()
```

This call incrementally downloads and unpacks meshes, and it must be called every frame.

**Running examples locally**

Download this repository and run `npx http-server`. Then open [the player example](http://127.0.0.1:8080/examples/player.html?key=pubk-a33b4cb8-6643-46a7-a3ff-c768c812b3b6&project=1005906&model=699980469).
You should see a red shoe.

See [the build instructions](https://github.com/UmbraSoftware/umbrajs-three/wiki/Building-the-library) for local builds.

**Uploading scenes**

You need a free trial account to upload scenes to Umbra's cloud. Please fill a request access form at [https://www.umbra3d.com/access-request](https://www.umbra3d.com/access-request) to start your trial.
