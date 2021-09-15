<template>
  <div class="v-search">
    <div class="v-search-container">
      <el-form ref="form" :model="value" :label-position="labelPosition" :label-width="labelWidth">
        <el-row :gutter="24">
          <el-col
            v-for="(item, index) in options"
            :key="item.key"
            v-bind="_span(item.span)"
            v-show="_getShow(item, index)"
          >
            <!-- 默认插槽作为表单项 -->
            <slot/>
            <el-form-item :label="item.label" :prop="item.key">
              <slot slot="label" :scope="item" :name="item.key + '-label'"/>
              <slot :scope="item" :name="item.key">
                <component
                  v-bind="item"
                  :is="getComponentName(item.type)"
                  :class="item.class"
                  :style="[{width: '100%'}, item.style]"
                  :value="value[item.key]"
                  clearable
                  @input="$_inputChange(item, $event)"
                  @keyup.enter.native="$_inputEnter(item)"
                />
              </slot>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <div class="v-search--tools clearfix">
      <div class="fl">
        <slot name="tools"/>
      </div>
      <div class="extra fr">
        <slot name="extra"/>
        <el-button type="primary" icon="el-icon-search" @click="onSearch">查询</el-button>
        <el-button type="default" icon="el-icon-refresh" @click="onReset">重置</el-button>
        <el-button type="text" v-if="options.length > threshold" @click="ellipsis = !ellipsis">
          {{ ellipsis ? '收起' : '展开' }} <i class="el-icon--right" :class="_icon"/>
        </el-button>
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
    labelPosition: {
      type: String,
      default: 'left'
    },
    labelWidth: {
      type: String,
      default: '80px'
    },
    // 阈值
    threshold: {
      type: [String, Number],
      default: 6
    }
  },
  data() {
    return {
      ellipsis: false
    }
  },
  computed: {
    _icon() {
      return this.ellipsis ? 'el-icon-arrow-up' : 'el-icon-arrow-down'
    },
    _span() {
      return (layout) => {
        return { span: layout || 8 }
      }
    },
    _getShow() {
      return ({ hidden }, index) => {
        if (hidden) {
          return false
        }
        return this.ellipsis ? true : this.threshold - index >= 0
      }
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
      if (['timepicker'].includes(type)) {
        return 'el-time-picker'
      }
      if (['date', 'week', 'month', 'year', 'dates', 'datetime', 'daterange', 'datetimerange'].includes(type)) {
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
    },
    $_inputEnter({ type }) {
      if (['input', 'password', 'digit', 'number', 'textarea'].includes(type)) {
        this.onSearch()
      }
    },
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
