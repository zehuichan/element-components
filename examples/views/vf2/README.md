### 介绍

F2 是一个专注于移动，开箱即用的可视化解决方案。

### 基础用法

```sh
#鉴于组件库体积问题，需自行安装依赖库才可使用该组件。
npm i -S @antv/f2
yarn add @antv/f2
```

```html
<!--基础-->
<v-f2 :init="basic"/>
<v-f2 :init="line"/>
<v-f2 :init="area"/>
```

```js
export default {
  methods: {
    basic,
    line,
    area
  },
}
```

## API

### Base Props

| 参数   | 说明           | 类型      | 默认值 |
| ------ | -------------- | --------- | ------ |
| init | 初始化方法 | _function_  | `function(F2, options)`    |
| width | 宽度 | _string \| number_  | `400`    |
| height | 高度 | _string \| number_  | `260`    |
