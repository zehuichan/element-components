<template>
  <demo-wrapper title="VConfirm 气泡确认框">
    <demo-card>
      <v-confirm title="删除吗？">
        <el-button type="danger">删除</el-button>
      </v-confirm>
      <v-confirm title="停用吗？">
        <el-button type="warning">停用</el-button>
      </v-confirm>
    </demo-card>
    <README/>
  </demo-wrapper>
</template>

<script>
  import README from './README.md'

  export default {
    name: 'vconfirm',
    data() {
      return {}
    },
    components: {
      README
    }
  }
</script>