<template>
  <demo-wrapper title="VSelect 选择框">
    <demo-card>
      <v-select v-model="value" :options="options"/>
    </demo-card>
    <README/>
  </demo-wrapper>
</template>

<script>
  import README from './README.md'

  export default {
    name: 'vselect',
    data() {
      return {
        value: '1',
        options: [
          {
            value: '1',
            label: '黄金糕'
          },
          {
            value: '2',
            label: '双皮奶'
          },
          {
            value: '3',
            label: '蚵仔煎'
          },
          {
            value: '4',
            label: '龙须面'
          },
          {
            value: '5',
            label: '北京烤鸭'
          }
        ],
      }
    },
    components: {
      README
    }
  }
</script>