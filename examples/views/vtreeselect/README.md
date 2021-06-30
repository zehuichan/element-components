### 介绍

`vue-treeselect`的二次封装组件，[文档](https://www.vue-treeselect.cn/)

### 基础用法

可以通过 `v-model` 双向绑定输入框的值，通过 `placeholder` 设置占位提示文字。

```html

<v-tree-select v-model="value" :options="options" placeholder="v-tree-select" clearable multiple/>
```

```js
export default {
  data() {
    return {
      value: ['a'],
      options: [
        {
          id: 'a',
          label: 'a',
          children: [
            {
              id: 'aa',
              label: 'aa',
            }, {
              id: 'ab',
              label: 'ab',
            }
          ],
        },
        {
          id: 'b',
          label: 'b',
        },
        {
          id: 'c',
          label: 'c',
        }
      ],
    }
  },
}
```

## API

### Base Props

| 参数   | 说明           | 类型      | 默认值 |
| ------ | -------------- | --------- | ------ |
| value / v-model | 绑定值| _string \| array_  | `null`    |
