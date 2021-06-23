import './index.scss'
import popup from '../../utils/popup'

const VDrawer = {
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

    const data = {
      props: {
        ...this.$attrs,
        visible: this.value
      },
      on: {
        ...this.$listeners
      },
    }

    return (
      <el-drawer
        {...data}
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

export default VDrawer