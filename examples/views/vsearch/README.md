### 介绍

管理后台通用搜索框组件，支持 `input`、`digit`、`number`、`date`、`week`、`month`、`dates`、`datetime`、`daterange`，等表单域，后续会增加其他表单域，视具体需求而定。

新增 `enter` 快速搜索功能，仅支持 `input`、`digit`、`number` 类型的表单域。

### 基础用法

可以通过 `v-model` 双向绑定输入框的值，默认派发 `@search`  `@reset` 两个方法。

```html
<!--基础用法-->
<v-search v-model="form" :options="options" @search="onSearch" @reset="onReset">
  <template #tools>
    <el-button type="success" icon="el-icon-circle-plus-outline">新增</el-button>
    <el-button type="primary" icon="el-icon-edit-outline">编辑</el-button>
    <el-button type="danger" icon="el-icon-delete">删除</el-button>
  </template>

  <template #extra>
    #extra
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
        { label: 'Name', key: 'name', placeholder: 'Name', type: 'input' },
        { label: 'Age', key: 'age', placeholder: 'Age', type: 'input' },
        { label: 'Address', key: 'address', placeholder: 'Address', type: 'input' },
        { label: 'Tags', key: 'tags', placeholder: 'tags', type: 'input' },
        { label: 'Tags1', key: 'tags1', placeholder: 'tags1', type: 'input' },
        { label: 'digit', key: 'digit', placeholder: 'digit', type: 'digit' },
        { label: 'number', key: 'number', placeholder: 'number', type: 'number' },
        {
          label: 'Select',
          key: 'select',
          placeholder: 'Select',
          type: 'select',
          options: [
            { value: '3', label: '备选项' },
            { value: '6', label: '备选项' },
            { value: '9', label: '备选项' },
          ]
        },
        {
          label: 'Daterange',
          key: 'daterange',
          placeholder: 'Daterange',
          type: 'daterange',
          valueFormat: 'yyyy-MM-dd',
          'range-separator': '至',
          'start-placeholder': '开始日期',
          'end-placeholder': '结束日期',
        },
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
| options | 对象数组，配置每一列显示的数据 | _array_  | `[]`    |
| label-position | 表单域标签的位置，如果值为 left 或者 right 时，则需要设置 label-width | _string_  | `left`    |
| label-width | 表单域标签的宽度，例如 '50px'。作为 Form 直接子元素的 form-item 会继承该值。支持 auto。 | _string_  | `110px`    |
| span `v1.6.20` | 可展示表单项阈值 | _string \| number_  | `6`    |
| threshold | 可展示表单项阈值 | _string \| number_  | `6`    |

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
| tools `v1.6.15` | 非兼容更新，左侧扩展按钮的内容   |  
| extra `v1.6.15` | 非兼容更新，右侧扩展按钮的内容   |  