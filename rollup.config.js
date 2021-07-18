import babel from '@rollup/plugin-babel'
import typescript from '@rollup/plugin-typescript'
import nodePolyfills from 'rollup-plugin-node-polyfills'
import dts from 'rollup-plugin-dts'

import pkg from './package.json'

export default [
  {
    input: 'src/index.ts',
    output: [
      {file: pkg.main, format: 'umd', name: 'paji-sdk', sourcemap: true, esModule: false},
      {file: pkg.module, format: 'esm', sourcemap: true},
    ],

    // 根據 https://github.com/rollup/plugins/tree/master/packages/babel 的說明
    external: [
      /@babel\/runtime/,
    ],
    // rollup plugins 的順序是從上到下
    plugins: [
      babel({
        // 根據 https://github.com/rollup/plugins/tree/master/packages/babel 的說明
        babelHelpers: 'runtime',
      }),
      typescript(),

      // 確保可以引用 node 內建的
      nodePolyfills()
    ]
  },
  {
    input: 'src/index.ts',
    output: [
      {
        file: pkg.typings,
        format: 'esm'
      }
    ],
    plugins: [
      dts(),
    ],
  },
]
