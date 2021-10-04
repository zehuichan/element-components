<template>
  <demo-wrapper title="VUploader 原生上传">
    <demo-card>
      <v-uploader type="info" icon="el-icon-upload" :loading="loading" :on-success="onSuccess">原生上传</v-uploader>
    </demo-card>
    <README/>
  </demo-wrapper>
</template>

<script>
import README from './README.md'

export default {
  name: 'vuploader',
  data() {
    return {
      loading: false
    }
  },
  methods: {
    onSuccess(rawFile) {
      this.loading = true
      const fd = new FormData()
      fd.append('file', rawFile)
      this.$message.success('上传成功')
      this.loading = false
    },
  },
  components: {
    README
  }
}
</script>