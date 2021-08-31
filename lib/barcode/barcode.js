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
  data() {
    return {
      valid: true
    }
  },
  watch: {
    value: {
      handler(val) {
        const self = this
        this.$nextTick(() => {
          JsBarcode(this.$el, String(val), Object.assign({}, JsBarcode.config, this.options, {
            valid(valid) {
              self.valid = valid
            },
            elementTag: this.tag
          }))
        })
      },
      immediate: true
    }
  },
  render(h) {
    return h(this.tag, { style: { display: this.valid ? undefined : 'none' }, }, this.$slots.default)
  }
}