import './index.scss'
import popup from '../../utils/popup'

const VDialog = {
  name: 'VDialog',
  mixins: [popup],
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
      <el-dialog
        {...data}
        custom-class={'v-dialog'}
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

export default VDialog