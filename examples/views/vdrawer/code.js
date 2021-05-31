export const vdrawer = {
  template: `
  <el-button type="primary" @click="showDrawer = true">打开drawer</el-button>
  
  <v-drawer v-model="showDrawer" title="v-drwaer" size="600px">
    #默认插槽
  </v-drawer>
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