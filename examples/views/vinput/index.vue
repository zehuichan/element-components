<template>
  <demo-wrapper title="VInput 输入框">
    <demo-card>
      <v-input v-model="digit" type="digit" placeholder="整数"/>
      <div style="margin-bottom: 16px;"></div>
      <v-input v-model="number" type="number" placeholder="数字"/>
      <div style="margin-bottom: 16px;"></div>
      <v-input v-model="text" type="text" placeholder="文本"/>
    </demo-card>
    <README/>
  </demo-wrapper>
</template>

<script>
  import README from './README.md'

  export default {
    name: 'vinput',
    data() {
      return {
        digit: '',
        number: '',
        text: ''
      }
    },
    components: {
      README
    }
  }
</script>