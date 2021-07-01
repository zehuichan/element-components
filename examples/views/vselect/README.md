### 介绍

当选项过多时，使用下拉菜单展示并选择内容。

### 基础用法

可以通过 `v-model` 双向绑定输入框的值，通过 `placeholder` 设置占位提示文字。

```html

<v-select v-model="value" :options="options"/>
```

```js
export default {
  data() {
    return {
      value: '',
      options: [
        {
          value: '选项1',
          label: '黄金糕'
        },
        {
          value: '选项2',
          label: '双皮奶'
        },
        {
          value: '选项3',
          label: '蚵仔煎'
        },
        {
          value: '选项4',
          label: '龙须面'
        },
        {
          value: '选项5',
          label: '北京烤鸭'
        }
      ],
    }
  }
}
```

## API

### Base Props

| 参数   | 说明           | 类型      | 默认值 |
| ------ | -------------- | --------- | ------ |
| value / v-model | 绑定值 | _boolean \| string \| number_ | _    |
| options | 对象数组，配置每一列显示的数据 | _Options[]_  | `[]`    |
| prop | 唯一标识的键名 | _object_  | `{ label: 'label', value: 'value' }`    |
