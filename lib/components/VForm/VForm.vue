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
          <template v-if="['input', 'password', 'digit', 'number', 'textarea'].includes(item.type)">
            <v-input
              :class="item.class"
              :style="item.style"
              v-bind="$_bind(item)"
              :value="value[item.key]"
              :type="item.type"
              :placeholder="item.placeholder"
              :show-password="item.type === 'password'"
              @input="$_inputChange(item, $event)"
            />
          </template>
          <template v-if="item.type === 'inputnumber'">
            <el-input-number
              :class="item.class"
              :style="item.style"
              v-bind="$_bind(item)"
              :value="value[item.key]"
              :placeholder="item.placeholder"
              @input="$_inputChange(item, $event)"
            />
          </template>
          <template v-if="item.type === 'radio'">
            <v-radio
              :class="item.class"
              :style="item.style"
              v-bind="$_bind(item)"
              :value="value[item.key]"
              :options="item.options"
              @input="$_inputChange(item, $event)"
            />
          </template>
          <template v-if="item.type === 'checkbox'">
            <el-checkbox-group
              :class="item.class"
              :style="item.style"
              v-bind="$_bind(item)"
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
            <v-select
              :class="item.class"
              :style="item.style"
              v-bind="$_bind(item)"
              :value="value[item.key]"
              :options="item.options"
              :placeholder="item.placeholder"
              @input="$_inputChange(item, $event)"
            />
          </template>
          <template v-if="item.type === 'treeselect'">
            <v-tree-select
              :class="item.class"
              :style="item.style"
              v-bind="$_bind(item)"
              :value="value[item.key]"
              :placeholder="item.placeholder"
              @input="$_inputChange(item, $event)"
            />
          </template>
          <template v-if="item.type === 'switch'">
            <el-switch
              :class="item.class"
              :style="item.style"
              v-bind="$_bind(item)"
              :value="value[item.key]"
              @input="$_inputChange(item, $event)"
            />
          </template>
          <template v-if="['date', 'week', 'month', 'year', 'dates', 'datetime', 'daterange'].includes(item.type)">
            <el-date-picker
              :class="item.class"
              :style="item.style"
              v-bind="$_bind(item)"
              :value="value[item.key]"
              :type="item.type"
              :placeholder="item.placeholder"
              @input="$_inputChange(item, $event)"
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
      }
    },
    computed: {
      _options() {
        return this.options.filter(item => !item.hidden)
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
      $_bind(item) {
        return Object.assign(
          {},
          { rangeSeparator: '至', startPlaceholder: '开始日期', endPlaceholder: '结束日期' },
          { ...item },
        )
      },
      $_inputChange({ key }, event) {
        this.$emit('input', { ...this.value, [key]: event })
        this.$emit('change', { ...this.value, [key]: event })
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

<style lang="scss">
  .v-form {

  }
</style>
