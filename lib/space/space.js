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
    align: {
      type: String,
    },
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
      type: [Number, String],
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
    itemStyle() {
      let { horizontalSize, verticalSize, size, direction, wrap } = this

      if (is(size, 'Array')) {
        const [h = 0, v = 0] = size
        horizontalSize = h
        verticalSize = v
      } else {
        let val
        if (is(size, 'Number')) {
          val = size
        } else {
          val = SIZE_MAP[size] || SIZE_MAP.small
        }

        if (wrap && direction === 'horizontal') {
          horizontalSize = verticalSize = val
        } else {
          if (direction === 'horizontal') {
            horizontalSize = val
            verticalSize = 0
          } else {
            verticalSize = val
            horizontalSize = 0
          }
        }
        console.log(val)
      }

      return () => {
        const baseStyle = {
          paddingBottom: `${verticalSize}px`,
          marginRight: `${horizontalSize}px`,
        }
        return [baseStyle]
      }
    }
  },
  data() {
    return {
      horizontalSize: 0,
      verticalSize: 0
    }
  },
  render() {
    const prefixCls = 'v-space'
    const { itemStyle, verticalSize, direction, align, wrap } = this
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
      <div class={classNames} style={{ marginBottom: `-${verticalSize}px` }}>
        {
          children.map((child, index) => (
            <div
              class={`${prefixCls}-item`}
              key={index}
              style={itemStyle(index)}
            >
              {child}
            </div>
          ))
        }
      </div>
    )
  }
}