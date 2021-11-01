### 介绍

设置组件之间的间距。

### 基础用法

```html
<!--基础用法-->
<el-slider v-model="size"/>
<v-space :size="size">
  <el-card v-for="i in 3" :key="i" class="box-card" style="width: 250px">
    <template #header>
      <div class="card-header">
        <span>Card name</span>
        <el-button class="button" type="text">Operation button</el-button>
      </div>
    </template>
    <div v-for="o in 4" :key="o" class="text item">
      {{ 'List item ' + o }}
    </div>
  </el-card>
</v-space>
```

```js
export default {
  data() {
    return {
      size: 20,
    }
  },
}
```

## API

### Base Props

| 参数   | 说明           | 类型      | 默认值 |
| ------ | -------------- | --------- | ------ |
| align | 对齐方式，支持 _start \| end \| center \| baseline_    | _string_    | _ |
| direction | 间距方向，支持 _horizontal \| vertical_ | _string_  | `horizontal`    |
| size | 间距大小，支持分别制定横向和竖向的间距，`见下表` | _number \| string \| array_  | `small`    |
| wrap | 环绕类型的间距，用于折行的场景 | _boolean_  | `false`    |

### Prop Size

| 值   | 说明           |
| ------ | -------------- |
| mini | `4` |
| small | `8` |
| medium | `16` |
| large | `24` |
| type为 `array` | 例子：`[10, 20]` |


