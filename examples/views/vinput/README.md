### 介绍

`ElInput`的增强型输入框，新增`digit`、`number`不同类型的输入框

### 基础用法

可以通过 `v-model` 双向绑定输入框的值，通过 `placeholder` 设置占位提示文字。

```html
<!-- 允许输入正整数，调起纯数字键盘 -->
<v-input v-model="digit" type="digit" clearable placeholder="整数">
  <template #prepend>我是正整数</template>
</v-input>
<!-- 允许输入数字，调起带符号的纯数字键盘 -->
<v-input v-model="number" type="number" clearable placeholder="数字">
  <template #append>我是数字</template>
</v-input>
<!--文本-->
<v-input v-model="text" type="text" clearable placeholder="文本" class="input-with-select">
  <el-select v-model="select" slot="prepend" placeholder="请选择">
    <el-option label="餐厅名" value="1"/>
    <el-option label="订单号" value="2"/>
    <el-option label="用户电话" value="3"/>
  </el-select>
  <el-button slot="append" icon="el-icon-search"></el-button>
</v-input>
```

```js
export default {
  data() {
    return {
      digit: '',
      number: '',
      text: '',
      select: '',
    }
  }
}
```

```css
.el-select .el-input {
  width: 130px;
}

.input-with-select .el-input-group__prepend {
  background-color: #fff;
}
```

## API

### Base Props

| 参数   | 说明           | 类型      | 默认值 |
| ------ | -------------- | --------- | ------ |
| value / v-model | 绑定值，支持`.sync`修饰符 | _string_  | _    |
| type  | 类型 `text` `textarea` `digit` `number` 和其他原生input的type值 | _string_  | `text`    |