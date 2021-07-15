module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage',  // 表示當使用新語法時才會做 transform
        modules: false, // 表示不要將 ES module 中的 import 語法轉換成 require
        corejs: 3.15,
      }
    ],
    '@babel/preset-react',
  ],
  ignore: [
    'node_modules/**'
  ]
}
