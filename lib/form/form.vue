<template>
  <el-form class="v-form" ref="form" :model="value" v-bind="$attrs" :validate-on-rule-change="false">
    <!-- 默认插槽作为表单项 -->
    <slot/>
    <el-row :gutter="20">
      <el-col v-for="item in _options" :key="item.key" :span="item.span" :offset="item.offset">
        <!--占位-->
        <el-form-item v-if="!item.key">
          <div :style="[{height: _block}, item.style]"></div>
        </el-form-item>
        <el-form-item
          v-else
          :label="item.label"
          :prop="item.key"
          :rules="item.rules"
        >
          <slot slot="label" :scope="item" :name="item.key + '-label'"/>
          <slot :scope="item" :name="item.key">
            <v-form-item
              :item="item"
              :placeholder="item.placeholder"
              :value="value[item.key]"
              @input="$_inputChange(item, $event)"
            />
          </slot>
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
