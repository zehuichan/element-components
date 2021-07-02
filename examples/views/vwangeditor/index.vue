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
        editor1: '',
        editor2: '<p>支持回填</p>',
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
    components: {
      README
    }
  }
</script>