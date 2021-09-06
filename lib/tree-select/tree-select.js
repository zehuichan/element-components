import TreeSelect from '@riophae/vue-treeselect'
import '@riophae/vue-treeselect/dist/vue-treeselect.css'
import './index.scss'

export default {
  name: 'VTreeSelect',
  inheritAttrs: false,
  model: {
    prop: 'value',
    event: 'input'
  },
  props: {
    value: [String, Number, Array],
    options: Array,
    size: {
      type: String,
      default: 'large'
    }
  },
  data() {
    return {
      inputValue: this.value
    }
  },
  watch: {
    value(val) {
      this.inputValue = val
    },
    inputValue(val) {
      this.$emit('input', val === undefined ? null : val)
    }
  },
  components: {
    TreeSelect
  },
  render() {
    const data = {
      attrs: {
        ...this.$attrs,
      },
      on: {
        ...this.$listeners,
      },
    }
    return (
      <tree-select
        {...data}
        class={`v-tree-select__${this.$ELEMENT.size || this.size}`}
        value={this.inputValue}
        options={this.options}
      >
        {Object.keys(this.$slots).map(key => <template slot={key}>{this.$scopedSlots[key]()}</template>)}
      </tree-select>
    )
  }
}