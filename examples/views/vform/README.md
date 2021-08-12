### 介绍

动态表单。暂不支持表单联动。

后续2.0版本会引入新特性，`jsx`、表单联动等等。

### 基础用法

可以通过 `v-model` 双向绑定输入框的值。

```html
<!--支持自定义label，表单域-->
<v-form ref="form" v-model="dataForm" :options="options" label-position="right" label-width="80px">
  <template #input-label="{scope}">
    {{ scope.label }}
  </template>
  <template #custom="{scope}">
    <el-image lazy fit="contain" style="width: 100px; height: 100px">
      <div slot="placeholder" class="image-slot">
        <i class="el-icon-loading"></i>
      </div>
    </el-image>
    {{ scope }}
  </template>
  <template #actions>
    <el-button type="primary" @click="onSubmit">保存</el-button>
    <el-button @click="onReset">重置</el-button>
  </template>
</v-form>
```

```js
const defaultForm = {
  text: 'text',
  input: null,
  digit: null,
  number: null,
  textarea: null,
  radio: null,
  checkbox: [],
  select: null,
  treeselect: null,
  date: null,
  week: null,
  month: null,
  year: null,
  dates: '',
  daterange: [],
  datetime: null,
}

export default {
  data() {
    return {
      dataForm: Object.assign({}, defaultForm),
      options: [
        { label: 'text', key: 'text', type: 'text' },
        { label: 'input', key: 'input', value: null, placeholder: '文本框', type: 'input' },
        {
          label: 'digit',
          key: 'digit',
          value: null,
          placeholder: '整数',
          type: 'digit',
          rules: [
            { required: true, message: '请输入整数', trigger: 'blur' }
          ]
        },
        { label: 'number', key: 'number', value: null, placeholder: '数字', type: 'number' },
        { label: 'textarea', key: 'textarea', value: null, placeholder: '文本域', type: 'textarea' },
        {
          label: 'radio',
          key: 'radio',
          value: null,
          placeholder: '单选框组',
          type: 'radio',
          options: [
            { label: '备选项3', value: '3', },
            { label: '备选项6', value: '6', },
            { label: '备选项9', value: '9', },
          ]
        },
        {
          label: 'checkbox',
          key: 'checkbox',
          value: [],
          placeholder: '多选框组',
          type: 'checkbox',
          border: true,
          options: [
            { label: '上海', value: '1', },
            { label: '北京', value: '2', },
            { label: '广州', value: '3', },
            { label: '深圳', value: '4', },
          ]
        },
        {
          label: 'select',
          key: 'select',
          value: null,
          placeholder: '选择器',
          type: 'select',
          options: [
            { value: '3', label: '备选项3' },
            { value: '6', label: '备选项6' },
            { value: '9', label: '备选项9' },
          ]
        },
        {
          label: 'treeselect',
          key: 'treeselect',
          value: null,
          placeholder: '树选择',
          type: 'treeselect',
          options: [
            {
              id: 'a',
              label: 'a',
              children: [
                {
                  id: 'aa',
                  label: 'aa',
                }, {
                  id: 'ab',
                  label: 'ab',
                }
              ],
            },
            {
              id: 'b',
              label: 'b',
            },
            {
              id: 'c',
              label: 'c',
            }
          ]
        },
        {
          label: 'date',
          key: 'date',
          value: null,
          placeholder: '日期选择器',
          type: 'date'
        },
        {
          label: 'week',
          key: 'week',
          value: null,
          placeholder: '选择周',
          type: 'week',
          format: 'yyyy 第 WW 周',
        },
        {
          label: 'month',
          key: 'month',
          value: null,
          placeholder: '选择月',
          type: 'month',
        },
        {
          label: 'year',
          key: 'year',
          value: null,
          placeholder: '选择年',
          type: 'year',
        },
        {
          label: 'dates',
          key: 'dates',
          value: null,
          placeholder: '选择一个或多个日期',
          type: 'dates',
        },
        {
          label: 'daterange',
          key: 'daterange',
          value: [],
          placeholder: '日期范围选择器',
          type: 'daterange',
        },
        {
          label: 'datetime',
          key: 'datetime',
          value: null,
          placeholder: '日期时间选择器',
          type: 'datetime',
        },
        { label: 'custom', key: 'custom', span: 24 },
        { label: 'actions', key: 'actions', span: 24 },
      ]
    }
  },
  methods: {
    onSubmit() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.$message.success('Success!')
        } else {
          return false
        }
      })
    },
    onReset() {
      this.$refs.form.resetFields()
    }
  }
}
```

```scss
.v-form {
  .el-checkbox-group {
    font-size: inherit;
  }
}
```

## API

### Base Props

| 参数   | 说明           | 类型      | 默认值 |
| ------ | -------------- | --------- | ------ |
| value / v-model | 绑定值 | _object_  | _    |