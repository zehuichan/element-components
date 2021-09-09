### 介绍

复杂度不会消失，只会转移。

### 基础用法

```html
<!--基础-->
<v-ellipsis expand-trigger="click" line-clamp="2">
  电灯熄灭 物换星移 泥牛入海<br/>
  黑暗好像 一颗巨石 按在胸口<br/>
  独脚大盗 百万富翁 摸爬滚打<br/>
  黑暗好像 一颗巨石 按在胸口
</v-ellipsis>
```

## API

### Base Props

| 参数   | 说明           | 类型      | 默认值 |
| ------ | -------------- | --------- | ------ |
| expand-trigger | 展开的触发方式 | _string_ | `click`    |
| line-clamp | 最大行数 | _string \| number_  | _    |
