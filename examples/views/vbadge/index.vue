<template>
  <demo-wrapper title="VBadge 状态点">
    <demo-card>
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
    </demo-card>
    <README/>
  </demo-wrapper>
</template>

<script>
import README from './README.md'

export default {
  name: 'vbadge',
  components: {
    README
  }
}
</script>