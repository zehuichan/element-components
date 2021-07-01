### 介绍

`ElInput`的增强型输入框，新增`digit`、`number`不同类型的输入框

### 基础用法

可以通过 `v-model` 双向绑定输入框的值，通过 `placeholder` 设置占位提示文字。

```html
<!-- 允许输入正整数，调起纯数字键盘 -->
<v-input v-model="digit" type="digit" placeholder="整数"/>
<!-- 允许输入数字，调起带符号的纯数字键盘 -->
<v-input v-model="number" type="number" placeholder="数字"/>
<!--文本-->
<v-input v-model="text" type="text" placeholder="文本"/>
```

```js
export default {
  data() {
    return {
      digit: '',
      number: '',
      text: '',
    }
  }
}
```

## API

### Base Props

| 参数   | 说明           | 类型      | 默认值 |
| ------ | -------------- | --------- | ------ |
| value / v-model | 绑定值，支持`.sync`修饰符 | _string_  | _    |
| type  | 类型 `text` `textarea` `digit` `number` 和其他原生input的type值 | _string_  | `text`    |