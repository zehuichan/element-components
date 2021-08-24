import { format, formatDistance, fromUnixTime } from 'date-fns'
import { zhCN } from 'date-fns/locale'


export default {
  name: 'VTime',
  props: {
    time: {
      type: [Number, Date],
      default: () => Date.now()
    },
    type: {
      type: String, // 'relative' | 'date' | 'datetime'
      default: 'datetime'
    },
    to: {
      type: [Number, Date],
      default: () => Date.now()
    },
    unix: {
      type: Boolean,
      default: false
    },
    format: String,
    text: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    mergedTimeRef() {
      if (this.unix) {
        return fromUnixTime(this.time)
      }
      return this.time
    },
    mergedToRef() {
      if (this.unix) {
        return fromUnixTime(this.to)
      }
      return this.to
    },
    renderedTime() {
      if (this.format) {
        return format(this.mergedTimeRef, this.format)
      } else if (this.type === 'date') {
        return format(this.mergedTimeRef, 'yyyy-MM-dd')
      } else if (this.type === 'datetime') {
        return format(this.mergedTimeRef, 'yyyy-MM-dd hh:mm:ss')
      } else {
        return formatDistance(this.mergedTimeRef, this.mergedToRef, {
          addSuffix: true,
          locale: zhCN
        })
      }
    }
  },
  render(h) {
    return h('time', [this.renderedTime])
  }
}