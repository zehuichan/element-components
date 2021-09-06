<template>
  <div class="v-search">
    <div class="v-search-container">
      <el-form label-position="left" ref="form" :model="value" :label-width="labelWidth">
        <el-row :gutter="24">
          <el-col :span="_span">
            <el-col v-for="item in _options" :key="item.key" :span="item.span || 6" :offset="item.offset">
              <!-- 默认插槽作为表单项 -->
              <slot/>
              <!--占位-->
              <el-form-item v-if="!item.key">
                <div :style="[{height: _block}, item.style]"></div>
              </el-form-item>
              <el-form-item v-else :label="item.label" :prop="item.key">
                <slot slot="label" :scope="item" :name="item.key + '-label'"/>
                <slot :scope="item" :name="item.key">
                  <component
                    v-bind="item"
                    :is="getComponentName(item.type)"
                    :class="item.class"
                    :style="[item.style, {width: '100%'}]"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                    :value="value[item.key]"
                    @input="$_inputChange(item, $event)"
                  />
                </slot>
              </el-form-item>
            </el-col>
          </el-col>
          <el-col :span="2" class="text-right" v-if="options.length > threshold">
            <el-button type="text" @click="ellipsis = !ellipsis">
              {{ ellipsis ? '收起' : '展开' }}<i class="el-icon--right" :class="_icon"/>
            </el-button>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <div class="v-search--tools clearfix">
      <div class="fl">
        <el-button type="primary" icon="el-icon-search" @click="onSearch">查询</el-button>
        <el-button type="default" icon="el-icon-refresh" @click="onReset">重置</el-button>
        <slot name="tools"/>
      </div>
      <div class="extra fr" v-if="$slots && $slots.extra">
        <slot name="extra"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VSearch',
  inheritAttrs: false,
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
    _block() {
      const map = {
        large: '40px',
        medium: '37px',
        small: '33px',
        mini: '29px',
      }
      return map[this.$ELEMENT.size]
    }
  },
  watch: {
    value: {
      handler(val) {
        this.options.forEach(item => {
          const key = Object.keys(val).find(field => field === item.key)
          item.value = val[key]
        })
      },
      immediate: true
    },
    options: {
      handler(val) {
        val.forEach(item => {
          this.value[item.key] = item.value
        })
      },
      immediate: true
    }
  },
  methods: {
    getComponentName(type) {
      if (['input', 'password', 'digit', 'number', 'textarea'].includes(type)) {
        return 'v-input'
      }
      if (['inputnumber'].includes(type)) {
        return 'el-input-number'
      }
      if (['radio'].includes(type)) {
        return 'v-radio'
      }
      if (['checkbox'].includes(type)) {
        return 'v-checkbox'
      }
      if (['select'].includes(type)) {
        return 'v-select'
      }
      if (['treeselect'].includes(type)) {
        return 'v-tree-select'
      }
      if (['switch'].includes(type)) {
        return 'el-switch'
      }
      if (['date', 'week', 'month', 'year', 'dates', 'datetime', 'daterange'].includes(type)) {
        return 'el-date-picker'
      }
      return type
    },
    onSearch() {
      this.$emit('search', { ...this.value })
    },
    onReset() {
      this.$refs.form.resetFields()
      this.$emit('reset', { ...this.value })
    },
    $_inputChange({ key }, event) {
      this.$emit('input', { ...this.value, [key]: event })
      this.$emit('change', { ...this.value, [key]: event })
    }
  }
}
</script>

<style lang="scss">
.v-search {
  .v-search-container {
    background-color: #fff;
  }

  .v-search--tools {
    margin: 12px 12px 0;
  }
}
</style>
