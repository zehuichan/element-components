### 介绍

生成条形码。

### 基础用法

```html
<!--默认-->
<v-barcode v-model="value" :options="options"/>
```

```js
export default {
  data() {
    return {
      value: '123456789012',
      options: {
        font: 12,
        height: 58,
        textMargin: 0
      }
    }
  }
}
```

## API

### Base Props

| 参数   | 说明           | 类型      | 默认值 |
| ------ | -------------- | --------- | ------ |
| value / v-model | 绑定值源数据 | _string_  | _  |