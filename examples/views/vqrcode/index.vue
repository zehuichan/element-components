<template>
  <demo-wrapper title="展示组件">
    <!--v-qrcode-->
    <demo-section>
      <demo-card title="v-qrcode">
        <demo-block title="默认">
          <v-qrcode v-model="str" @load="onAction('load1', $event)"/>
          <el-button type="primary" @click="onAction('download1')">下载二维码</el-button>
        </demo-block>
        <demo-block title="带logo">
          <v-qrcode v-model="str" :logo="logo" @load="onAction('load2', $event)"/>
          <el-button type="primary" @click="onAction('download2')">下载二维码</el-button>
        </demo-block>
      </demo-card>
      <demo-card style="width: 60%;">
        <demo-block title="template">
          <highlightjs language="html" :code="vqrcode.template"/>
        </demo-block>
        <demo-block title="javascript">
          <highlightjs language="javascript" :code="vqrcode.javascript"/>
        </demo-block>
      </demo-card>
    </demo-section>
  </demo-wrapper>
</template>

<script>
// utils
import download from 'lib/utils/download'
// code
import { vqrcode } from './code'

export default {
  name: 'vqrcode',
  data() {
    return {
      vqrcode,

      str: 'https://translate.google.cn/?sl=auto&tl=en&text=%E4%BA%8C%E7%BB%B4%E7%A0%81&op=translate',
      logo: require('./logo.jpg')
    }
  },
  methods: {
    onAction(type, event) {
      switch (type) {
        case 'load1':
          this.url1 = event
          break
        case 'load2':
          this.url2 = event
          break
        case 'download1':
          download(this.url1, 'qrcode.png')
          break
        case 'download2':
          download(this.url2, 'qrcode_logo.png')
          break
      }
    }
  }
}
</script>