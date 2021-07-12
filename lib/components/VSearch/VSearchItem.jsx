const VSearchItem = {
  name: 'VSearchItem',
  props: {
    item: Object,
  },
  render() {
    const data = {
      props: {
        ...this.$attrs,
        [this.item.type === 'daterange' ? 'range-separator' : null]: '至',
        [this.item.type === 'daterange' ? 'start-placeholder' : null]: '开始日期',
        [this.item.type === 'daterange' ? 'end-placeholder' : null]: '结束日期',
      },
      on: {
        ...this.$listeners
      },
    }
    return (
      ['input', 'digit', 'number'].includes(this.item.type)
        ? <v-input
          {...data}
          class={this.item.class}
          style={[this.item.style, { width: '100%' }]}
          type={this.item.type}
          placeholder={this.item.placeholder}
        />
        : ['select'].includes(this.item.type)
        ? <v-select
          {...data}
          class={this.item.class}
          style={[this.item.style, { width: '100%' }]}
          placeholder={this.item.placeholder}
          options={this.item.options}
        />
        : ['date', 'week', 'month', 'year', 'dates', 'datetime', 'daterange'].includes(this.item.type)
          ? <el-date-picker
            {...data}
            class={this.item.class}
            style={[this.item.style, { width: '100%' }]}
            type={this.item.type}
            placeholder={this.item.placeholder}
          />
          : null
    )
  }
}

export default VSearchItem