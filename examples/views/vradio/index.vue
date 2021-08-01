<template>
  <demo-wrapper title="VRadio 单选框">
    <demo-card title="basic">
      <v-radio v-model="value" :options="options"/>
    </demo-card>
    <demo-card title="border">
      <v-radio v-model="value" :options="options" border/>
    </demo-card>
    <demo-card title="button">
      <v-radio v-model="value" :options="options" button/>
    </demo-card>
    <demo-card title="disabled">
      <v-radio v-model="value" :options="options" button disabled/>
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
      value: 1,
      options: [
        { label: '上海', value: 1 },
        { label: '北京', value: 2, disabled: true },
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