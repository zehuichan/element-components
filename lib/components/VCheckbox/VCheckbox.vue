<template>
  <el-checkbox-group
    v-bind="$attrs"
    v-on="$listeners"
    :value="value"
    @input="$emit('input', value)"
  >
    <template v-if="button">
      <el-checkbox-button
        v-for="(item, index) in _options"
        :key="item.value"
        :label="item.value"
        :disabled="item.disabled"
      >
        {{ item.label }}
      </el-checkbox-button>
    </template>
    <template v-else>
      <el-checkbox
        v-for="(item, index) in _options"
        :key="item.value"
        :label="item.value"
        :border="border"
        :disabled="item.disabled"
      >
        {{ item.label }}
      </el-checkbox>
    </template>
  </el-checkbox-group>
</template>

<script>
  export default {
    name: 'VCheckbox',
    model: {
      prop: 'value',
      event: 'input'
    },
    props: {
      value: {
        type: Array,
        default: () => [],
      },
      options: {
        type: Array,
        default: () => [],
        required: true
      },
      button: {
        type: Boolean,
        default: false
      },
      border: {
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