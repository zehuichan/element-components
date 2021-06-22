### 介绍

通过本章节你可以了解到 @vcomponetns/element-ui 的安装方法和基本使用姿势。

### 前置条件

```js
import Vue from 'vue'

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Element)
```

### 安装

```shell
npm i element-components -S
```

### 引入组件

```js
// main.js
// 全局引入
import VComponents from 'vcomponents-element'

Vue.use(VComponents, {...opts})
```