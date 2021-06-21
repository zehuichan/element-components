<template>
  <Fragment>
    <template v-if="['input', 'password', 'digit', 'number'].includes(item.type)">
      <v-input
        :class="item.class"
        :style="item.style"
        :type="item.type"
        :show-password="item.type === 'password'"
        v-bind="$_bind($attrs, item)"
        v-on="$listeners"
      />
    </template>
    <template v-if="item.type === 'inputnumber'">
      <el-input-number
        :class="item.class"
        :style="item.style"
        v-bind="$_bind($attrs, item)"
        v-on="$listeners"
      />
    </template>
    <template v-if="item.type === 'textarea'">
      <el-input
        :class="item.class"
        :style="item.style"
        type="textarea"
        v-bind="$_bind($attrs, item)"
        v-on="$listeners"
      />
    </template>
    <template v-if="item.type === 'radio'">
      <el-radio-group
        :class="item.class"
        :style="item.style"
        v-bind="$_bind($attrs, item)"
        v-on="$listeners"
      >
        <el-radio
          v-for="(sub, idx) in item.options"
          :key="idx"
          :label="sub.value"
        >
          {{ sub.label }}
        </el-radio>
      </el-radio-group>
    </template>
    <template v-if="item.type === 'checkbox'">
      <el-checkbox-group
        :class="item.class"
        :style="item.style"
        v-bind="$_bind($attrs, item)"
        v-on="$listeners"
      >
        <el-checkbox
          v-for="(sub, idx) in item.options"
          :key="idx"
          :label="''+sub.value"
        >
          {{ sub.label }}
        </el-checkbox>
      </el-checkbox-group>
    </template>
    <template v-if="item.type === 'select'">
      <el-select
        :class="item.class"
        :style="item.style"
        v-bind="$_bind($attrs, item)"
        v-on="$listeners"
      >
        <el-option
          v-for="(sub, idx) in item.options"
          :key="idx"
          :value="sub.value"
          :label="sub.label"
        />
      </el-select>
    </template>
    <template v-if="item.type === 'treeselect'">
      <treeselect
        :class="item.class"
        :style="item.style"
        v-bind="$_bind($attrs, item)"
        v-on="$listeners"
      />
    </template>
    <template v-if="item.type === 'switch'">
      <el-switch
        :class="item.class"
        :style="item.style"
        v-bind="$_bind($attrs, item)"
        v-on="$listeners"
      />
    </template>
    <template v-if="['date', 'week', 'month', 'year', 'dates'].includes(item.type)">
      <el-date-picker
        :class="item.class"
        :style="item.style"
        v-bind="$_bind($attrs, item)"
        v-on="$listeners"
      />
    </template>
    <template v-if="item.type === 'daterange'">
      <el-date-picker
        :class="item.class"
        :style="item.style"
        v-bind="$_bind($attrs, item)"
        v-on="$listeners"
      />
    </template>
    <template v-if="item.type === 'datetime'">
      <el-date-picker
        :class="item.class"
        :style="item.style"
        v-bind="$_bind($attrs, item)"
        v-on="$listeners"
      />
    </template>
  </Fragment>
</template>

<script>
  // treeselect
  import Treeselect from '@riophae/vue-treeselect'
  import '@riophae/vue-treeselect/dist/vue-treeselect.css'

  export default {
    name: 'VFormItem',
    props: {
      item: {
        type: Object,
        required: true,
      }
    },
    methods: {
      $_bind(attrs, item) {
        return Object.assign(
          {},
          { ...attrs },
          { rangeSeparator: '至', startPlaceholder: '开始日期', endPlaceholder: '结束日期' },
          { type: attrs.type === 'number' ? '_number' : attrs.type },
          { ...item },
        )
      },
    },
    components: {
      Treeselect
    }
  }
</script>

<style lang="scss">
  .el-form-item__content {
    font-size: 13px;
  }

  .vue-treeselect {
    line-height: 18px;
    color: #606266;
  }

  .vue-treeselect__control {
    height: 32px;
    border-radius: 4px;
  }

  .vue-treeselect__input {
    -webkit-appearance: none;
    background-image: none;
    border-radius: 4px;
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