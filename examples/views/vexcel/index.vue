<template>
  <demo-wrapper title="VExcel Excel 上传下载">
    <demo-card title="前端导出excel">
      <v-excel-export
        type="warning"
        icon="el-icon-download"
        :filename="filename"
        :can-export="canExport"
        :t-header="tHeader"
        :t-body="tBody"
      >
        导出
      </v-excel-export>
    </demo-card>
    <demo-card title="前端上传excel数据转json">
      <v-excel-upload type="success" icon="el-icon-upload2" @success="onSuccess">上传</v-excel-upload>
    </demo-card>
    <README/>
  </demo-wrapper>
</template>

<script>
import README from './README.md'

export default {
  name: 'vexcel',
  data() {
    return {
      tableData: [
        { name: 'John Brown', age: '32', address: 'New York No. 1 Lake Park', tags: ['NICE', 'DEVELOPER'] },
        { name: 'Jim Green', age: '42', address: 'London No. 1 Lake Park', tags: ['LOSER'] },
        { name: 'Joe Black', age: '32', address: 'Sidney No. 1 Lake Park', tags: ['COOL', 'TEACHER'] },
      ],

      filename: 'vtable',
      canExport: true,
      tHeader: ['Name', 'Age', 'Address', 'Tags'],
      tFilters: ['name', 'age', 'address', 'tags'],

      upload_data: []
    }
  },
  computed: {
    tBody() {
      return this.tableData.map(v => this.tFilters.map(j => {
        return v[j]
      }))
    }
  },
  methods: {
    onSuccess({ results, header }) {
      for (let i = 0; i < results.length; i++) {
        let each = results[i]
        each = this.transExcelRow(each)
        this.upload_data.push({
          name: each['Name'],
          age: each['Age'],
          address: each['Address'],
        })
      }
      console.log(this.upload_data)
    },
    transExcelRow(row) {
      const ret = {}
      for (const i in row) {
        ret[i.trim()] = row[i]
      }
      return ret
    },
  },
  components: {
    README
  }
}
</script>