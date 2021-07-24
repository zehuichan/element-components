import './index.scss'

const VSvgIcon = {
  name: 'VSvgIcon',
  props: {
    name: String,
    classPrefix: String,
    size: [String, Number]
  },
  methods: {
    addUnit(value) {
      return this.isNumeric(value) ? `${value}px` : String(value)
    },
    isNumeric(val) {
      return typeof val === 'number' || /^\d+(\.\d+)?$/.test(val)
    }
  },
  render() {
    const { name, classPrefix, size, addUnit } = this

    const data = {
      on: {
        ...this.$listeners
      },
    }
    return (
      <svg {...data} class={[classPrefix, 'iconfont']} style={{ fontSize: addUnit(size) }} aria-hidden="true">
        <use xlinkHref={`#${name}`}/>
      </svg>
    )
  }
}

export default VSvgIcon