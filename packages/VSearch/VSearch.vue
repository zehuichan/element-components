<template>
  <div class="v-search">
    <div class="v-search-container">
      <el-form label-position="right" ref="form" :model="value" :label-width="labelWidth">
        <el-row :gutter="24">
          <el-col :span="_span">
            <el-col :span="6" v-for="item in _options" :key="item.key">
              <el-form-item :label="item.label" :prop="item.key">
                <template v-if="item.type === 'input'">
                  <el-input
                    :value="value[item.key]"
                    :placeholder="item.placeholder"
                    :disabled="item.disabled"
                    clearable
                    @input="$_inputChange(item.key, $event)"
                    style="width:100%"
                  />
                </template>
                <template v-if="item.type === 'select'">
                  <el-select
                    :value="value[item.key]"
                    :multiple="item.multiple"
                    :collapse-tags="item.multiple"
                    :filterable="item.remote"
                    :remote="item.remote"
                    :reserve-keyword="item.remote"
                    :remote-method="remoteMethod"
                    :placeholder="item.placeholder"
                    :disabled="item.disabled"
                    :loading="loading"
                    clearable
                    @input="$_inputChange(item.key, $event)"
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
                    :value="value[item.key]"
                    :type="item.type"
                    :placeholder="item.placeholder"
                    :format="item.format || undefined"
                    :value-format="item.valueFormat || undefined"
                    @input="$_inputChange(item.key, $event)"
                    style="width:100%; height:33px;"
                  />
                </template>
                <template v-if="item.type === 'daterange'">
                  <el-date-picker
                    :value="value[item.key]"
                    type="daterange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                    :value-format="item.valueFormat || ''"
                    :default-time="item.defaultTime || ['00:00:00', '23:59:59']"
                    @input="$_inputChange(item.key, $event)"
                    style="width:100%;"
                  />
                </template>
                <slot slot="label" :scope="item" :name="item.key + '-label'"/>
              </el-form-item>
            </el-col>
          </el-col>
          <el-col :span="2" class="text-right" v-if="options.length > threshold">
            <el-button type="text" @click="ellipsis = !ellipsis">
              {{ellipsis ? '收起' : '展开'}}<i class="el-icon--right" :class="_icon"/>
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
      remoteMethod: Function,
      loading: Boolean,
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
    created() {
      this.$_setDefaultValue()
    },
    methods: {
      onSearch() {
        this.$emit('input', { ...this.value })
        this.$emit('change', { ...this.value })
        this.$emit('search', { ...this.value })
      },
      onReset() {
        this.$router.replace({ query: {} })
        this.$emit('input', {})
        this.$emit('change', {})
        this.$emit('reset', {})
      },
      $_setDefaultValue() {
        this.options.forEach((item) => {
          item.value = this.value[item.key] = this.value[item.key] || item.value
        })
      },
      $_inputChange(key, event) {
        this.$emit('input', { ...this.value, [key]: event })
        this.$_setDefaultValue()
      }
    }
  }
</script>

<style lang="scss" scoped>
  .v-search {
    .v-search-container {
      margin: 24px 24px 0;
      padding: 18px;
      background-color: #fff;
    }

    .v-search--tools {
      margin: 24px 24px 0;
    }
  }
</style>
