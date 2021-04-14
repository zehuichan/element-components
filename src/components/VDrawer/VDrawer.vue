<script>
  import popup from '../utils/popup'

  export default {
    name: 'VDrawer',
    mixins: [popup],
    render() {
      const renderFooter = () => {
        return (
          <div>
            <el-button type="default" onClick={this.onClose}>{this.cancelButtonText}</el-button>
            <el-button type="primary" loading={this.$attrs.loading} onClick={this.onConfirm}>
              {this.confirmButtonText}
            </el-button>
          </div>
        )
      }

      return (
        <el-drawer
          {...{ props: this.$attrs, on: this.$listeners }}
          custom-class={'v-drawer'}
          visible={this.value}
          onClose={this.onClose}
        >

          <div class="drawer-content">
            <div class="drawer-body">
              {this.$slots.default}
            </div>
            <div class="drawer-footer">
              {this.$slots.footer ? this.$slots.footer : renderFooter()}
            </div>
          </div>
        </el-drawer>
      )
    }
  }
</script>

<style lang="scss" scoped>
  @import './index.scss';
</style>