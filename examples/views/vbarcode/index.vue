<template>
  <demo-wrapper title="VBarcode 条形码">
    <demo-card>
      <el-input v-model="value" clearable/>
      <v-barcode v-model="value" :options="options"/>
    </demo-card>
    <README/>
  </demo-wrapper>
</template>

<script>
import README from './README.md'

export default {
  name: 'vbarcode',
  data() {
    return {
      value: '123456789012',
      options: {
        font: 12,
        height: 58,
        textMargin: 0
      }
    }
  },
  components: {
    README
  }
}
</script>