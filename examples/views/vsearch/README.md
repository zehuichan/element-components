### 介绍

`ElInput`的增强型输入框，新增`digit`、`number`不同类型的输入框

### 基础用法

可以通过 `v-model` 双向绑定输入框的值，通过 `placeholder` 设置占位提示文字。

```html
<!-- 允许输入正整数，调起纯数字键盘 -->
<v-input v-model="digit" type="digit" placeholder="整数"/>
<!-- 允许输入数字，调起带符号的纯数字键盘 -->
<v-input v-model="number" type="number" placeholder="数字"/>
```

```js
export default {
  data() {
    return {
      tel: '',
      text: '',
      digit: '',
      number: '',
      password: '',
    }
  }
}
```