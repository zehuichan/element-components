// qrcode
import {toCanvas} from 'qrcode'

const VQrcode = {
  name: 'VQrcode',
  model: {
    prop: 'value',
    event: 'input'
  },
  props: {
    // canvas
    value: String,
    width: {
      type: [String, Number],
      default: 250
    },
    height: {
      type: [String, Number],
      default: 250
    },
    margin: {
      type: [String, Number],
      default: 2
    },
    // logo
    logo: String,
    size: {
      type: [String, Number],
      default: 50
    },
    gutter: {
      type: [String, Number],
      default: 8
    }
  },
  watch: {
    value: {
      handler: '$_generate',
      immediate: true
    }
  },
  methods: {
    $_generate() {
      this.$nextTick(async () => {
        const { width, height, margin } = this
        const value = String(this.value)
        toCanvas(this.$el, value, { width, height, margin }, (error) => {
          if (error) {
            throw error
          }
        })
        const canvas = this.$el
        this.logo && await this.drawLogo()
        this.$emit('load', canvas.toDataURL())
      })
    },
    async drawLogo() {
      const { width, height, logo, size, gutter } = this
      const canvas = this.$el
      const ctx = canvas.getContext('2d')
      ctx.beginPath()
      ctx.save()
      ctx.fillStyle = '#fff'
      ctx.fillRect((width - (size + gutter)) / 2, (height - (size + gutter)) / 2, size + gutter, size + gutter)
      ctx.stroke()
      const img = await this.getImageInfo(logo)
      ctx.drawImage(img, (width - size) / 2, (height - size) / 2, size, size)
      ctx.restore()
      ctx.closePath()
    },
    getImageInfo(src) {
      return new Promise((resolve, reject) => {
        const img = new Image()
        img.setAttribute('crossOrigin', 'anonymous')
        img.src = src
        img.onload = () => resolve(img)
        img.onerror = (error) => reject(error)
      })
    }
  },
  render(h) {
    return h('canvas', this.$slots.default)
  }
}

export default VQrcode