<template>
  <demo-wrapper title="展示组件">
    <!--v-badge-->
    <demo-section>
      <demo-card title="v-badge">
        <v-badge/>
        <v-badge status="error"/>
        <v-badge status="default"/>
        <v-badge status="processing"/>
        <v-badge status="warning"/>
        <br/>
        <v-badge>Success</v-badge>
        <br/>
        <v-badge status="error">Error</v-badge>
        <br/>
        <v-badge status="default">Default</v-badge>
        <br/>
        <v-badge status="processing">Processing</v-badge>
        <br/>
        <v-badge status="warning">Warning</v-badge>
        <br/>
        <v-badge color="#f50">Custom #f50</v-badge>
        <br/>
        <v-badge color="#2db7f5">Custom #2db7f5</v-badge>
        <br/>
        <v-badge color="#87d068">Custom #87d068</v-badge>
        <br/>
        <v-badge color="#108ee9">Custom #108ee9</v-badge>
        <demo-block title="状态点">
          <p>用于表示状态的小圆点。</p>
          <p>支持自定义具体的色值。</p>
        </demo-block>
      </demo-card>
      <demo-card style="width: 60%;">
        <demo-block title="template">
          <highlightjs language="html" :code="vbadge.template"/>
        </demo-block>
      </demo-card>
    </demo-section>
  </demo-wrapper>
</template>

<script>
// code
import { vbadge } from './code'

export default {
  name: 'vbadge',
  data() {
    return {
      vbadge,
    }
  }
}
</script>