import resolve from "rollup-plugin-node-resolve";
import { eslint } from "rollup-plugin-eslint";
import { terser } from "rollup-plugin-terser";
import fs from "fs";

function copyfiles(files) {
  return {
    name: "copy",
    buildEnd: () => {
      files.forEach(([from, to]) => {
        fs.copyFileSync(from, to)
      });
    }
  }
}

// This can't be just an array because the plugins need to be instantiated for each config.
const commonPlugins = () => [
  eslint({
    include: "src/*"
  }),
  resolve(),
  copyfiles([
    ["node_modules/@umbra3d/umbrajs/dist/umbra.wasm", "dist/umbra.wasm"]
  ])
];

const makeOutput = (name, format) => ({
  file: name,
  format: format,
  name: "UmbraRuntime",
  globals: { three: "THREE" }
});

const config = [
  {
    input: "src/threesupport.js",
    output: [
        makeOutput(`dist/umbrajs-three.js`, "umd"),
        makeOutput(`dist/umbrajs-three.amd.js`, "amd"),
        makeOutput(`dist/umbrajs-three.esm.js`, "es")
    ],
    external: ["three"],
    plugins: commonPlugins()
  },
  {
    input: "src/threesupport.js",
    output: [
        makeOutput(`dist/umbrajs-three.min.js`, "umd"),
        makeOutput(`dist/umbrajs-three.amd.min.js`, "amd"),
        makeOutput(`dist/umbrajs-three.esm.min.js`, "es")
    ],
    external: ["three"],
    plugins: [
      ...commonPlugins(),
      terser()
    ]
  }
];

module.exports = config;
