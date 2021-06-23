### 介绍

管理后台通用搜索框组件，支持`input`、`digit`、`number`、`date`、`week`、`month`、`dates`、`datetime`、`daterange`，等表单域，后期会增加其他表单域，视具体需求而定。

### 基础用法

可以通过 `v-model` 双向绑定输入框的值，默认派发 `@search`  `@reset` 两个方法。

```html
<!-- 支持 enter 快速搜索，仅支持 input 类型的表单域 -->
<v-search v-model="form" :options="options" @search="onSearch" @reset="onReset">
  <template #tools>
    <el-button type="success">新增</el-button>
    <el-button type="warning">删除</el-button>
    <el-button type="info">编辑</el-button>
  </template>
  <template #name-label="{scope}">
    {{ scope.label }}
    <el-tooltip class="item" effect="dark" content="Top Center 提示文字" placement="top">
      <i class="el-icon-warning" style="color: #f44;"></i>
    </el-tooltip>
  </template>
</v-search>
```

```js
const defaultForm = {
  name: 'chenzehui',
  age: null,
  address: null,
  tags: null,
  tags1: null,
  digit: null,
  number: null,
  select: null,
  daterange: [],
}

export default {
  data() {
    return {
      form: Object.assign({}, defaultForm),
      options: [
        { label: 'Name', key: 'name', value: null, placeholder: 'Name', type: 'input' },
        { label: 'Age', key: 'age', value: null, placeholder: 'Age', type: 'input' },
        { label: 'Address', key: 'address', value: null, placeholder: 'Address', type: 'input' },
        { label: 'Tags', key: 'tags', value: null, placeholder: 'tags', type: 'input' },
        { label: 'Tags1', key: 'tags1', value: null, placeholder: 'tags1', type: 'input' },
        { label: 'digit', key: 'digit', value: null, placeholder: 'digit', type: 'digit' },
        { label: 'number', key: 'number', value: null, placeholder: 'number', type: 'number' },
        {
          label: 'Select',
          key: 'select',
          value: null,
          placeholder: 'Select',
          type: 'select',
          options: [
            { value: '3', label: '备选项' },
            { value: '6', label: '备选项' },
            { value: '9', label: '备选项' },
          ]
        },
        { label: 'Daterange', key: 'daterange', value: [], placeholder: 'Daterange', type: 'daterange' },
      ],
    }
  },
  methods: {
    onSearch(form) {
      alert(JSON.stringify(this.form))
    },
    onReset(form) {
      console.log(form)
    },
  },
}
```

## API

### Base Props

| 参数   | 说明           | 类型      | 默认值 |
| ------ | -------------- | --------- | ------ |
| value / v-model | 绑定值 | _object_  | _    |
| options | 对象数组，配置每一列显示的数据 | _Option[]_  | `[]`    |

### Events

| 事件名   | 说明           | 回调参数      |
| ------ | -------------- | --------- |
| search | 点击查询按钮时触发   | _value: object_  |
| reset | 点击重置按钮时触发   | _value: object_  | 

### Slots

| 名称   | 说明           | 
| ------ | -------------- | 
| default | Form Item   |
| key | Form Item 的内容   |
| key + '-label' | 标签文本的内容   |  
| extra | 扩展按钮的内容   |  