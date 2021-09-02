<template>
  <demo-wrapper title="VSearch 搜索框">
    <demo-card>
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
    </demo-card>
    <README/>
  </demo-wrapper>
</template>

<script>
import README from './README.md'

const defaultForm = {
  name: 'chenzehui',
  age: null,
  address: null,
  tags: null,
  tags1: null,
  digit: null,
  number: null,
  select: null,
  daterange: [new Date(), new Date()],
}

export default {
  name: 'vsearch',
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
          valueFormat: 'yyyy-MM-dd'
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
    }
  },
  components: {
    README
  }
}
</script>