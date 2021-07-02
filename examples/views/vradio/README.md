### 介绍

基于 `ElRadio` 二次封装，简化使用条件。

### 基础用法

```html
<!--basic-->
<v-radio v-model="value" :options="options"/>
<!--border-->
<v-radio v-model="value" :options="options" border/>
<!--button-->
<v-radio v-model="value" :options="options" button/>
```

```js
export default {
  data() {
    return {
      value: 1,
      options: [
        { label: '上海', value: 1 },
        { label: '北京', value: 2, disabled: true },
        { label: '广州', value: 3 },
        { label: '深圳', value: 4 },
      ]
    }
  }
}
```

## API

### Base Props

| 参数   | 说明           | 类型      | 默认值 |
| ------ | -------------- | --------- | ------ |
| value / v-model | 绑定值 | _string \| number \| boolean_  | _    |
| options | 对象数组，配置每一列显示的数据 | _Options[]_  | `[]`    |
| button | 按钮样式 | _boolean_  | `false`    |
| border | 边框样式 | _boolean_  | `false`    |
| prop | 唯一标识的键名 | _object_  | `{ label: 'label', value: 'value' }`    |