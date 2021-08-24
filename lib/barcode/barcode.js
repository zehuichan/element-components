import JsBarcode from 'jsbarcode'

/**
 * 一些配置
 width?: number;
 height?: number;
 format?: string;
 displayValue?: boolean;
 fontOptions?: string;
 font?: string;
 text?: string;
 textAlign?: string;
 textPosition?: string;
 textMargin?: number;
 fontSize?: number;
 background?: string;
 lineColor?: string;
 margin?: number;
 marginTop?: number;
 marginBottom?: number;
 marginLeft?: number;
 marginRight?: number;
 valid?: (valid: boolean) => void;
 */

export default {
  name: 'VBarcode',
  model: {
    prop: 'value',
    event: 'input'
  },
  props: {
    value: [String, Number],
    options: {
      type: Object,
      default: () => ({})
    },
    tag: {
      type: String,
      default: 'svg'
    },
  },
  watch: {
    value: {
      handler(val) {
        this.$nextTick(() => {
          JsBarcode(this.$el, val, Object.assign({}, JsBarcode.config, this.options))
        })
      },
      immediate: true
    }
  },
  render(h) {
    return h(this.tag, this.$slots.default)
  }
}