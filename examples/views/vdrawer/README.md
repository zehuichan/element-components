### 介绍

`el-drawer`的二次封装，支持双向数据绑定展示隐藏。

公共基础组件，可再次封装。

### 基础用法

```html

<el-button type="primary" @click="show = true">打开dialog</el-button>

<v-dialog v-model="show" title="v-dialog"></v-dialog>
```

```js
export default {
  data() {
    return {
      show: false,
    }
  },
}
```

## API

### Base Props

| 参数   | 说明           | 类型      | 默认值 |
| ------ | -------------- | --------- | ------ |
| value / v-model | 绑定值 | _boolean_  | `false`   |
| 原生支持 el-drawer Attributes | 属性 | [el-dialog 文档](https://element.eleme.cn/#/zh-CN/component/drawer#drawer-attributes)  | _   |