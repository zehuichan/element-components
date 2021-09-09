import './index.scss'

export default {
  name: 'VEllipsis',
  inheritAttrs: false,
  props: {
    expandTrigger: {
      type: String,
      default: 'click'
    },
    lineClamp: [String, Number]
  },
  data() {
    return {
      expanded: false
    }
  },
  computed: {
    ellipsisStyleRef() {
      const cursor = this.expandTrigger === 'click' ? 'pointer' : ''
      if (this.lineClamp !== undefined) {
        return {
          cursor,
          textOverflow: '',
          '-webkit-line-clamp': this.expanded ? '' : this.lineClamp
        }
      }
      return {
        cursor,
        textOverflow: this.expanded ? '' : 'ellipsis',
        '-webkit-line-clamp': ''
      }
    },
    handleClickRef() {
      return this.expandTrigger === 'click' ? () => {
        this.expanded = !this.expanded
      } : undefined
    }
  },
  render() {
    const data = {
      attrs: {
        ...this.$attrs
      }
    }
    return (
      <span
        {...data}
        class="v-ellipsis v-ellipsis--line-clamp"
        style={this.ellipsisStyleRef}
        onClick={this.handleClickRef}
      >
        {this.$slots.default}
      </span>
    )
  }
}