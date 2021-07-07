import './index.scss'

const VFooterToolBar = {
  name: 'VFooterToolBar',
  props: {
    isMobile: {
      type: Boolean,
      default: false
    },
    sideBarWidth: {
      type: Number,
      default: undefined
    }
  },
}

export default VFooterToolBar
