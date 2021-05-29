<template>
  <el-form class="v-form" ref="form" :model="value" v-bind="$attrs" :validate-on-rule-change="false">
    <!-- 默认插槽作为表单项 -->
    <slot/>
    <el-row :gutter="20">
      <el-col v-for="item in _options" :key="item.key" :span="item.span" :offset="item.offset">
        <el-form-item
          :label="item.label"
          :prop="item.key"
          :rules="item.rules"
        >
          <template v-if="['input', 'password', 'digit', 'number'].includes(item.type)">
            <el-input
              :class="item.class"
              :style="item.style"
              v-bind="$_bind($attrs, item)"
              :value="value[item.key]"
              :placeholder="item.placeholder"
              :show-password="item.type === 'password'"
              @input="$_inputChange(item, $event)"
            />
          </template>
          <template v-if="item.type === 'inputnumber'">
            <el-input-number
              :class="item.class"
              :style="item.style"
              v-bind="$_bind($attrs, item)"
              :value="value[item.key]"
              :placeholder="item.placeholder"
              @input="$_inputChange(item, $event)"
            />
          </template>
          <template v-if="item.type === 'textarea'">
            <el-input
              :class="item.class"
              :style="item.style"
              v-bind="$_bind($attrs, item)"
              type="textarea"
              :value="value[item.key]"
              :placeholder="item.placeholder"
              @input="$_inputChange(item, $event)"
            />
          </template>
          <template v-if="item.type === 'radio'">
            <el-radio-group
              :class="item.class"
              :style="item.style"
              v-bind="$_bind($attrs, item)"
              :value="value[item.key]"
              @input="$_inputChange(item, $event)"
            >
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
            <el-checkbox-group
              :class="item.class"
              :style="item.style"
              v-bind="$_bind($attrs, item)"
              :value="value[item.key]"
              @input="$_inputChange(item, $event)"
            >
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
              :class="item.class"
              :style="item.style"
              v-bind="$_bind($attrs, item)"
              :value="value[item.key]"
              :placeholder="item.placeholder"
              @input="$_inputChange(item, $event)"
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
              :class="item.class"
              :style="item.style"
              v-bind="$_bind($attrs, item)"
              :value="value[item.key]"
              :placeholder="item.placeholder"
              @input="$_inputChange(item, $event)"
            />
          </template>
          <template v-if="item.type === 'switch'">
            <el-switch
              :class="item.class"
              :style="item.style"
              v-bind="$_bind($attrs, item)"
              :value="value[item.key]"
              @input="$_inputChange(item, $event)"
            />
          </template>
          <template v-if="['date', 'week', 'month', 'year', 'dates'].includes(item.type)">
            <el-date-picker
              :class="item.class"
              :style="item.style"
              v-bind="$_bind($attrs, item)"
              :value="value[item.key]"
              :type="item.type"
              :placeholder="item.placeholder"
              @input="$_inputChange(item, $event)"
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
    </el-row>
  </el-form>
</template>

<script>
  // utils
  import { isUnDef } from 'lib/utils'
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
    watch: {
      value: {
        handler(val) {
          Object.keys(val).forEach(field => {
            this.options.find(v => v.key === field).value = val[field]
          })
        },
        immediate: true
      },
      options: {
        handler(val) {
          val.forEach(item => {
            this.value[item.key] = item.key === 'inputnumber' ? 0 : item.value
          })
        },
        immediate: true
      }
    },
    methods: {
      $_bind(attrs, item) {
        return Object.assign(
          {},
          attrs,
          item,
          { type: attrs.type === 'number' ? '_number' : attrs.type }
        )
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
      border-radius: 4px;
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
