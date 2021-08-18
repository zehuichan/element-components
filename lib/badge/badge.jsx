import './index.scss'

export default {
  name: 'VBadge',
  props: {
    color: String,
    status: {
      type: String,
      default: 'success'
    },
  },
  render() {
    const { color, status } = this
    return (
      <span class={['v-badge v-badge-status', color]}>
        <span
          class={['v-badge-status-dot', `v-badge-status-${status}`]}
          style={{ 'background-color': color }}
        />
        <span class="v-badge-status-text">{this.$slots.default}</span>
      </span>
    )
  }
}