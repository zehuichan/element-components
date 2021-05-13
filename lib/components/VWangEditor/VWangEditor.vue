<template>
  <!-- 此处value仅用于触发updated事件 -->
  <div id="editor" :value="value"></div>
</template>

<script>
// wangeditor
import WangEditor from 'wangeditor'

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
  data() {
    return {
      editor: null
    }
  },
  mounted() {
    this.editor = new WangEditor('#editor')
    this.editor.config.onchange = (html) => {
      this.$emit('update:value', html)
    }
    this.editor.config = Object.assign(this.editor.config, this.config)
    this.editor.create()
    this.editor.txt.html(this.value)
  },
  beforeDestroy() {
    this.editor.destroy()
    this.editor = null
  }
}
</script>

<style scoped>

</style>