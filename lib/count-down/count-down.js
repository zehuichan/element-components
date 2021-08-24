import './index.scss'

import { raf, cancelRaf } from './raf'
import { isSameSecond, parseTimeData, parseFormat } from './utils'

const inBrowser = typeof window !== 'undefined'

export default {
  name: 'VCountDown',
  props: {
    millisecond: Boolean,
    time: {
      type: [Number, String],
      default: 0
    },
    format: {
      type: String,
      default: 'HH:mm:ss'
    },
    autoStart: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      remain: 0
    }
  },
  computed: {
    timeData() {
      return parseTimeData(this.remain)
    },
    formattedTime() {
      return parseFormat(this.format, this.timeData)
    }
  },
  watch: {
    time: {
      immediate: true,
      handler: 'reset'
    }
  },
  activated() {
    if (this.keepAlivePaused) {
      this.counting = true
      this.keepAlivePaused = false
      this.tick()
    }
  },
  deactivated() {
    if (this.counting) {
      this.pause()
      this.keepAlivePaused = true
    }
  },
  beforeDestroy() {
    this.pause()
  },
  methods: {
    // @exposed-api
    start() {
      this.counting = true
      this.endTime = Date.now() + this.remain
      this.tick()
    },
    // @exposed-api
    pause() {
      this.counting = false
      cancelRaf(this.rafId)
    },
    // @exposed-api
    reset() {
      this.pause()
      this.remain = +this.time

      if (this.autoStart) {
        this.start()
      }
    },
    tick() {
      if (!inBrowser) {
        return
      }

      if (this.millisecond) {
        this.microTick()
      } else {
        this.macroTick()
      }
    },
    microTick() {
      const self = this

      this.rafId = raf(function () {
        /* istanbul ignore if */
        // in case of call reset immediately after finish
        if (!self.counting) {
          return
        }

        self.setRemain(self.getRemain())

        if (self.remain > 0) {
          self.microTick()
        }
      })
    },
    macroTick() {
      const self = this

      this.rafId = raf(function () {
        /* istanbul ignore if */
        // in case of call reset immediately after finish
        if (!self.counting) {
          return
        }

        const remain = self.getRemain()

        if (!isSameSecond(remain, self.remain) || remain === 0) {
          self.setRemain(remain)
        }

        if (self.remain > 0) {
          self.macroTick()
        }
      })
    },
    getRemain() {
      return Math.max(this.endTime - Date.now(), 0)
    },
    setRemain(remain) {
      this.remain = remain
      this.$emit('change', this.timeData)

      if (remain === 0) {
        this.pause()
        this.$emit('finish')
      }
    }
  },
  render() {
    return (
      <div class="v-count-down">
        {
          this.$scopedSlots.default
            ? this.$scopedSlots.default({ timeData: this.timeData })
            : this.formattedTime
        }
      </div>
    )
  }
}