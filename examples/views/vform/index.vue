<template>
  <demo-wrapper title="VForm 动态表单">
    <demo-card>
      <v-form ref="form" v-model="dataForm" :options="options" label-position="left" label-width="120px">
        <template #input-label="{scope}">
          {{ scope.label }}-label
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
    </demo-card>
    <README/>
  </demo-wrapper>
</template>

<script>
import README from './README.md'

const defaultForm = {
  text: 'text',
  input: 'input',
  digit: null,
  number: null,
  textarea: null,
  radio: null,
  checkbox: [],
  select: null,
  treeselect: null,
  date: null,
  timepicker: null,
  timerange: null,
  week: null,
  month: null,
  year: null,
  dates: '',
  daterange: [],
  datetime: new Date(),
  datetimerange: [],
}

export default {
  name: 'vform',
  data() {
    return {
      dataForm: Object.assign({}, defaultForm),
      options: [
        { label: 'text', key: 'text', type: 'text' },
        { label: 'input', key: 'input', value: null, placeholder: '文本框', type: 'input' },
        {
          label: 'digit',
          key: 'digit',
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
          placeholder: '日期选择器',
          type: 'date',
          clearable: true,
        },
        {
          label: 'timepicker',
          key: 'timepicker',
          placeholder: '任意时间点',
          type: 'timepicker'
        },
        {
          label: 'timerange',
          key: 'timerange',
          placeholder: '任意时间范围',
          type: 'timepicker',
          isRange: true,
          'range-separator': '至',
          'start-placeholder': '开始时间',
          'end-placeholder': '结束时间',
        },
        {
          label: 'week',
          key: 'week',
          placeholder: '选择周',
          type: 'week',
          format: 'yyyy 第 WW 周',
        },
        {
          label: 'month',
          key: 'month',
          placeholder: '选择月',
          type: 'month',
        },
        {
          label: 'year',
          key: 'year',
          placeholder: '选择年',
          type: 'year',
        },
        {
          label: 'dates',
          key: 'dates',
          placeholder: '选择一个或多个日期',
          type: 'dates',
        },
        {
          label: 'daterange',
          key: 'daterange',
          value: [],
          placeholder: '日期范围选择器',
          type: 'daterange',
          'range-separator': '至',
          'start-placeholder': '开始日期',
          'end-placeholder': '结束日期',
        },
        {
          label: 'datetime',
          key: 'datetime',
          placeholder: '日期时间选择器',
          type: 'datetime',
        },
        {
          label: 'datetimerange',
          key: 'datetimerange',
          placeholder: '日期时间选择器',
          type: 'datetimerange',
          'range-separator': '至',
          'start-placeholder': '开始日期',
          'end-placeholder': '结束日期',
        },
        {
          label: 'switch',
          key: 'switch',
          type: 'switch',
        },
        {
          label: 'slider',
          key: 'slider',
          type: 'slider',
        },
        {
          label: 'rate',
          key: 'rate',
          type: 'rate',
        },
        { label: 'custom', key: 'custom' },
        { label: 'actions', key: 'actions' },
      ]
    }
  },
  methods: {
    onSubmit() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          const messageArr = Object.keys(this.dataForm).reduce((acc, key) => {
            acc.push(`${key}: ${this.dataForm[key]}`)
            return acc
          }, [])
          this.showData(messageArr)
        } else {
          return false
        }
      })
    },
    onReset() {
      this.$refs.form.resetFields()
    },
    showData(messageArr) {
      if (messageArr.length) {
        const h = this.$createElement
        messageArr = messageArr.map(msg => {
          return h('div', { style: { marginBottom: '8px' } }, msg)
        })
        this.$notify({
          title: '提交的表单数据',
          message: h('div', { style: { marginTop: '12px' } }, messageArr)
        })
      }
    }
  },
  components: {
    README
  }
}
</script>