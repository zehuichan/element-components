const VExcelExport = {
  name: 'VExcelExport',
  props: {
    canExport: Boolean,
    loadingText: {
      type: String,
      default: '正在导出数据...'
    },
    tHeader: {
      type: Array,
      default: () => []
    },
    tBody: {
      type: Array,
      default: () => []
    },
    filename: String
  },
  data() {
    return {
      loading: false
    }
  },
  methods: {
    handleDownload() {
      if (this.canExport) {
        this.loading = true
        import('lib/vendor/Export2Excel').then(excel => {
          const tHeader = this.tHeader
          const tBody = this.tBody
          excel.export_json_to_excel({
            header: tHeader,
            data: tBody,
            filename: this.filename + '_' + this.$D(new Date()).format('YYYY-MM-DD HH:mm:ss')
          })
          this.loading = false
        })
      } else {
        this.$message.warning('数据准备中...')
      }
    }
  },
  render() {
    const { loading, loadingText, handleDownload, $slots } = this

    const data = {
      props: {
        ...this.$attrs
      },
    }

    return (
      <el-button
        {...data}
        vLoading_fullscreen_lock={loading}
        element-loading-text={loadingText}
        onClick={handleDownload}
      >
        {$slots.default || '上传'}
      </el-button>
    )
  }
}

export default VExcelExport