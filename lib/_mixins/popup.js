export default {
  inheritAttrs: false,
  model: {
    prop: 'value',
    event: 'input'
  },
  props: {
    value: {
      type: Boolean,
      default: false
    },
    confirmButtonText: {
      type: String,
      default: '确认'
    },
    cancelButtonText: {
      type: String,
      default: '取消'
    },
  },
  methods: {
    onClose() {
      this.$emit('input', false)
      this.$emit('cancel', false)
    },
    onConfirm() {
      this.$emit('confirm')
    },
  }
}