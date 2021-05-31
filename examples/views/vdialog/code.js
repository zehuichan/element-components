export const vdialog = {
  template: `
  <el-button type="primary" @click="showDialog = true">打开dialog</el-button>
  
  <v-dialog v-model="showDialog" title="v-dialog">
    #默认插槽
  </v-dialog>
  `,
  javascript: `
  export default {
    data() {
      return {
        showDialog: false
      }
    },
  }
  `
}