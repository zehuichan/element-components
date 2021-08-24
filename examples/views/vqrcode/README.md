### 介绍

生成二维码。使用场景：支付码生成。

### 基础用法

```html
<!--默认-->
<v-qrcode v-model="value" @load="onLoad"/>
```

```js
export default {
  data() {
    return {
      value: 'https://translate.google.cn/?sl=auto&tl=en&text=%E4%BA%8C%E7%BB%B4%E7%A0%81&op=translate',
    }
  },
  methods: {
    onLoad(event) {
      console.log(event)
    }
  }
}
```

## API

### Base Props

| 参数   | 说明           | 类型      | 默认值 |
| ------ | -------------- | --------- | ------ |
| value / v-model | 绑定值源数据 | _string_  | _  |