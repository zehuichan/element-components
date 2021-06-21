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
      }
    },
    methods: {
      input(event) {
        switch (this.type) {
          case 'digit':
          case '_number':
            const isNumber = this.type === '_number'
            this.$emit('update:value', formatNumber(event, isNumber, isNumber))
            break
          default:
            this.$emit('update:value', event)
        }
      }
    }
  }
</script>

<style>

</style>