<template>
  <el-form class="v-form" ref="form" :model="value" v-bind="$attrs">
    <el-form-item
      v-for="item in _options"
      :key="item.key"
      :label="item.label"
      :prop="item.key"
      :rules="item.rules"
    >
      <template v-if="['input', 'password', 'digit', 'number'].includes(item.type)">
        <el-input
          :value="value[item.key]"
          :placeholder="item.placeholder"
          :readonly="item.readonly"
          :disabled="item.disabled"
          :show-password="item.type === 'password'"
          clearable
          @input="$_inputChange(item, $event)"
          style="width:100%"
        />
      </template>
      <template v-if="item.type === 'inputnumber'">
        <el-input-number
          :value="value[item.key]"
          :placeholder="item.placeholder"
          :min="item.min"
          :max="item.max"
          :readonly="item.readonly"
          :disabled="item.disabled"
          :step="item.step"
          :step-strictly="item.stepStrictly"
          :precision="item.precision"
          :controls="item.controls || true"
          :controls-position="item.controlsPosition"
          @input="$_inputChange(item, $event)"
        />
      </template>
      <template v-if="item.type === 'textarea'">
        <el-input
          type="textarea"
          :value="value[item.key]"
          :placeholder="item.placeholder"
          :readonly="item.readonly"
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
            {{ sub.label }}
          </el-radio>
        </el-radio-group>
      </template>
      <template v-if="item.type === 'checkbox'">
        <el-checkbox-group :value="value[item.key]" @input="$_inputChange(item, $event)">
          <el-checkbox
            v-for="(sub, idx) in item.options"
            :key="idx"
            :label="''+sub.value"
          >
            {{ sub.label }}
          </el-checkbox>
        </el-checkbox-group>
      </template>
      <template v-if="item.type === 'select'">
        <el-select
          :value="value[item.key]"
          :multiple="item.multiple"
          :collapse-tags="item.collapseTags"
          :filterable="item.remote"
          :remote="item.remote"
          :reserve-keyword="item.remote"
          :remote-method="remoteMethod"
          :placeholder="item.placeholder"
          :readonly="item.readonly"
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
      <template v-if="item.type === 'treeselect'">
        <treeselect
          :value="value[item.key]"
          :multiple="item.multiple"
          :placeholder="item.placeholder"
          :readonly="item.readonly"
          :disabled="item.disabled"
          :options="item.options"
          :default-expand-level="item.defaultExpandLevel"
          :normalizer="item.normalizer"
          @input="$_inputChange(item, $event)"
          style="width:100%"
        />
      </template>
      <template v-if="item.type === 'switch'">
        <el-switch
          :value="value[item.key]"
          :active-color="item.activeColor"
          :inactive-color="item.inactiveColor"
          :active-text="item.activeText"
          :inactive-text="item.inactiveText"
          :active-value="item.activeValue"
          :inactive-value="item.inactiveValue"
          :disabled="item.disabled"
          @input="$_inputChange(item, $event)"
        />
      </template>
      <template v-if="['date', 'week', 'month', 'year', 'dates'].includes(item.type)">
        <el-date-picker
          :value="value[item.key]"
          :type="item.type"
          :placeholder="item.placeholder"
          :format="item.format || undefined"
          :value-format="item.valueFormat || undefined"
          :picker-options="item.pickerOptions"
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
          :picker-options="item.pickerOptions"
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
          :picker-options="item.pickerOptions"
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
import { formatNumber } from 'lib/utils/formate-number'
// treeselect
import Treeselect from '@riophae/vue-treeselect'
import '@riophae/vue-treeselect/dist/vue-treeselect.css'

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
        item.value = this.value[item.key] = this.value[item.key] || item.value
      })
    },
    $_inputChange({ type, key }, event) {
      switch (type) {
        case 'digit': // 正整数
          this.options.find(v => v.key === key).value = formatNumber(event, false)
          this.$emit('input', { ...this.value, [key]: formatNumber(event, false) })
          break
        case 'number': // 数字
          this.options.find(v => v.key === key).value = formatNumber(event)
          this.$emit('input', { ...this.value, [key]: formatNumber(event) })
          break
        default:
          this.options.find(v => v.key === key).value = event
          this.$emit('input', { ...this.value, [key]: event })
          break
      }
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
  },
  components: {
    Treeselect
  }
}
</script>

<style lang="scss">
.v-form {

  .el-form-item__content {
    font-size: 13px;
  }

  .vue-treeselect {
    line-height: 18px;
    color: #606266;
  }

  .vue-treeselect__control {
    height: 32px;
  }

  .vue-treeselect__input {
    -webkit-appearance: none;
    background-image: none;
    border-radius: 4px;
    display: block;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    outline: none;
  }

  .vue-treeselect__label {
    font-size: 14px;
    padding: 0 20px;
    position: relative;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #606266;
    height: 32px;
    line-height: 32px;
    box-sizing: border-box;
    cursor: pointer;
  }

  .vue-treeselect__option--selected .vue-treeselect__label {
    color: #409eff;
  }

  .vue-treeselect__placeholder, .vue-treeselect__single-value {
    padding-left: 10px;
    padding-right: 10px;
    line-height: 32px;
  }
}
</style>
