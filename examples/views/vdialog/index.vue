<template>
  <demo-wrapper title="业务组件">
    <!--v-dialog-->
    <demo-section>
      <demo-card title="v-dialog">
        <el-button type="primary" @click="showDialog = true">打开dialog</el-button>
        <demo-block>
          <p>el-dialog的二次封装，支持双向数据绑定展示隐藏。</p>
          <p>公共基础组件，可再次封装。</p>
        </demo-block>
      </demo-card>
      <demo-card style="width: 60%;">
        <demo-block title="template">
          <highlightjs language="html" :code="vdialog.template"/>
        </demo-block>
        <demo-block title="javascript">
          <highlightjs language="javascript" :code="vdialog.javascript"/>
        </demo-block>
      </demo-card>
    </demo-section>

    <v-dialog v-model="showDialog" title="v-dialog">
      <demo-block title="template">
        <highlightjs language="html" :code="vdialog.template"/>
      </demo-block>
      <demo-block title="javascript">
        <highlightjs language="javascript" :code="vdialog.javascript"/>
      </demo-block>
    </v-dialog>
  </demo-wrapper>
</template>

<script>
// code
import { vdialog } from './code'

export default {
  name: 'vdialog',
  data() {
    return {
      vdialog,

      showDialog: false,
    }
  }
}
</script>