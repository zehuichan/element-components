<template>
  <demo-wrapper title="展示组件">
    <!--v-badge-->
    <demo-section>
      <demo-card title="v-area">
        <v-area v-model="value" columns-num="3" clearable style="width: 100%;"/>
      </demo-card>
      <demo-card style="width: 60%;">
        <demo-block title="template">
          <highlightjs language="html" :code="varea.template"/>
        </demo-block>
      </demo-card>
    </demo-section>
  </demo-wrapper>
</template>

<script>
// code
import { varea } from './code'

export default {
  name: 'varea',
  data() {
    return {
      varea,
      value: []
    }
  }
}
</script>