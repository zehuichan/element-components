<template>
  <demo-wrapper title="VDialog 对话框">
    <demo-card>
      <el-button type="primary" @click="show = true">打开dialog</el-button>
      <el-button type="primary" @click="show2 = true">打开自定义dialog</el-button>
    </demo-card>
    <README/>
    <v-dialog v-model="show" title="v-dialog">
      默认插槽
    </v-dialog>
    <custom-dialog v-model="show2">2</custom-dialog>
  </demo-wrapper>
</template>

<script>
  import README from './README.md'
  import CustomDialog from './CustomDialog'

  export default {
    name: 'vdialog',
    data() {
      return {
        show: false,
        show2: false,
      }
    },
    components: {
      README,
      CustomDialog
    }
  }
</script>