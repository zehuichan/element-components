<template>
  <demo-wrapper title="业务组件">
    <!--v-drawer-->
    <demo-section>
      <demo-card title="v-drawer">
        <el-button type="primary" @click="showDrawer = true">打开drawer</el-button>
        <demo-block>
          <p>el-drawer的二次封装，支持双向数据绑定展示隐藏。</p>
          <p>公共基础组件，可再次封装。</p>
        </demo-block>
      </demo-card>
      <demo-card style="width: 60%;">
        <demo-block title="template">
          <highlightjs language="html" :code="vdrawer.template"/>
        </demo-block>
        <demo-block title="javascript">
          <highlightjs language="javascript" :code="vdrawer.javascript"/>
        </demo-block>
      </demo-card>
    </demo-section>
    <v-drawer v-model="showDrawer" title="v-drawer" size="600px">
      <demo-block title="template">
        <highlightjs language="html" :code="vdrawer.template"/>
      </demo-block>
      <demo-block title="javascript">
        <highlightjs language="javascript" :code="vdrawer.javascript"/>
      </demo-block>
    </v-drawer>
  </demo-wrapper>
</template>

<script>
  // code
  import { vdrawer } from './code'

  export default {
    name: 'vdrawer',
    data() {
      return {
        vdrawer,
        showDrawer: false
      }
    }
  }
</script>