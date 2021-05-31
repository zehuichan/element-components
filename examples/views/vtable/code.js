export const vtable = {
  template: `
  <v-table :loading="loading" :data="data" :columns="columns" :total="total" :page.sync="query.page" :limit.sync="query.limit" @pagination="fetchData">
    <template #toolbar-title>
      插槽#toolbar-title
    </template>
    <template #toolbar-space>
      插槽#toolbar-space
    </template>
    <template #selection>
      <el-table-column type="selection" width="55"/>
    </template>
    <template #tags="{scope}">
      <el-tag v-for="tag in scope.row.tags" :key="tag" :type="tag.length > 5 ? 'warning' : 'success'">
        {{tag}}
      </el-tag>
    </template>
    <template #action="{scope}">
      <el-button type="text">Invite</el-button>
      <el-button type="text">Delete</el-button>
    </template>
  </v-table>
  `,
  javascript: `
  export default {
    data() {
      return {
        loading: false,
        tableData: [],
        columns: [],
        total: 0,
        query: {
          page: 1,
          limit: 15,
        }
      }
    },
    created() {
      // init data
      this.fetchData()
    },
    methods: {
      fetchData() {
        // fetch data...
      }
    }
  }
  `
}