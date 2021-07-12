import babel from '@rollup/plugin-babel'
import typescript from '@rollup/plugin-typescript'
import dts from 'rollup-plugin-dts'
import {DEFAULT_EXTENSIONS} from '@babel/core'

export default [
  {
    input: {
      index: 'src/index.ts',
      elements: 'src/elements/index.ts',
      nats: 'src/nats/index.ts',
      utils: 'src/utils/index.ts',
    },
    output: [
      {
        dir: 'dist',
        format: 'esm',
        sourcemap: true
      },
    ],

    plugins: [
      babel({
        babelHelpers: 'bundled',
        extensions: [
          ...DEFAULT_EXTENSIONS,
          '.ts',
          '.tsx'
        ]
      }),
      typescript({
        declaration: true,
      }),
    ]
  },
  {
    input: {
      index: 'src/index.ts',
      elements: 'src/elements/index.ts',
      nats: 'src/nats/index.ts',
      utils: 'src/utils/index.ts',
    },
    output: [
      {
        dir: 'dist',
        format: 'esm'
      }
    ],
    plugins: [
      dts(),
    ],
  },
]
