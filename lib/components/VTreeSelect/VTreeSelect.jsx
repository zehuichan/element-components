import TreeSelect from '@riophae/vue-treeselect'
import '@riophae/vue-treeselect/dist/vue-treeselect.css'
import './index.scss'

const VTreeSelect = {
  name: 'VTreeSelect',
  model: {
    prop: 'value',
    event: 'input'
  },
  props: {
    value: [String, Number, Array]
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
    const { inputValue, $slots } = this
    const data = {
      props: {
        ...this.$attrs,
      },
      on: {
        ...this.$listeners,
      },
    }
    return (
      <tree-select
        {...data}
        value={inputValue}
      >

        {
          Object.keys($slots).map(key => {
            return <template slot={key}>
              {this.$scopedSlots[key]()}
            </template>
          })
        }
      </tree-select>
    )
  }
}

export default VTreeSelect