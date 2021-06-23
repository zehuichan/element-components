<template>
  <demo-wrapper title="v-table 组合表格">
    <!--v-table-->
    <demo-card title="v-table">
      <v-table
        :loading="loading"
        :data="tableData"
        :columns="columns"
        :total="total"
        :page.sync="query.page"
        :limit.sync="query.limit"
        @pagination="initData"
      >
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
            {{ tag }}
          </el-tag>
        </template>
        <template #action="{scope}">
          <el-button type="text">Invite</el-button>
          <el-button type="text">Delete</el-button>
        </template>
      </v-table>
    </demo-card>
    <README/>
  </demo-wrapper>
</template>

<script>
  import README from './README.md'

  export default {
    name: 'vtable',
    data() {
      return {
        loading: false,
        tableData: [],
        columns: [],
        total: 0,
        query: {
          page: 1,
          limit: 10
        },
      }
    },
    created() {
      this.columns = [
        { label: 'Name', key: 'name' },
        { label: 'Age', key: 'age' },
        { label: 'Address', key: 'address' },
        { label: 'Tags', key: 'tags' },
        { label: 'Action', key: 'action' },
      ]
      this.initData()
    },
    methods: {
      initData() {
        this.loading = true
        this.tableData = [
          { name: 'John Brown', age: '32', address: 'New York No. 1 Lake Park', tags: ['NICE', 'DEVELOPER'] },
          { name: 'Jim Green', age: '42', address: 'London No. 1 Lake Park', tags: ['LOSER'] },
          { name: 'Joe Black', age: '32', address: 'Sidney No. 1 Lake Park', tags: ['COOL', 'TEACHER'] },
        ]
        this.total = 1
        this.loading = false
      },
    },
    components: {
      README
    }
  }
</script>

<style>
  .el-tag + .el-tag {
    margin-left: 8px;
  }
</style>