<template>
  <el-input
    v-bind="$attrs"
    v-on="$listeners"
    :type="type"
    v-model="inputValue"
  >
    <template v-for="(val, name) of $slots" v-slot:[name]>
      <slot :name="name"/>
    </template>
  </el-input>
</template>

<script>
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
    data() {
      return {
        inputValue: this.value
      }
    },
    computed: {
      type() {
        return this.$attrs.type === 'number' ? '_number' : this.$attrs.type
      }
    },
    watch: {
      value(val) {
        this.inputValue = val
      },
      inputValue(val) {
        let value
        switch (this.type) {
          case 'digit':
          case '_number':
            const isNumber = this.type === '_number'
            value = formatNumber(val || '', isNumber, isNumber)
            break
          default:
            value = val
        }
        this.$emit('input', value)
      }
    }
  }
</script>