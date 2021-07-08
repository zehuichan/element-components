<template>
  <demo-wrapper title="VForm 动态表单">
    <demo-card>
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
    </demo-card>
    <README/>
  </demo-wrapper>
</template>

<script>
import README from './README.md'

const defaultForm = {
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
  name: 'vform',
  data() {
    return {
      dataForm: Object.assign({}, defaultForm),
      options: [
        { label: 'input', key: 'input', value: null, placeholder: '文本框', type: 'input', span: 8 },
        {
          label: 'digit',
          key: 'digit',
          value: null,
          placeholder: '整数',
          type: 'digit',
          rules: [
            { required: true, message: '请输入整数', trigger: 'blur' }
          ],
          span: 8
        },
        { label: 'number', key: 'number', value: null, placeholder: '数字', type: 'number', span: 8 },
        { label: 'textarea', key: 'textarea', value: null, placeholder: '文本域', type: 'textarea', span: 16 },
        { span: 8 },
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
          ],
          span: 8
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
          ],
          span: 8
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
          ],
          span: 8
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
          ],
          span: 8
        },
        {
          label: 'date',
          key: 'date',
          value: null,
          placeholder: '日期选择器',
          type: 'date',
          span: 8
        },
        {
          label: 'week',
          key: 'week',
          value: null,
          placeholder: '选择周',
          type: 'week',
          format: 'yyyy 第 WW 周',
          span: 8
        },
        {
          label: 'month',
          key: 'month',
          value: null,
          placeholder: '选择月',
          type: 'month',
          span: 8
        },
        {
          label: 'year',
          key: 'year',
          value: null,
          placeholder: '选择年',
          type: 'year',
          span: 8
        },
        {
          label: 'dates',
          key: 'dates',
          value: null,
          placeholder: '选择一个或多个日期',
          type: 'dates',
          span: 8
        },
        {
          label: 'daterange',
          key: 'daterange',
          value: [],
          placeholder: '日期范围选择器',
          type: 'daterange',
          span: 8
        },
        {
          label: 'datetime',
          key: 'datetime',
          value: null,
          placeholder: '日期时间选择器',
          type: 'datetime',
          span: 8
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
  },
  components: {
    README
  }
}
</script>

<style lang="scss">
.v-form {
  .el-checkbox-group {
    font-size: inherit;
  }
}
</style>