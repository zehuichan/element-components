<template>
  <demo-wrapper title="业务组件">
    <demo-section>
      <demo-card title="v-confirm">
        <v-confirm title="删除吗？">
          <el-button type="danger">删除</el-button>
        </v-confirm>
        <v-confirm title="停用吗？">
          <el-button type="warning">停用</el-button>
        </v-confirm>
      </demo-card>
      <demo-card style="width: 60%;">
        <demo-block title="template">
          <highlightjs language="html" :code="vconfirm.template"/>
        </demo-block>
        <demo-block title="javascript">
          <highlightjs language="javascript" :code="vconfirm.javascript"/>
        </demo-block>
      </demo-card>
    </demo-section>
  </demo-wrapper>
</template>

<script>
// code
import { vconfirm } from './code'

export default {
  name: 'vconfirm',
  data() {
    return {
      vconfirm,
      value: ''
    }
  }
}
</script>