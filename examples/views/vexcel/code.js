export const vexcel = {
  template: `
  <div>
    <v-excel-export type="warning" icon="el-icon-upload2">前端导出excel</v-excel-export>
    <v-excel-upload type="success" icon="el-icon-download" @success="onSuccess">上传Excel</v-excel-upload>
    <v-uploader type="info" icon="el-icon-upload">原生上传</v-uploader>
  </div>
  `,
  javascript: `
  export default {
    data() {
      return {
        showDrawer: false
      }
    },
  }
  `
}