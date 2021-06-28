### 介绍

`el-confirm`的二次封装。

### 基础用法

```html
<v-confirm title="删除吗？">
  <el-button type="danger">删除</el-button>
</v-confirm>
<v-confirm title="停用吗？">
  <el-button type="warning">停用</el-button>
</v-confirm>
```

```js
export default {
  data() {
    return {
    }
  }
}
```

## API

### Base Props

| 参数   | 说明           | 类型      | 默认值 |
| ------ | -------------- | --------- | ------ |
| 原生支持 el-popconfirm Attributes | 属性 | [el-dialog 文档](https://element.eleme.cn/#/zh-CN/component/popconfirm#attributes)  | _   |