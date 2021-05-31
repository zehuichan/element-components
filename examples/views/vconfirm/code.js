export const vconfirm = {
  template: `
  <div>
    <v-confirm title="删除吗？">
      <el-button type="danger">删除</el-button>
    </v-confirm>
    <v-confirm title="停用吗？">
      <el-button type="warning">停用</el-button>
    </v-confirm>
  </div>
  `,
  javascript: `
  export default {
    data() {
      return {
      
      }
    },
  }
  `
}