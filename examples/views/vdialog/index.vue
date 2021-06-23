<template>
  <demo-wrapper title="v-dialog">
    <demo-card title="栗子">
      <el-button type="primary" @click="show = true">打开dialog</el-button>
    </demo-card>
    <README/>
    <v-dialog v-model="show" title="v-dialog">
      默认插槽
    </v-dialog>
  </demo-wrapper>
</template>

<script>
  import README from './README.md'

  export default {
    name: 'vdialog',
    data() {
      return {
        show: false,
      }
    },
    components: {
      README
    }
  }
</script>