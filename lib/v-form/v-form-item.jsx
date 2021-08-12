export default {
  name: 'VFormItem',
  props: {
    item: Object,
  },
  render() {
    const data = {
      attrs: {
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
      ['text'].includes(this.item.type)
        ? <fragment>{this.$attrs.value || '_'}</fragment>
        : ['input', 'password', 'digit', 'number', 'textarea'].includes(this.item.type)
          ? <v-input
            {...data}
            vModel={this.$attrs.value}
            class={this.item.class}
            style={[this.item.style, { width: '100%' }]}
            type={this.item.type}
            show-password={this.item.type === 'password'}
          />
          : ['inputnumber'].includes(this.item.type)
            ? <el-input-number
              {...data}
              vModel={this.$attrs.value}
              class={this.item.class}
              style={[this.item.style]}
            />
            : ['radio'].includes(this.item.type)
              ? <v-radio
                {...data}
                vModel={this.$attrs.value}
                class={this.item.class}
                style={[this.item.style]}
                options={this.item.options}
              />
              : ['checkbox'].includes(this.item.type)
                ? <v-checkbox
                  {...data}
                  vModel={this.$attrs.value}
                  class={this.item.class}
                  style={[this.item.style]}
                  options={this.item.options}
                />
                : ['select'].includes(this.item.type)
                  ? <v-select
                    {...data}
                    vModel={this.$attrs.value}
                    class={this.item.class}
                    style={[this.item.style, { width: '100%' }]}
                    options={this.item.options}
                  />
                  : ['treeselect'].includes(this.item.type)
                    ? <v-tree-select
                      {...data}
                      vModel={this.$attrs.value}
                      class={this.item.class}
                      style={[this.item.style, { width: '100%' }]}
                      placeholder={this.item.placeholder}
                      options={this.item.options}
                    />
                    : ['switch'].includes(this.item.type)
                      ? <el-switch
                        {...data}
                        vModel={this.$attrs.value}
                        class={this.item.class}
                        style={[this.item.style, { width: '100%' }]}
                      />
                      : ['date', 'week', 'month', 'year', 'dates', 'datetime', 'daterange'].includes(this.item.type)
                        ? <el-date-picker
                          {...data}
                          vModel={this.$attrs.value}
                          class={this.item.class}
                          style={[this.item.style, { width: '100%' }]}
                          type={this.item.type}
                        />
                        : null
    )
  }
}