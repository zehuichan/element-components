import './index.scss'

export default {
  name: 'VDescriptions',
  inheritAttrs: false,
  props: {
    data: {
      type: Object,
      required: true,
      default: () => ({})
    },
    columns: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  methods: {
    setPropsData(row, rowKey) {
      if (!row) throw new Error('row is required when get row identity')
      if (typeof rowKey === 'string') {
        if (rowKey.indexOf('.') < 0) {
          return row[rowKey]
        }
        let key = rowKey.split('.')
        let current = row
        for (let i = 0; i < key.length; i++) {
          current = current[key[i]]
        }
        return current
      }
    }
  },
  render() {
    return (
      <el-descriptions
        {...{ attrs: this.$attrs, slots: { ...this.slots } }}
        class="v-descriptions"
      >
        {this.$slots.title && <template slot="title">{this.$slots.title}</template>}
        {this.$slots.extra && <template slot="extra">{this.$slots.extra}</template>}
        {
          this.columns.map((item => (
            <el-descriptions-item {...{ attrs: item }} label={item.label}>
              {/*label 插槽*/}
              {
                this.$slots[item.key + '-label'] && <template slot="label">{this.$slots[item.key + '-label']}</template>
              }
              {/*default 插槽*/}
              {
                this.$scopedSlots[item.key]
                  ? this.$scopedSlots[item.key]({ scope: this.data })
                  : this.setPropsData(this.data, item.key) || '_'
              }
            </el-descriptions-item>
          )))
        }
        {/*默认插入至列表最后一行之后的内容*/}
        {this.$scopedSlots.default && this.$scopedSlots.default()}
      </el-descriptions>
    )
  }
}