import './index.scss'

const VSearch = {
  name: 'VSearch',
  model: {
    prop: 'value',
    event: 'input'
  },
  props: {
    value: {
      type: Object,
      default: () => {
        return {}
      }
    },
    options: {
      type: Array,
      default: () => [],
      required: true
    },
    labelWidth: {
      type: String,
      default: '110px'
    },
    // 阈值
    threshold: {
      type: [String, Number],
      default: 12
    }
  },
  data() {
    return {
      _model: this.value,
      ellipsis: false
    }
  },
  computed: {
    _options() {
      const tempArr = this.options.filter(item => !item.hidden)
      return tempArr.slice(0, this.ellipsis ? tempArr.length : this.threshold)
    },
    _icon() {
      return this.ellipsis ? 'el-icon-arrow-up' : 'el-icon-arrow-down'
    },
    _span() {
      return this.options.length > this.threshold ? 22 : 24
    },
  },
  watch: {
    value: {
      handler(val) {
        this.options.forEach(item => {
          const key = Object.keys(val).find(field => field === item.key)
          item.value = val[key]
        })
      },
      immediate: true,
      deep: true
    },
    options: {
      handler(val) {
        val.forEach(item => {
          this.value[item.key] = item.value
        })
      },
      immediate: true,
      deep: true
    }
  },
  methods: {
    onSearch(event) {
      console.log(event)
      this.$emit('search', { ...this.value })
    },
    onReset() {
      this.$refs.form.resetFields()
      this.$emit('reset', { ...this.value })
    },
    $_inputChange({ type, key }, event) {
      this.$emit('input', { ...this.value, [key]: event })
      this.$emit('change', { ...this.value, [key]: event })
    }
  },
  render() {
    const renderExpand = () => {
      let { ellipsis, _icon } = this
      return (
        <el-col span={2} class="text-right">
          <el-button type="text" onClick={ellipsis = !ellipsis}>
            {ellipsis ? '收起' : '展开'}<i class={['el-icon--right', _icon]}/>
          </el-button>
        </el-col>
      )
    }

    const renderTools = () => {
      const { onSearch, onReset, $slots } = this
      return (
        <div class="v-search--tools clearfix">
          <div class="fl">
            <el-button type="primary" icon="el-icon-search" onClick={onSearch}>查询</el-button>
            <el-button type="default" icon="el-icon-refresh" onClick={onReset}>重置</el-button>
            {$slots?.tools}
          </div>
          {$slots?.extra ? <div class="extra fr">{$slots?.extra}</div> : null}
        </div>
      )
    }
    const scopedSlots = {

    }
    return (
      <div class="v-search">
        <div class="v-search-container">
          <el-form ref="form" props={{ model: this.value }} label-width={this.labelWidth} label-position="left">
            <el-row justify="center" type="flex" gutter={24}>
              <el-col span={this._span}>
                {this.$slots.default}
                {
                  this._options.map(item => (
                    <el-col span={6}>
                      <el-form-item label={item.label} prop={item.key}>
                        <v-search-item
                          item={item}
                          type={item.type}
                          value={this.value[item.key]}
                          onInput={(event) => this.$_inputChange(item, event)}
                        />
                        <template slot="label">
                          {this.$scopedSlots['name-label']()}
                        </template>
                      </el-form-item>
                    </el-col>
                  ))
                }
              </el-col>
              {this.options.length > this.threshold ? renderExpand() : null}
            </el-row>
          </el-form>
        </div>
        {renderTools()}
      </div>
    )
  }
}

export default VSearch