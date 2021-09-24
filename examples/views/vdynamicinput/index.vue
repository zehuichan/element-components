<template>
  <demo-wrapper title="VDynamicInput 动态录入">
    <demo-card>
      <v-dynamic-input
        :data="tableData"
        :columns="columns"
        :prop="prop"
        @row-edit="onEditItem"
        @row-save="onSaveItem"
        @row-delete="onDeleteItem"
      />
    </demo-card>
    <README/>
  </demo-wrapper>
</template>

<script>
import README from './README.md'

const tableData = [
  { code: 'YWRk', action: 'add', desc: '新增' },
  { code: 'ZGVsZXRl', action: 'delete', desc: '删除' },
  { code: 'ZWRpdA==', action: 'edit', desc: '修改' },
  { code: 'cXVlcnk=', action: 'query', desc: '查询' },
  { code: 'aW1wb3J0', action: 'import', desc: '导入' },
  { code: 'ZXhwb3J0', action: 'export', desc: '导出' },
]

export default {
  name: 'vdynamicinput',
  data() {
    return {
      tableData: [],
      columns: [
        { label: '标识码', key: 'code', type: 'input', placeholder: '标识码' },
        { label: '操作名称', key: 'action', type: 'input', placeholder: '操作名称' },
        { label: '描述', key: 'desc', type: 'input', placeholder: '描述' },
      ],
      prop: {
        code: '',
        action: '',
        desc: '',
      }
    }
  },
  created() {
    this.initData()
  },
  methods: {
    initData() {
      this.tableData = tableData.reduce((acc, item) => {
        this.$set(item, 'edit', false)
        acc.push(item)
        return acc
      }, [])
    },
    onEditItem({ row, $index }, next) {
      next()
    },
    onSaveItem({ row, $index }, next) {
      next()
    },
    onDeleteItem({ row, $index }, next) {
      if (row.edit) {
        this.$message.error(`row: ${$index + 1}, 当前行未保存`)
        return false
      }
      this.tableData.splice(this.tableData.indexOf(row), 1)
    }
  },
  components: {
    README
  }
}
</script>

<style>

</style>