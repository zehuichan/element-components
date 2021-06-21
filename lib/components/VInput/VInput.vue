<template>
  <el-input
    v-bind="$attrs"
    v-on="$listeners"
    :type="type"
    :value="value"
    @input="input"
  >
    <template v-for="(val, name) of $slots" v-slot:[name]>
      <slot :name="name"/>
    </template>
  </el-input>
</template>

<script>
  // utils
  import { formatNumber } from 'lib/utils/formate-number'

  export default {
    name: 'VInput',
    model: {
      prop: 'value',
      event: 'update:value'
    },
    props: {
      value: [String, Number]
    },
    computed: {
      type() {
        return this.$attrs.type === 'number' ? '_number' : this.$attrs.type
      },
    },
    methods: {
      input(event) {
        switch (this.type) {
          case 'digit': // 正整数
            this.$emit('update:value', formatNumber(event, false))
            this.$emit('change', formatNumber(event, false))
            break
          case '_number': // 数字
            this.$emit('update:value', formatNumber(event))
            this.$emit('change', formatNumber(event))
            break
          default:
            this.$emit('update:value', event)
            this.$emit('change', formatNumber(event))
            break
        }
      }
    }
  }
</script>

<style>

</style>