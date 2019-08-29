import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import { eslint } from 'rollup-plugin-eslint'
import { terser } from 'rollup-plugin-terser'
import fs from 'fs'

function copyfiles(files) {
  return {
    name: 'copy',
    buildEnd: () => {
      files.forEach(([from, to]) => {
        fs.copyFileSync(from, to)
      });
    }
  }
}

const extensions = ['.js', '.ts']

const commonPlugins = () => [
  resolve({ extensions }),
  eslint({
    include: 'src/*'
  }),
  babel({ extensions, include: ['src/**/*'] }),
  copyfiles([
    ['node_modules/@umbra3d/umbrajs/dist/umbra.wasm', 'dist/umbra.wasm']
  ])
]

const makeOutput = (name, format) => ({
  file: name,
  format: format,
  name: 'UmbraRuntime',
  exports: 'named',
  sourcemap: true,
  globals: { three: 'THREE' }
})

const config = [
  {
    input: 'src/index.ts',
    output: [
        makeOutput(`dist/umbrajs-three.js`, 'umd'),
        makeOutput(`dist/umbrajs-three.amd.js`, 'amd'),
        makeOutput(`dist/umbrajs-three.esm.js`, 'esm')
    ],
    external: ['three'],
    plugins: commonPlugins()
  },
  {
    input: 'src/index.ts',
    output: [
        makeOutput(`dist/umbrajs-three.min.js`, 'umd'),
        makeOutput(`dist/umbrajs-three.amd.min.js`, 'amd'),
        makeOutput(`dist/umbrajs-three.esm.min.js`, 'esm')
    ],
    external: ['three'],
    plugins: [
      ...commonPlugins(),
      terser()
    ]
  }
]

module.exports = config
