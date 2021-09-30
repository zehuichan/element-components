import './index.scss'

export default {
  name: 'VUploader',
  inheritAttrs: false,
  props: {
    loading: Boolean,
    beforeUpload: Function,
    onSuccess: Function,
    accept: {
      type: String,
      default: '.xlsx, .xls, .csv'
    },
  },
  methods: {
    handleUpload() {
      this.$refs['upload-input'].click()
    },
    handleClick(e) {
      const files = e.target.files
      const rawFile = files[0] // only use files[0]
      if (!rawFile) return
      this.upload(rawFile)
    },
    upload(rawFile) {
      this.$refs['upload-input'].value = null // fix can't select the same excel
      if (!this.beforeUpload) {
        this.readerData(rawFile)
        return
      }
      const before = this.beforeUpload(rawFile)
      if (before) {
        this.readerData(rawFile)
      }
    },
    readerData(rawFile) {
      this.onSuccess && this.onSuccess(rawFile)
      return Promise.resolve()
    },
  },
  render() {
    const { loading, accept, handleClick, handleUpload, $attrs, $slots } = this
    return (
      <div class="v-uploader" vLoading_fullscreen_lock={loading} element-loading-text="拼命加载中...">
        <input ref="upload-input" class="v-uploader-input" type="file" accept={accept} onChange={handleClick}/>
        <el-button {...{ props: $attrs }} onClick={handleUpload}>
          {$slots.default ? $slots.default : '导入'}
        </el-button>
      </div>
    )
  }
}
