const VFormItem = {
  name: 'VFormItem',
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
      ['input', 'password', 'digit', 'number', 'textarea'].includes(this.item.type)
        ? <v-input
          {...data}
          class={this.item.class}
          style={[this.item.style, { width: '100%' }]}
          type={this.item.type}
          show-password={this.item.type === 'password'}
          placeholder={this.item.placeholder}
        />
        : ['inputnumber'].includes(this.item.type)
        ? <el-input-number
          {...data}
          class={this.item.class}
          style={[this.item.style]}
          placeholder={this.item.placeholder}
        />
        : ['radio'].includes(this.item.type)
          ? <v-radio
            {...data}
            class={this.item.class}
            style={[this.item.style]}
            options={this.item.options}
          />
          : ['checkbox'].includes(this.item.type)
            ? <v-checkbox
              {...data}
              class={this.item.class}
              style={[this.item.style]}
              options={this.item.options}
            />
            : ['select'].includes(this.item.type)
              ? <v-select
                {...data}
                class={this.item.class}
                style={[this.item.style, { width: '100%' }]}
                placeholder={this.item.placeholder}
                options={this.item.options}
              />
              : ['treeselect'].includes(this.item.type)
                ? <v-tree-select
                  {...data}
                  class={this.item.class}
                  style={[this.item.style, { width: '100%' }]}
                  placeholder={this.item.placeholder}
                  options={this.item.options}
                />
                : ['switch'].includes(this.item.type)
                  ? <el-switch
                    {...data}
                    class={this.item.class}
                    style={[this.item.style, { width: '100%' }]}
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

export default VFormItem