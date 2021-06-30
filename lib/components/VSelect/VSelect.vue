<template>
  <el-select
    v-bind="$attrs"
    v-on="$listeners"
    :value="value"
    @input="$emit('input', value)"
  >
    <template>
      <el-option
        v-for="item in _options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
        :disabled="item.disabled"
      />
    </template>
    <template v-for="(val, name) of $slots" v-slot:[name]>
      <slot :name="name"/>
    </template>
  </el-select>
</template>

<script>
export default {
  name: 'VSelect',
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