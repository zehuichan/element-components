<template>
  <el-descriptions class="v-descriptions" v-bind="$attrs">
    <slot slot="title" name="title"/>
    <slot slot="extra" name="extra"/>
    <el-descriptions-item v-for="item in columns" :key="item.key" :label="item.label">
      <slot :scope="data" :name="item.key">{{ setPropsData(data, item.key) || '_' }}</slot>
      <slot v-if="$slots.label" slot="label" :scope="data" :name="item.key + '-label'"/>
    </el-descriptions-item>
  </el-descriptions>
</template>

<script>
export default {
  name: 'VDescriptions',
  props: {
    data: {
      type: Object,
      required: true,
      default: () => ({})
    },
    columns: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  methods: {
    setPropsData(row, rowKey) {
      if (!row) throw new Error('row is required when get row identity')
      if (typeof rowKey === 'string') {
        if (rowKey.indexOf('.') < 0) {
          return row[rowKey]
        }
        let key = rowKey.split('.')
        let current = row
        for (let i = 0; i < key.length; i++) {
          current = current[key[i]]
        }
        return current
      }
    }
  }
}
</script>

<style lang="scss">
.el-descriptions-item__label {
  font-weight: 500;
}
</style>