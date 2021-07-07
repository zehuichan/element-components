<template>
  <demo-wrapper title="VWangEditor 富文本编辑器">
    <demo-card>
      <v-wang-editor v-model.sync="editor1" :config="config"/>
      <div style="margin-bottom: 16px;"></div>
      <v-wang-editor v-model="editor2"/>
    </demo-card>
    <README/>
  </demo-wrapper>
</template>

<script>
import README from './README.md'

export default {
  name: 'vwangeditor',
  data() {
    return {
      editor1: '<p>支持回填</p>',
      editor2: '',
    }
  },
  computed: {
    config() {
      return {
        height: 200,
        placeholder: '高度200'
      }
    }
  },
  created() {
    setTimeout(() => {
      this.editor2 = '<p>支持回填</p>'
    }, 2000)
  },
  components: {
    README
  }
}
</script>