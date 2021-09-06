export default {
  name: 'VRadio',
  inheritAttrs: false,
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
    button: {
      type: Boolean,
      default: false
    },
    border: {
      type: Boolean,
      default: false
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
    const data = {
      attrs: {
        ...this.$attrs,
      },
      on: {
        ...this.$listeners,
      },
    }

    const renderButton = (props) => {
      return <el-radio-button label={props.value} disabled={props.disabled}>{props.label}</el-radio-button>
    }

    const renderRadio = (props) => {
      return <el-radio label={props.value} border={this.border} disabled={props.disabled}>{props.label}</el-radio>
    }

    return (
      <el-radio-group
        {...data}
        value={this.value}
      >
        {this._options.map((item) => this.button ? renderButton(item) : renderRadio(item))}
      </el-radio-group>
    )
  }
}