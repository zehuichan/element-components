<template>
  <demo-wrapper title="业务组件">
    <demo-card title="v-form">
      <v-form ref="form" v-model="dataForm" :options="form" label-position="right" label-width="80px">
        <template #input-label="{scope}">
          {{ scope.label }}
        </template>
        <template #custom="{scope}">
          <el-image lazy fit="contain" style="width: 100px; height: 100px">
            <div slot="placeholder" class="image-slot">
              <i class="el-icon-loading"></i>
            </div>
          </el-image>
          {{ scope }}
        </template>
        <template #actions>
          <el-button type="primary">保存</el-button>
          <el-button @click="onReset">重置</el-button>
        </template>
      </v-form>
      <code> {{ dataForm }}</code>
    </demo-card>
  </demo-wrapper>
</template>

<script>
  // mapping
  import { form } from './mapping'

  const defaultForm = {
    input: null,
    digit: null,
    number: null,
    textarea: null,
    radio: null,
    checkbox: [],
    select: null,
    treeselect: null,
    date: null,
    week: null,
    month: null,
    year: null,
    dates: '',
    daterange: [],
    datetime: null,
  }

  export default {
    name: 'vform',
    data() {
      return {
        form,
        dataForm: Object.assign({}, defaultForm),
      }
    },
    methods: {
      onReset() {
        this.$refs.form.resetFields()
      }
    }
  }
</script>