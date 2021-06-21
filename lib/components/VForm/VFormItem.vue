<template>
  <div>
    <template v-if="['input', 'password', 'digit', 'number'].includes(item.type)">
      <v-input
        :class="item.class"
        :style="item.style"
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
  </div>
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
      },
    },
    methods: {
      $_bind(attrs, item) {
        return Object.assign(
          {},
          { ...attrs },
          { ...item },
        )
      },
    },
    components: {
      Treeselect
    }
  }
</script>

<style scoped>

</style>