import { formatNumber } from '../utils/formate-number'

export default {
  name: 'VInput',
  inheritAttrs: false,
  model: {
    prop: 'value',
    event: 'input'
  },
  props: {
    value: [String, Number],
  },
  data() {
    return {
      inputValue: this.value
    }
  },
  computed: {
    _type() {
      return this.$attrs.type === 'number' ? '_number' : this.$attrs.type
    }
  },
  watch: {
    value(val) {
      this.inputValue = val
    },
    inputValue(val) {
      if (this._type === '_number' || this._type === 'digit') {
        const isNumber = this._type === '_number'
        val = formatNumber(val || '', isNumber, isNumber)
      }
      if (val !== this.value) {
        this.$emit('input', val)
      }
    }
  },
  render() {
    const data = {
      attrs: {
        ...this.$attrs,
        type: this._type,
      },
      on: {
        ...this.$listeners
      },
    }
    return (
      <el-input {...data} value={this.inputValue}>
        {Object.keys(this.$slots).map(key => <template slot={key}>{this.$scopedSlots[key]()}</template>)}
      </el-input>
    )
  }
}