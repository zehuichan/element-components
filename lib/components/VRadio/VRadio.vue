<template>
  <el-radio-group :value="value" @input="$emit('input', value)">
    <Fragment v-if="button">
      <el-radio-button
        v-for="(item, index) in _options"
        :key="item.value"
        :label="item.value"
      >
        {{ item.label }}
      </el-radio-button>
    </Fragment>
    <Fragment>
      <el-radio
        v-for="(item, index) in _options"
        :key="item.value"
        :label="item.value"
      >
        {{ item.label }}
      </el-radio>
    </Fragment>
  </el-radio-group>
</template>

<script>
export default {
  name: 'VRadio',
  model: {
    prop: 'value',
    event: 'input'
  },
  props: {
    value: [String, Number, Boolean],
    options: {
      type: Array,
      default: () => [],
      required: true
    },
    button: {
      type: Boolean,
      default: false
    },
    prop: {
      type: Object,
      default: () => ({ label: 'label', value: 'value' })
    }
  },
  computed: {
    _options() {
      return Array.from(this.options).map((item) => ({
        text: item[this.prop.label],
        value: item[this.prop.value],
        ...item
      }))
    }
  }
}
</script>

<style scoped>

</style>