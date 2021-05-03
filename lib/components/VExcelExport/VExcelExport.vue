<template>
  <!--v-bind="$attrs" v-on="$listeners"-->
  <el-button
    v-loading.fullscreen.lock="loading"
    :element-loading-text="loadingText"
    v-bind="$attrs"
    @click="handleDownload"
  >
    <slot>导出</slot>
  </el-button>
</template>

<script>
  // utils
  import parseTime from '../../utils/parse-time'

  export default {
    name: 'VExcelExport',
    props: {
      canExport: Boolean,
      loadingText: {
        type: String,
        default: '正在导出所有需要发货的维修单（所有发行方）...'
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
          import('../../vendor/Export2Excel').then(excel => {
            const tHeader = this.tHeader
            const tBody = this.tBody
            excel.export_json_to_excel({
              header: tHeader,
              data: tBody,
              filename: this.filename + '_' + parseTime(new Date(), '{y}{m}{d}')
            })
            this.loading = false
          })
        } else {
          this.$message.warning('数据加载中...')
        }
      }
    }
  }
</script>
