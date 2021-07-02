import babel from '@rollup/plugin-babel'

export default [
  // browser-friendly UMD build
  {
    input: 'src/index.js',
    output: {
      file: 'umd/paji-sdk.js',
      format: 'umd',
      name: 'paji-sdk',
      esModule: false
    },
    plugins: [
      babel({
        babelHelpers: 'bundled',
      }),
    ]
  },
  {
    input: {
      index: 'src/index.js',
      elements: 'src/elements/index.js',
      utils: 'src/utils/index.js',
    },
    external: [
      'react',
      'next/dynamic',
    ],
    output: [
      {
        dir: 'esm',
        format: 'esm',
      },
      {
        dir: 'cjs',
        format: 'cjs'
      }
    ],
    plugins: [
      babel({
        babelHelpers: 'bundled',
      }),
    ]
  }
]
