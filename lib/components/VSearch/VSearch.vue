<template>
  <div class="v-search">
    <div class="v-search-container">
      <el-form label-position="left" ref="form" :model="value" :label-width="labelWidth">
        <el-row :gutter="24">
          <el-col :span="_span">
            <el-col :span="6" v-for="item in _options" :key="item.key">
              <!-- 默认插槽作为表单项 -->
              <slot/>
              <el-form-item :label="item.label" :prop="item.key">
                <template v-if="['input', 'digit', 'number'].includes(item.type)">
                  <v-input
                    :value="value[item.key]"
                    :type="item.type"
                    :placeholder="item.placeholder"
                    :readonly="item.readonly"
                    :disabled="item.disabled"
                    clearable
                    @input="$_inputChange(item, $event)"
                    style="width:100%"
                  />
                </template>
                <template v-if="item.type === 'select'">
                  <el-select
                    :class="item.class"
                    :style="item.style"
                    v-bind="$_bind($attrs, item)"
                    :value="value[item.key]"
                    :placeholder="item.placeholder"
                    @input="$_inputChange(item, $event)"
                    style="width:100%"
                  >
                    <el-option label="全部" value="全部" @click.native="value[item.key] = null"/>
                    <el-option
                      v-for="(sub, idx) in item.options"
                      :key="idx"
                      :value="sub.value"
                      :label="sub.label"
                    />
                  </el-select>
                </template>
                <template v-if="['date', 'week', 'month', 'year', 'dates'].includes(item.type)">
                  <el-date-picker
                    :class="item.class"
                    :style="item.style"
                    v-bind="$_bind($attrs, item)"
                    :value="value[item.key]"
                    :type="item.type"
                    :placeholder="item.placeholder"
                    style="width:100%; height:33px;"
                  />
                </template>
                <template v-if="item.type === 'daterange'">
                  <el-date-picker
                    :class="item.class"
                    :style="item.style"
                    v-bind="$_bind($attrs, item)"
                    :value="value[item.key]"
                    type="daterange"
                    @input="$_inputChange(item, $event)"
                    style="width:100%;"
                  />
                </template>
                <template v-if="item.type === 'datetime'">
                  <el-date-picker
                    :class="item.class"
                    :style="item.style"
                    v-bind="$_bind($attrs, item)"
                    :value="value[item.key]"
                    type="datetime"
                    :placeholder="item.placeholder"
                    @input="$_inputChange(item, $event)"
                    style="width:100%; height:33px;"
                  />
                </template>
                <slot slot="label" :scope="item" :name="item.key + '-label'"/>
                <slot :scope="item" :name="item.key"/>
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
      $_bind(attrs, item) {
        return Object.assign(
          {},
          { ...attrs },
          { rangeSeparator: '至', startPlaceholder: '开始日期', endPlaceholder: '结束日期' },
          { ...item },
        )
      },
      onSearch() {
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
