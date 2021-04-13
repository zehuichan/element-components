<template>
  <el-form class="v-form" ref="form" :model="value" v-bind="$attrs">
    <el-form-item
      v-for="item in _options"
      :key="item.key"
      :label="item.label"
      :prop="item.key"
      :rules="item.rules"
    >
      <template v-if="['input', 'digit', 'number'].includes(item.type)">
        <el-input
          :value="value[item.key]"
          :placeholder="item.placeholder"
          :disabled="item.disabled"
          clearable
          @input="$_inputChange(item, $event)"
          style="width:100%"
        />
      </template>
      <template v-if="item.type === 'textarea'">
        <el-input
          type="textarea"
          :value="value[item.key]"
          :placeholder="item.placeholder"
          :disabled="item.disabled"
          clearable
          :maxlength="item.maxlength || 200"
          :show-word-limit="item.showWordLimit"
          :autosize="item.autosize || { minRows: 5}"
          resize="none"
          @input="$_inputChange(item, $event)"
          style="width:100%"
        />
      </template>
      <template v-if="item.type === 'radio'">
        <el-radio-group :value="value[item.key]" @input="$_inputChange(item, $event)">
          <el-radio
            v-for="(sub, idx) in item.options"
            :key="idx"
            :label="sub.value"
          >
            {{sub.label}}
          </el-radio>
        </el-radio-group>
      </template>
      <template v-if="item.type === 'checkbox'">
        <el-checkbox-group :value="value[item.key]" @input="$_inputChange(item, $event)">
          <el-checkbox
            v-for="(sub, idx) in item.options"
            :key="idx"
            :label="sub.label"
            :name="sub.value"
          />
        </el-checkbox-group>
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
          @input="$_inputChange(item, $event)"
          style="width:100%"
        >
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
          @input="$_inputChange(item, $event)"
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
          :value-format="item.valueFormat || undefined"
          :default-time="item.defaultTime || ['00:00:00', '23:59:59']"
          @input="$_inputChange(item, $event)"
          style="width:100%; height:33px;"
        />
      </template>
      <template v-if="item.type === 'datetime'">
        <el-date-picker
          :value="value[item.key]"
          type="datetime"
          :placeholder="item.placeholder"
          :value-format="item.valueFormat || ''"
          @input="$_inputChange(item, $event)"
          style="width:100%; height:33px;"
        />
      </template>
      <slot slot="label" :scope="item" :name="item.key + '-label'"/>
      <slot :scope="item" :name="item.key"/>
    </el-form-item>
  </el-form>
</template>

<script>
  // utils
  import { formatNumber } from '../utils/formate-number'

  export default {
    name: 'VForm',
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
      remoteMethod: Function,
      loading: Boolean
    },
    computed: {
      _options() {
        return this.options.filter(item => !item.hidden)
      }
    },
    created() {
      this.$_setDefaultValue()
    },
    methods: {
      $_setDefaultValue() {
        this.options.forEach((item) => {
          item.value = this.value[item.key]
        })
      },
      $_inputChange({ type, key }, event) {
        switch (type) {
          case 'digit': // 正整数
            this.$emit('input', { ...this.value, [key]: formatNumber(event, false) })
            break
          case 'number': // 数字
            this.$emit('input', { ...this.value, [key]: formatNumber(event) })
            break
          default:
            this.$emit('input', { ...this.value, [key]: event })
            break
        }
        this.$_setDefaultValue()
      },
      // v-form api
      validate(cb) {
        return this.$refs.form.validate(cb)
      },
      validateField(props, cb) {
        return this.$refs.form.validateField(props, cb)
      },
      resetFields() {
        return this.$refs.form.resetFields()
      },
      clearValidate(props, cb) {
        return this.$refs.form.clearValidate(props, cb)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .v-form {

  }
</style>
