### 介绍

用于实时展示倒计时数值，支持毫秒精度。[文档](https://vant-contrib.gitee.io/vant/#/zh-CN/count-down)

### 基础用法

time 属性表示倒计时总时长，单位为毫秒。

```html
<!--毫秒级渲染-->
<v-count-down millisecond :time="time" format="HH:mm:ss:SS"/>
<!--自定义样式-->
<v-count-down :time="time">
  <template #default="{timeData}">
    <span class="block">{{ timeData.hours | padStart }}</span>
    <span class="colon">:</span>
    <span class="block">{{ timeData.minutes | padStart }}</span>
    <span class="colon">:</span>
    <span class="block">{{ timeData.seconds | padStart }}</span>
  </template>
</v-count-down>
```

```js
export default {
  data() {
    return {
      time: 30 * 60 * 60 * 1000,
    }
  }
}
```

```less
.colon {
  display: inline-block;
  margin: 0 4px;
  color: #1989fa;
}

.block {
  display: inline-block;
  width: 22px;
  color: #fff;
  font-size: 12px;
  text-align: center;
  background-color: #1989fa;
}
```

## API

### Base Props

| 参数   | 说明           | 类型      | 默认值 |
| ------ | -------------- | --------- | ------ |
| time | 倒计时时长，单位毫秒   | _number \| string_  | `0`   |
| format      | 时间格式             | _string_           | `HH:mm:ss` |
| auto-start  | 是否自动开始倒计时   | _boolean_          | `true`     |
| millisecond | 是否开启毫秒级渲染   | _boolean_          | `false`    |