# 啪唧工具包 paji-sdk

JavaScript 的開發工具包

## 透過 npm 安裝

```bash
npm install paji-sdk
```

## 使用

(方法參考至 ： [Code-splitting for libraries—bundling for npm with Rollup 1.0](https://levelup.gitconnected.com/code-splitting-for-libraries-bundling-for-npm-with-rollup-1-0-2522c7437697) )

```javascript
// 直接引用
import {generateRandomString} from 'paji-sdk'

// 引用模組 (CommonJS)
import {generateRandomString} from 'paji-sdk/cjs/utils'

// 引用模組 (ESM)
import {generateRandomString} from 'paji-sdk/ems/utils'
```

## 功能模組

| 模組        | 功能           |
|-------------|----------------|
| elements    | React 實用組件 |
| css-helpers | CSS 組件       |
| utils       | 實用工具包     |
