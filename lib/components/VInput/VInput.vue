<template>
  <el-input
    v-bind="$attrs"
    v-on="$listeners"
    :type="type"
    :value="value"
    @input="$_inputChange"
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
      event: 'input'
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
      $_inputChange(event) {
        switch (this.type) {
          case 'digit': // 正整数
            this.$emit('input', formatNumber(event, false))
            break
          case '_number': // 数字
            this.$emit('input', formatNumber(event))
            break
          default:
            this.$emit('input', event)
            break
        }
      }
    }
  }
</script>

<style>

</style>