<template>
  <demo-wrapper title="展示组件">
    <demo-section>
      <demo-card title="v-input">
        <v-input v-model="value" type="number">
          <template #prepend>Http://</template>
          <template #append>.com</template>
        </v-input>
      </demo-card>
      <demo-card style="width: 60%;">
        <demo-block title="template">
          <highlightjs language="html" :code="vinput.template"/>
        </demo-block>
      </demo-card>
    </demo-section>
  </demo-wrapper>
</template>

<script>
// code
import { vinput } from './code'

export default {
  name: 'vbadge',
  data() {
    return {
      vinput,
      value: ''
    }
  }
}
</script>