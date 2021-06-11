<template>
  <demo-wrapper title="展示组件">
    <demo-section>
      <demo-card title="v-select">
        <v-select v-model="value" :options="options"/>
      </demo-card>
      <demo-card style="width: 60%;">
        <demo-block title="vmodel">
          <code>{{ value }}</code>
        </demo-block>
        <demo-block title="template">
          <highlightjs language="html" :code="vselect.template"/>
        </demo-block>
      </demo-card>
    </demo-section>
  </demo-wrapper>
</template>

<script>
  // code
  import { vselect } from './code'

  export default {
    name: 'vselect',
    data() {
      return {
        vselect,
        value: '',
        options: [
          {
            value: '选项1',
            label: '黄金糕'
          },
          {
            value: '选项2',
            label: '双皮奶'
          },
          {
            value: '选项3',
            label: '蚵仔煎'
          },
          {
            value: '选项4',
            label: '龙须面'
          },
          {
            value: '选项5',
            label: '北京烤鸭'
          }
        ],
      }
    }
  }
</script>