<template>
  <demo-wrapper title="VQrcode 二维码">
    <demo-card>
      <el-input v-model="value" clearable/>
      <v-qrcode v-model="value" @load="onLoad"/>
    </demo-card>
    <README/>
  </demo-wrapper>
</template>

<script>
import README from './README.md'

export default {
  name: 'vqrcode',
  data() {
    return {
      value: 'https://translate.google.cn/?sl=auto&tl=en&text=%E4%BA%8C%E7%BB%B4%E7%A0%81&op=translate',
    }
  },
  methods: {
    onLoad(event) {
      console.log(event)
    }
  },
  components: {
    README
  }
}
</script>