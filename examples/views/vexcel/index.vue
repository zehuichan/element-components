<template>
  <demo-wrapper title="VExcel Excel 上传下载">
    <demo-card title="前端导出excel">
      <v-excel-export type="warning" icon="el-icon-download">前端导出excel</v-excel-export>
    </demo-card>
    <demo-card title="前端上传excel数据转json">
      <v-excel-upload type="success" icon="el-icon-upload2" @success="onSuccess">前端上传Excel</v-excel-upload>
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
        upload_data: []
      }
    },
    methods: {
      onSuccess({ results, header }) {
        for (let i = 0; i < results.length; i++) {
          let each = results[i]
          each = this.transExcelRow(each)
          this.upload_data.push({
            deliveryNumber: each['快递单号'],
            expressCompanyId: 1,
            orderId: each['订单号']
          })
        }
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