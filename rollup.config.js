import resolve from "rollup-plugin-node-resolve";
import { eslint } from "rollup-plugin-eslint";
import { terser } from "rollup-plugin-terser";
import fs from "fs";

const globals = { three: "THREE" };

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


const config = [
  {
    input: "src/threesupport.js",
    output: [
      {
        file: `dist/umbrajs-three.js`,
        format: "umd",
        name: "UmbraRuntime",
        globals
      },
      {
        file: `dist/umbrajs-three.amd.js`,
        format: "amd",
        name: "UmbraRuntime",
        globals
      }
    ],
    external: ["three"],
    plugins: commonPlugins()
  },
  {
    input: "src/threesupport.js",
    output: [
      {
        file: `dist/umbrajs-three.min.js`,
        format: "umd",
        name: "UmbraRuntime",
        globals
      },
      {
        file: `dist/umbrajs-three.amd.min.js`,
        format: "amd",
        name: "UmbraRuntime",
        globals
      }
    ],
    external: ["three"],
    plugins: [
      ...commonPlugins(),
      terser()
    ]
  }
];

module.exports = config;
