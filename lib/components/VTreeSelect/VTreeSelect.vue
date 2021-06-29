<template>
  <tree-select
    v-bind="$attrs"
    v-on="$listeners"
    :value="value"
    @input="input"
  >
    <template v-for="(val, name) of $slots" v-slot:[name]>
      <slot :name="name"/>
    </template>
  </tree-select>
</template>

<script>
import TreeSelect from '@riophae/vue-treeselect'
import '@riophae/vue-treeselect/dist/vue-treeselect.css'

export default {
  name: 'VTreeSelect',
  model: {
    prop: 'value',
    event: 'update:value'
  },
  props: {
    value: [String, Number, Array]
  },
  methods: {
    input(value, instanceId) {
      this.$emit('update:value', value === undefined ? null : value)
      this.$emit('change', value === undefined ? null : value)
    }
  },
  components: {
    TreeSelect
  }
}
</script>

<style lang="scss">
.vue-treeselect {
  line-height: 18px;
  color: #606266;
  font-size: 13px;
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
</style>