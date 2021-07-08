<template>
  <demo-wrapper title="VFooterToolBar 底部工具栏">
    <README/>
    <v-footer-tool-bar :siderWidth="220">
      <template #extra>#extra</template>
      <el-button type="default">取消</el-button>
      <el-button type="primary">确认保存</el-button>
    </v-footer-tool-bar>
  </demo-wrapper>
</template>

<script>
import README from './README.md'

export default {
  name: 'vfootertoolbar',
  components: {
    README
  }
}
</script>