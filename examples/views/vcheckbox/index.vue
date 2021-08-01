<template>
  <demo-wrapper title="VCheckbox 多选框">
    <demo-card title="basic">
      <v-checkbox v-model="value" :options="options" @change="onChange"/>
    </demo-card>
    <demo-card title="disabled">
      <v-checkbox v-model="value" :options="options" disabled @change="onChange"/>
    </demo-card>
    <demo-card title="border">
      <v-checkbox v-model="value" :options="options" border @change="onChange"/>
    </demo-card>
    <demo-card title="button">
      <v-checkbox v-model="value" :options="options" button @change="onChange"/>
    </demo-card>
    <demo-card title="indeterminate 状态">
      <el-checkbox :indeterminate="indeterminate" v-model="checkAll" @change="onCheckAllChange">全选</el-checkbox>
      <el-divider/>
      <v-checkbox v-model="value" :options="options" @change="onChange"/>
    </demo-card>
    <README/>
  </demo-wrapper>
</template>

<script>
import README from './README.md'

export default {
  name: 'vcheckbox',
  data() {
    return {
      value: [1],
      options: [
        { label: '上海', value: 1 },
        { label: '北京', value: 2 },
        { label: '广州', value: 3 },
        { label: '深圳', value: 4 },
      ],
      indeterminate: true,
      checkAll: false,
    }
  },
  methods: {
    onCheckAllChange(val) {
      this.value = val ? this.options.map(item => item.value) : []
      this.indeterminate = false
    },
    onChange(val) {
      this.checkAll = val.length === this.options.length
      this.indeterminate = !!val.length && val.length < this.options.length
    }
  },
  components: {
    README
  }
}
</script>

<style>

</style>