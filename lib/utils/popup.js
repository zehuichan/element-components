export default {
  model: {
    prop: 'value',
    event: 'update:value'
  },
  props: {
    value: Boolean,
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
      this.$emit('update:value', false)
      this.$emit('cancel', false)
    },
    onConfirm() {
      this.$emit('confirm')
    },
  }
}