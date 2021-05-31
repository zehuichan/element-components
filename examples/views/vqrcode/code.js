export const vqrcode = {
  template: `
  <div>
    <!--默认-->
    <v-qrcode v-model="str" @load="onAction('load1', $event)"/>
    <el-button type="primary" @click="onAction('download1')">下载二维码</el-button>
    <!--带logo-->
    <v-qrcode v-model="str" :logo="logo" @load="onAction('load2', $event)"/>
    <el-button type="primary" @click="onAction('download2')">下载二维码</el-button>
  </div>
  `,
  javascript: `
  export default {
    data() {
      return {
        str: 'https://translate.google.cn/?sl=auto&tl=en&text=%E4%BA%8C%E7%BB%B4%E7%A0%81&op=translate',
        // 可以是网络图片，可以是本地图片
        logo: require('./logo.jpg')
      }
    },
  }
  `
}