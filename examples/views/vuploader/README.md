### 介绍

前端原生上传。

### 前端原生上传

```html
<v-uploader type="info" icon="el-icon-upload" :on-success="onSuccess">原生上传</v-uploader>
```

```js
export default {
  methods: {
    onSuccess(rawFile) {
      this.uploadLoading = true
      const fd = new FormData()
      fd.append('file', rawFile)
      upload('/api/url', fd).then((res) => {
        this.$message.success('上传成功')
      }).catch((err) => {
        this.uploadLoading = false
      })
    },
  }
}
```