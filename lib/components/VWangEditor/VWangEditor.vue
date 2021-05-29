<template>
  <!-- 此处value仅用于触发updated事件 -->
  <div ref="editor"></div>
</template>

<script>
  import E from 'wangeditor'

  export default {
    name: 'VWangEditor',
    model: {
      prop: 'value',
      event: 'update:value'
    },
    props: {
      value: String,
      config: {
        type: Object,
        default: () => ({})
      }
    },
    watch: {
      value(val) {
        val && this.editor.txt.html(val)
      }
    },
    data() {
      return {
        editor: null
      }
    },
    mounted() {
      this.editor = new E(this.$refs.editor)
      this.editor.config.onchange = (html) => {
        this.$emit('update:value', html)
      }
      this.editor.config = Object.assign(this.editor.config, this.config)
      this.editor.create()
    },
    beforeDestroy() {
      this.editor.destroy()
      this.editor = null
    }
  }
</script>