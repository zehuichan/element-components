import F2 from '@antv/f2'

export default {
  name: 'VF2',
  props: {
    init: Function,
    width: {
      type: [String, Number],
      default: 400
    },
    height: {
      type: [String, Number],
      default: 260
    }
  },
  data() {
    return {
      chart: null
    }
  },
  mounted() {
    this.initChart()
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    this.chart = null
  },
  methods: {
    initChart() {
      this.chart = this.init(F2, {
        el: this.$el,
        width: this.width,
        height: this.height,
        pixelRatio: window.devicePixelRatio
      })
    }
  },
  render(h) {
    return h('canvas', this.$slots.default)
  }
}