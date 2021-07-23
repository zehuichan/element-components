const VSelect = {
  name: 'VSelect',
  model: {
    prop: 'value',
    event: 'input'
  },
  props: {
    value: [String, Number, Boolean],
    options: {
      type: Array,
      default: () => [],
      required: true
    },
    prop: {
      type: Object,
      default: () => ({ label: 'label', value: 'value' })
    }
  },
  computed: {
    _options() {
      return Array.from(this.options).map((item) => ({
        ...item,
        text: item[this.prop.label],
        value: item[this.prop.value],
      }))
    }
  },
  render() {
    const { value, _options, $slots } = this

    const data = {
      props: {
        ...this.$attrs,
      },
      on: {
        ...this.$listeners,
      },
    }

    return (
      <el-select
        {...data}
        value={value}
      >
        {
          _options.map(item => <el-option label={item.label} value={item.value} disabled={item.disabled}/>)
        }
        {
          Object.keys($slots).map(key => {
            return <template slot={key}>
              {this.$scopedSlots[key]()}
            </template>
          })
        }
      </el-select>
    )

  }
}

export default VSelect