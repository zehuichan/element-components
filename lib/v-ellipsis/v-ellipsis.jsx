import './index.scss'

const VEllipsis = {
  name: 'VEllipsis',
  props: {
    clamp: {
      type: [String, Number],
      default: 3
    },
    // 关闭时的提示文字
    closeText: {
      type: String,
      default: '展开全部'
    },
    // 展开时的提示文字
    openText: {
      type: String,
      default: '收起'
    },
  },
  data() {
    return {
      ellipsis: false
    }
  },
  computed: {
    className() {
      return this.ellipsis ? '' : this.clamp > 1 ? `multi-ellipsis--l${this.clamp}` : 'ellipsis'
    },
    btnClassName() {
      return this.ellipsis ? '' : 'mask'
    },
    text() {
      return this.ellipsis ? this.openText : this.closeText
    }
  },
  methods: {
    onClick() {
      this.ellipsis = !this.ellipsis
    }
  },
  render() {
    const renderBtn = () => (
      <el-button type="text" onClick={this.onClick}>{this.text}</el-button>
    )
    return (
      <div class="v-ellipsis">
        <div class={['content', this.className]}>
          {this.$slots.default}
        </div>
        <div class={['btn', this.btnClassName]}>
          {this.$slots.footer ? this.$slots.footer : renderBtn()}
        </div>
      </div>
    )
  }
}

export default VEllipsis