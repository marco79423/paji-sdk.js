module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        'modules': false
      }
    ],
    '@babel/preset-react',
    // '@babel/typescript'
  ],
  // plugins: [
  //   '@babel/plugin-transform-runtime'
  // ],
  ignore: [
    'node_modules/**'
  ]
}
