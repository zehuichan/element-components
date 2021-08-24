import './index.scss'

export default {
  name: 'VFooterToolBar',
  props: {
    collapsed: {
      type: Boolean,
      default: false
    },
    isMobile: {
      type: Boolean,
      default: false
    },
    siderWidth: {
      type: Number,
      default: undefined
    }
  },
  computed: {
    barWidth() {
      return this.isMobile ? undefined : `calc(100% - ${this.collapsed ? 80 : this.siderWidth || 256}px)`
    }
  },
  render() {
    const { barWidth, $slots } = this
    return (
      <div class="v-footer-tool-bar-placeholder">
        <div class="v-footer-tool-bar" style={{ width: barWidth, transition: '0.3s all' }}>
          <div style="float: left">
            {$slots.extra}
          </div>
          <div style="float: right">
            {$slots.default}
          </div>
        </div>
      </div>
    )
  }
}
