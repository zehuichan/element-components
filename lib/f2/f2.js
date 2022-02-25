import F2 from '@antv/f2'

export default {
  name: 'VF2',
  inheritAttrs: false,
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
    },
    changeData(data) {
      this.chart.changeData(data)
    },
    repaint(data) {
      // 更新数据源
      this.chart.source(data)
      // 更新图表！
      this.chart.repaint()
    }
  },
  render(h) {
    return h('canvas', this.$slots.default)
  }
}