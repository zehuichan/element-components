<script>
  import popup from '../utils/popup'

  export default {
    name: 'VDialog', mixins: [popup],
    render() {
      const renderFooter = () => {
        return (
          <div class="dialog-footer">
            <el-button type="default" onClick={this.onClose}>{this.cancelButtonText}</el-button>
            <el-button type="primary" loading={this.$attrs.loading} onClick={this.onConfirm}>
              {this.confirmButtonText}
            </el-button>
          </div>
        )
      }

      return (
        <el-dialog
          {...{ props: this.$attrs, on: this.$listeners }}
          custom-class={'v-dialog'}
          visible={this.value}
          onClose={this.onClose}
        >
          {this.$slots.default}
          <div slot="footer">
            {this.$slots.footer ? this.$slots.footer : renderFooter()}
          </div>
        </el-dialog>
      )
    }
  }
</script>

<style lang="scss" scoped>
  @import './index.scss';
</style>