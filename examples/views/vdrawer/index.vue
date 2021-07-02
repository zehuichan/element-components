<template>
  <demo-wrapper title="VDrawer 抽屉">
    <demo-card>
      <el-button type="primary" @click="show = true">打开drawer</el-button>
    </demo-card>
    <README/>
    <v-drawer v-model="show" title="v-drawer" size="600px">
      默认插槽
    </v-drawer>
  </demo-wrapper>
</template>

<script>
  import README from './README.md'

  export default {
    name: 'vdrawer',
    data() {
      return {
        show: false
      }
    },
    components: {
      README
    }
  }
</script>