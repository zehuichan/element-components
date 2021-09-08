<template>
  <demo-wrapper title="Antv/F2 可视化">
    <demo-card>
      <v-f2 :init="basic"/>
      <v-f2 :init="line"/>
      <v-f2 :init="area"/>
    </demo-card>
    <README/>
  </demo-wrapper>
</template>

<script>
import { basic, line, area } from './examples'
import README from './README.md'

export default {
  name: 'vf2',
  methods: {
    basic,
    line,
    area
  },
  components: {
    README
  }
}
</script>

<style scoped>

</style>