### 介绍

生成二维码。使用场景：支付码生成。

### 基础用法

```html
<!--默认-->
<v-qrcode v-model="str" @load="onAction('load1', $event)"/>
<!--带logo-->
<v-qrcode v-model="str" :logo="logo" @load="onAction('load2', $event)"/>
```

```js
export default {
  data() {
    return {
      str: 'https://translate.google.cn/?sl=auto&tl=en&text=%E4%BA%8C%E7%BB%B4%E7%A0%81&op=translate',
      logo: require('./logo.jpg'),
      url1: '',
      url2: '',
    }
  },
  methods: {
    onAction(type, event) {
      switch (type) {
        case 'load1':
          this.url1 = event
          break
        case 'load2':
          this.url2 = event
          break
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
| logo | logo地址   | _string_  | _  |