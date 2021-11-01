import './index.scss'
import { is } from '../utils'

const SIZE_MAP = {
  mini: 4,
  small: 8,
  medium: 16,
  large: 24,
}

export default {
  name: 'VSpace',
  props: {
    /**
     * @zh 对齐方式
     * @en Alignment
     * @values 'start', 'end', 'center', 'baseline'
     */
    align: String,
    /**
     * @zh 间距方向
     * @en Spacing direction
     */
    direction: {
      type: String,
      default: 'horizontal',
    },
    /**
     * @zh 间距大小，支持分别制定横向和竖向的间距
     * @en Spacing size, support for setting horizontal and vertical spacing separately
     */
    size: {
      type: [Number, String, Array],
      default: 'small',
    },
    /**
     * @zh 环绕类型的间距，用于折行的场景。
     * @en The spacing of the wrapping type, used in the scene of wrapping.
     */
    wrap: {
      type: Boolean,
      default: false
    },
  },
  computed: {
    containerStyle() {
      return { marginBottom: `-${this.verticalSize}px` }
    },
    itemStyle() {
      const { size, direction, wrap } = this

      if (is(size, 'Array')) {
        const [h = 0, v = 0] = size
        this.horizontalSize = h
        this.verticalSize = v
      } else {
        let val
        if (is(size, 'Number')) {
          val = size
        } else {
          val = SIZE_MAP[size] || SIZE_MAP.small
        }

        if (wrap && direction === 'horizontal') {
          this.horizontalSize = this.verticalSize = val
        } else {
          if (direction === 'horizontal') {
            this.horizontalSize = val
            this.verticalSize = 0
          } else {
            this.verticalSize = val
            this.horizontalSize = 0
          }
        }
      }

      return {
        paddingBottom: `${this.verticalSize}px`,
        marginRight: `${this.horizontalSize}px`,
      }
    },
  },
  data() {
    return {
      horizontalSize: 0,
      verticalSize: 0
    }
  },
  render() {
    const prefixCls = 'v-space'
    const { containerStyle, itemStyle, direction, align, wrap } = this
    const innerAlign = align || (direction === 'horizontal' ? 'center' : '')
    const classNames = [
      prefixCls,
      {
        [`${prefixCls}-${direction}`]: direction,
        [`${prefixCls}-align-${innerAlign}`]: innerAlign,
        [`${prefixCls}-wrap`]: wrap,
      },
    ]

    // const children = (this.$slots.default || []).filter((child) => (child)?.type !== Comment)
    const children = (this.$slots.default || [])

    return (
      <div class={classNames} style={containerStyle}>
        {
          children.map((child, index) => (
            <div
              class={`${prefixCls}-item`}
              key={index}
              style={itemStyle}
            >
              {child}
            </div>
          ))
        }
      </div>
    )
  }
}