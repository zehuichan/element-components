<template>
  <div class="v-dynamic-input">
    <el-table v-bind="$attrs" v-on="$listeners" :data="data" border style="width: 100%">
      <el-table-column type="index" label="#" width="50"/>
      <el-table-column
        v-for="(column, index) in columns"
        :key="column.key"
        v-bind="column"
      >
        <template slot-scope="scope">
          <component
            v-if="scope.row.edit"
            v-bind="column"
            :is="getComponentName(column.type)"
            clearable
            :class="column.class"
            :style="[{width: '100%'}, column.style]"
            :value="scope.row[column.key]"
            @input="$_inputChange(scope.row, column.key, $event)"
          />
          <slot v-else :scope="scope" :name="column.key">
            {{ scope.row[column.key] }}
          </slot>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="100px">
        <template slot-scope="scope">
          <el-button
            v-if="!scope.row.edit"
            type="text"
            @click="onAction('edit', scope)"
          >
            编辑
          </el-button>
          <el-button
            v-else
            type="text"
            @click="onAction('save', scope)"
          >
            保存
          </el-button>
          <el-button
            type="text"
            @click="onAction('delete', scope)"
          >
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="add-foundation">
      <div class="tools" @click="onAction('add')">
        <slot>
          <el-button type="danger">添加</el-button>
        </slot>
      </div>
      <slot name="extra"/>
    </div>
  </div>
</template>

<script>
function noop() {
}

export default {
  name: 'VDynamicInput',
  inheritAttrs: false,
  props: {
    data: {
      type: Array,
      default: () => []
    },
    columns: {
      type: Array,
      default: () => []
    },
    prop: {
      type: Object,
      default: () => ({})
    }
  },
  methods: {
    getComponentName(type) {
      if (['input', 'password', 'digit', 'number', 'textarea'].includes(type)) {
        return 'v-input'
      }
      if (['inputnumber'].includes(type)) {
        return 'el-input-number'
      }
      if (['select'].includes(type)) {
        return 'v-select'
      }
      if (['switch'].includes(type)) {
        return 'el-switch'
      }
      if (['timepicker'].includes(type)) {
        return 'el-time-picker'
      }
      if (['date', 'week', 'month', 'year', 'dates', 'datetime', 'daterange', 'datetimerange'].includes(type)) {
        return 'el-date-picker'
      }
      return type
    },
    $_inputChange(row, key, event) {
      row[key] = event
    },
    onAction(type, scope) {
      switch (type) {
        case 'add':
          this.data.push(Object.assign({}, { edit: true }, this.prop))
          this.$emit('row-add')
          break
        case 'edit':
          this.$emit('row-edit', scope, () => {
            scope.row.edit = true
          })
          break
        case 'save':
          this.$emit('row-save', scope, () => {
            scope.row.edit = false
          })
          break
        case 'delete':
          this.$emit('row-delete', scope)
          break
      }
    }
  }
}
</script>

<style lang="scss">
.v-dynamic-input {
  .el-form-item {
    margin-bottom: 0;
  }

  .add-foundation {
    margin-top: 12px;
  }

  .tools {
    display: inline-block;
  }

  .tools + .el-button {
    margin-left: 10px;
  }
}
</style>