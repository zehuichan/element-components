import { formatNumber } from 'lib/utils/formate-number'

const VInput = {
  name: 'VInput',
  model: {
    prop: 'value',
    event: 'input'
  },
  props: {
    value: [String, Number],
    placeholder: String
  },
  data() {
    return {
      inputValue: this.value
    }
  },
  computed: {
    type() {
      return this.$attrs.type === 'number' ? '_number' : this.$attrs.type
    }
  },
  watch: {
    value(val) {
      this.inputValue = val
    },
    inputValue(val) {
      let value
      switch (this.type) {
        case 'digit':
        case '_number':
          const isNumber = this.type === '_number'
          value = formatNumber(val || '', isNumber, isNumber)
          break
        default:
          value = val
      }
      this.$emit('input', value)
    }
  },
  render() {
    const { type, inputValue, placeholder, $slots } = this
    const data = {
      props: {
        ...this.$attrs,
        type: type,
        value: inputValue
      },
      on: {
        ...this.$listeners
      },
    }
    return (
      <el-input
        {...data}
        placeholder={placeholder}
      >
        {
          Object.keys($slots).map(key => {
            return <template slot={key}>{this.$scopedSlots[key]()}</template>
          })
        }
      </el-input>
    )
  }
}

export default VInput