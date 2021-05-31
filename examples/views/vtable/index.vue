<template>
  <demo-wrapper title="业务组件">
    <!--v-table-->
    <demo-card title="v-table">
      <v-table
        :loading="loading"
        :data="table.data"
        :columns="table.columns"
        :total="total"
        :page.sync="query.page"
        :limit.sync="query.limit"
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
      <demo-block title="template">
        <highlightjs language="html" :code="vtable.template"/>
      </demo-block>
      <demo-block title="javascript">
        <highlightjs language="javascript" :code="vtable.javascript"/>
      </demo-block>
    </demo-card>
  </demo-wrapper>
</template>

<script>
// mapping
import { table } from './mapping'
// code
import { vtable } from './code'

export default {
  name: 'vtable',
  data() {
    return {
      table,
      vtable,

      loading: false,
      total: 1,
      query: {
        page: 1,
        limit: 10
      },
    }
  }
}
</script>