### 介绍

基于 `ElCheckbox` 二次封装，简化使用条件。

### 基础用法

```html
<!--basic-->
<v-checkbox v-model="value" :options="options"/>
<!--border-->
<v-checkbox v-model="value" :options="options" border/>
<!--button-->
<v-checkbox v-model="value" :options="options" button/>
```

```js
export default {
  data() {
    return {
      value: [1],
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

### indeterminate

```html
<!--indeterminate 状态-->
<el-checkbox :indeterminate="indeterminate" v-model="checkAll" @change="onCheckAllChange">全选</el-checkbox>
<el-divider/>
<v-checkbox v-model="value" :options="options" @change="onChange"/>
```

```js
export default {
  data() {
    return {
      value: [1],
      options: [
        { label: '上海', value: 1 },
        { label: '北京', value: 2 },
        { label: '广州', value: 3 },
        { label: '深圳', value: 4 },
      ],
      indeterminate: true,
      checkAll: false,
    }
  },
  methods: {
    onCheckAllChange(val) {
      this.value = val ? this.options.map(item => item.value) : []
      this.indeterminate = false
    },
    onChange(val) {
      this.checkAll = val.length === this.options.length
      this.indeterminate = !!val.length && val.length < this.options.length
    }
  },
}
```

## API

### Base Props

| 参数   | 说明           | 类型      | 默认值 |
| ------ | -------------- | --------- | ------ |
| value / v-model | 绑定值 | _array_  | `[]`    |
| options | 对象数组，配置每一列显示的数据 | _Options[]_  | `[]`    |
| button | 按钮样式 | _boolean_  | `false`    |
| border | 边框样式 | _boolean_  | `false`    |
| prop | 唯一标识的键名 | _object_  | `{ label: 'label', value: 'value' }`    |