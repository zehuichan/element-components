export default {
  name: 'VFormItem',
  props: {
    item: Object,
    value: [String, Number, Array, Date, Boolean],
  },
  data() {
    return {
      newValue: this.value
    }
  },
  watch: {
    value(val) {
      this.newValue = val
    }
  },
  render() {
    const data = {
      attrs: {
        ...this.item,
        'range-separator': '至',
        'start-placeholder': '开始日期',
        'end-placeholder': '结束日期',
      },
      on: {
        ...this.$listeners
      },
    }
    return (
      ['text'].includes(this.item.type)
        ? <fragment>{this.newValue || '_'}</fragment>
        : ['input', 'password', 'digit', 'number', 'textarea'].includes(this.item.type)
          ? <v-input
            {...data}
            vModel={this.newValue}
            class={this.item.class}
            style={[this.item.style, { width: '100%' }]}
            type={this.item.type}
            show-password={this.item.type === 'password'}
          />
          : ['inputnumber'].includes(this.item.type)
            ? <el-input-number
              {...data}
              vModel={this.newValue}
              class={this.item.class}
              style={[this.item.style]}
            />
            : ['radio'].includes(this.item.type)
              ? <v-radio
                {...data}
                vModel={this.newValue}
                class={this.item.class}
                style={[this.item.style]}
                options={this.item.options}
              />
              : ['checkbox'].includes(this.item.type)
                ? <v-checkbox
                  {...data}
                  vModel={this.newValue}
                  class={this.item.class}
                  style={[this.item.style]}
                  options={this.item.options}
                />
                : ['select'].includes(this.item.type)
                  ? <v-select
                    {...data}
                    vModel={this.newValue}
                    class={this.item.class}
                    style={[this.item.style, { width: '100%' }]}
                    options={this.item.options}
                  />
                  : ['treeselect'].includes(this.item.type)
                    ? <v-tree-select
                      {...data}
                      vModel={this.newValue}
                      class={this.item.class}
                      style={[this.item.style, { width: '100%' }]}
                      placeholder={this.item.placeholder}
                      options={this.item.options}
                    />
                    : ['switch'].includes(this.item.type)
                      ? <el-switch
                        {...data}
                        vModel={this.newValue}
                        class={this.item.class}
                        style={[this.item.style, { width: '100%' }]}
                      />
                      : ['date', 'week', 'month', 'year', 'dates', 'datetime', 'daterange'].includes(this.item.type)
                        ? <el-date-picker
                          {...data}
                          vModel={this.newValue}
                          class={this.item.class}
                          style={[this.item.style, { width: '100%' }]}
                          type={this.item.type}
                        />
                        : null
    )
  }
}