import './index.scss'

export default {
  name: 'VConfirm',
  render() {
    const data = {
      attrs: {
        ...this.$attrs
      },
      on: {
        ...this.$listeners
      },
    }

    return (
      <el-popconfirm
        {...data}
        class="v-confirm"
      >
        <template slot="reference">
          {this.$slots.default}
        </template>
      </el-popconfirm>
    )
  }
}