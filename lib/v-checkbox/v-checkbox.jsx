const VCheckbox = {
  name: 'VCheckbox',
  model: {
    prop: 'value',
    event: 'input'
  },
  props: {
    value: {
      type: Array,
      default: () => [],
    },
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
      return <el-checkbox-button label={props.value} disabled={props.disabled}>{props.label}</el-checkbox-button>
    }

    const renderCheckbox = (props) => {
      return <el-checkbox label={props.value} border={this.border} disabled={props.disabled}>{props.label}</el-checkbox>
    }
    return (
      <el-checkbox-group
        {...data}
        value={this.value}
      >
        {this._options.map((item) => this.button ? renderButton(item) : renderCheckbox(item))}
      </el-checkbox-group>
    )

  }
}

export default VCheckbox