<template>
  <el-select
    v-bind="$attrs"
    v-on="$listeners"
    :value="value"
    @input="$_inputChange"
  >
    <template v-if="group">
      <el-option-group
        v-for="group in options"
        :key="group.label"
        :label="group.label"
      >
        <el-option
          v-for="item in group.options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
          :disabled="item.disabled"
        />
      </el-option-group>
    </template>
    <template v-else>
      <el-option
        v-for="item in options"
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
      event: 'update:value'
    },
    props: {
      value: [String, Number, Boolean],
      options: {
        type: Array,
        default: () => [],
        required: true
      },
      group: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      $_inputChange(event) {
        this.$emit('update:value', event)
      }
    }
  }
</script>