<template>
  <demo-wrapper title="业务组件">
    <!--上传下载Excel-->
    <demo-section>
      <demo-card title="上传下载Excel">
        <demo-block title="v-excel-export前端导出excel">
          <v-excel-export type="warning" icon="el-icon-upload2">前端导出excel</v-excel-export>
        </demo-block>
        <demo-block title="v-excel-upload前端上传excel数据转json">
          <v-excel-upload type="success" icon="el-icon-download" @success="onSuccess">上传Excel</v-excel-upload>
        </demo-block>
        <demo-block title="v-uploader前端原生上传">
          <v-uploader type="info" icon="el-icon-upload">原生上传</v-uploader>
        </demo-block>
      </demo-card>
      <demo-card style="width: 60%;">
        <demo-block title="template">
          <highlightjs language="html" :code="vexcel.template"/>
        </demo-block>
        <demo-block title="javascript">
          <highlightjs language="javascript" :code="vexcel.javascript"/>
        </demo-block>
      </demo-card>
    </demo-section>
  </demo-wrapper>
</template>

<script>
// code
import { vexcel } from './code'

export default {
  name: 'vexcel',
  data() {
    return {
      vexcel,
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
  }
}
</script>