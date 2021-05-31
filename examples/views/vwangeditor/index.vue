<template>
  <demo-wrapper title="表单组件">
    <demo-section>
      <demo-card title="v-wang-editor">
        <v-wang-editor v-model="editor1"/>
        <div style="margin-bottom: 16px;"></div>
        <v-wang-editor v-model="editor2"/>
      </demo-card>
      <demo-card style="width: 60%;">
        <demo-block title="template">
          <highlightjs language="html" :code="vwangeditor.template"/>
        </demo-block>
        <demo-block title="javascript">
          <highlightjs language="javascript" :code="vwangeditor.javascript"/>
        </demo-block>
        <demo-block title="code">
          <div v-html="editor1"></div>
          <div v-html="editor2"></div>
        </demo-block>
      </demo-card>
    </demo-section>
  </demo-wrapper>
</template>

<script>
// code
import { vwangeditor } from './code'

export default {
  name: 'vwangeditor',
  data() {
    return {
      vwangeditor,
      editor1: '',
      editor2: '<p>支持回填</p>',
    }
  }
}
</script>