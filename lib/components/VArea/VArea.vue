<template>
  <el-cascader
    v-bind="$attrs"
    v-on="$listeners"
    :options="options"
    :value="value"
    @input="$_inputChange"
  >
    <template v-for="(val, name) of $slots" v-slot:[name]>
      <slot :name="name"/>
    </template>
  </el-cascader>
</template>

<script>
  import area from './area'

  export default {
    name: 'VArea',
    model: {
      prop: 'value',
      event: 'input'
    },
    props: {
      value: Array,
      columnsNum: {
        type: [String, Number],
        default: 3
      },
    },
    computed: {
      options() {
        return +this.columnsNum === 2 ? area.provinceAndCityData : area.regionData
      }
    },
    methods: {
      $_inputChange(event) {
        this.$emit('input', event)
      },
      // expose api
      codeToText() {
        return area.CodeToText
      },
      textToCode() {
        return area.textToCode
      },
    }
  }
</script>

<style scoped>

</style>