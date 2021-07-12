# 啪唧工具包 paji-sdk

JavaScript 的開發工具包

## 透過 npm 安裝

```bash
npm install paji-sdk
```

## 使用

```javascript
// 引用模組
import {utils} from 'paji-sdk'

const id = utils.generateRandomString()

// 直接引用子模組
import {generateRandomString} from 'paji-sdk/utils'

const id = generateRandomString()
```

## 功能模組

| 模組        | 功能             |
|-------------|------------------|
| elements    | React 實用組件   |
| css-helpers | CSS 組件         |
| nats        | NATS 專用 Client |
| utils       | 實用工具包       |
