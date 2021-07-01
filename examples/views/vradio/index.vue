<template>
  <demo-wrapper title="VInput 输入框">
    <demo-card title="演示">
      <v-radio v-model="value" :options="options"/>
    </demo-card>
    <README/>
  </demo-wrapper>
</template>

<script>
import README from './README.md'

export default {
  name: 'vradio',
  data() {
    return {
      value: null,
      options: [
        { label: '上海', value: 1 },
        { label: '北京', value: 2 },
        { label: '广州', value: 3 },
        { label: '深圳', value: 4 },
      ]
    }
  },
  components: {
    README
  }
}
</script>

<style>

</style>