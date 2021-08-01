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
  data() {
    return {
      editor: null,
      content: this.value
    }
  },
  watch: {
    value(val) {
      if (val !== this.content) {
        this.editor.txt.html(val)
      }
    },
    content(val) {
      this.$emit('update:value', val)
    }
  },
  mounted() {
    const editor = new E(this.$refs.editor)

    editor.config.onchange = (html) => {
      this.content = html
    }

    editor.config = Object.assign(editor.config, this.config)

    editor.create()

    this.editor = editor

    this.editor.txt.html(this.content)
  },
  beforeDestroy() {
    this.editor.destroy()
    this.editor = null
  },
  render() {
    return <div ref="editor"/>
  }
}