# Umbra support for three.js

This is an extension to three.js that allows you to stream in massive 3D models in real time using Umbra's cloud service.

**Running the example.**

Run `npx http-server` and open [the player example](http://127.0.0.1:8080/examples/playertest.html?key=pubk-a33b4cb8-6643-46a7-a3ff-c768c812b3b6&project=1005906&model=699980469).
You should see a spinning red shoe.

## Using the Three.js integration

First create a three.js renderer:

    var renderer = new THREE.WebGLRenderer()

Then initialize Umbra and and pass in the newly created renderer as an argument:

      let Umbra = await UmbraRuntime.initWithThreeJS(renderer)
      let model = Umbra.createModel({
          token: 'pubk-a33b4cb8-6643-46a7-a3ff-c768c812b3b6',   // Your own token
          projectID: '1005906',                                 // Project ID
          modelID: '699980469', },                              // Model ID
        { wasmURL: 'umbra.wasm' })                              // WebAsm source gets downloaded separately

Note that we use `await` in the example so you need to call it inside an async function. See `test.html` for an example.

---

> **NOTE:** Use `project` and `model` instead of `projectID` and `modelID` if you pass in literal names instead of numbers.

---

Then you can create a three.js scene and add our model to it:

    var scene = new THREE.Scene()
    scene.add(model)

Finally, inside your animation loop you must update the runtime:

    model.updateVisible(scene, camera)

This call incrementally downloads and unpacks meshes, and it must be called every frame.

## Other functionality

This will return all projects associated with the given private key:

    let API = await UmbraRuntime.initWithThreeJS(renderer)
    let projects = await API.Umbra.getProjects(token)

Note that this isn't required if you use the helper above.
See the example `examples/listprojects.html` for an example.

## Deployment

You need to ship three things:

- `dist/umbrajs-three.js`
- `dist/umbra.wasm`
- three.js (you provide it, or use the one in `examples/js/three-r105.min.js`)


The path to `umbra.wasm` is set by the `wasmURL` parameter of `initUmbraThreeJS`.

In your HTML you then just do the following.

    <script src="js/three-r105.min.js"></script>
    <script src="dist/umbrajs-three.js"></script>

## Library structure

There are three abstraction layers from top to bottom:

- This three.js integration package.
- JavaScript wrapper classes in the `umbrajs` module. These make it easier to work with the Emscripten generated code.
- Native C++ code in `umbra.wasm` exposes a C-style API accessed by Emscripten's `Module` object.

## FAQ

- Why do we need to pass in the WebAsm path separately?
    - It's downloaded and compiled asynchronously to avoid blocking the main message loop.

- How can I get a numeric ID of my project and model?
    - Run the `listprojects` example using your private key. For example `examples/listprojects.html?key=myveryprivatekey`. This requires you to run the debug server with `npx http-server`.

- Why I'm I getting the error `Error: Mismatched anonymous define() module: function (exports, THREE)`?
    - RequireJS fails to load the module. You need to use the `umbrajs-three.amd.js` bundle instead.

- Which three.js version should I use?
    - This library has been tested with r105

- How do I integrate it with my custom engine?
    - Please see `src/threesupport.js` for an example integration. It's still a bit more complex than we'd like.

## Rebuilding the lib

Install the dependencies and build the modules using Rollup:

    npm install
    npm run build

Now you can add the script to your web page with

     <script src="dist/umbrajs-three.js"></script>

Remember to include three.js beforehand.

### Working with `umbrajs` at the same time

Clone `umbrajs` repo and "install" the package locally to with `npm link`:

    cd umbrajs
    npm link
    cd ../umbrajs-three
    npm link umbrajs

You need to link the library again if `npm install` was used.

