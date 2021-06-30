### 介绍

用于表示状态的小圆点。

支持自定义具体的色值。

### 基础用法

```html
<!--基础-->
<v-badge/>
<v-badge status="error"/>
<v-badge status="default"/>
<v-badge status="processing"/>
<v-badge status="warning"/>
<!--文案-->
<v-badge>Success</v-badge>
<v-badge status="error">Error</v-badge>
<v-badge status="default">Default</v-badge>
<v-badge status="processing">Processing</v-badge>
<v-badge status="warning">Warning</v-badge>
<!--自定义颜色-->
<v-badge color="#f50">Custom #f50</v-badge>
<v-badge color="#2db7f5">Custom #2db7f5</v-badge>
<v-badge color="#87d068">Custom #87d068</v-badge>
<v-badge color="#108ee9">Custom #108ee9</v-badge>
```

## API

### Base Props

| 参数   | 说明           | 类型      | 默认值 |
| ------ | -------------- | --------- | ------ |
| status | 类型 success \| error \| default \| processing \| warning | _string_  | `success`    |
| color | 颜色值 | _string_  | _    |
