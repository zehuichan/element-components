### 介绍

将页面元素钉在可视范围。

### 基础用法

```html
<v-sticky :offset-top="10">
  <el-button type="primary">Affix top</el-button>
</v-sticky>
```

## API

### Base Props

| 参数   | 说明           | 类型      | 默认值 |
| ------ | -------------- | --------- | ------ |
| offsetTop | 距离窗口顶部达到指定偏移量后触发    | _number_    | `0` |
| zIndex | 元素的堆叠顺序 | _number_  | `10`    |
| className | 自定义类选择器 | _string_  | _    |
