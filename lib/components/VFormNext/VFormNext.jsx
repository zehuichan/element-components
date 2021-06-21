const VFormNext = {
  name: 'VFormNext',
  props: {
    value: {
      type: Object,
      default: () => {
        return {}
      }
    },
    options: {
      type: Object,
      default: () => ({}),
      required: true
    },
  },
  render() {
    return (
      <el-form
        {...{ props: this.$attrs, on: this.$listeners }}
        class="v-form"
        ref="form"
        model={this.value}
        validate-on-rule-change={false}
      >

      </el-form>
    )
  }
}

export default VFormNext