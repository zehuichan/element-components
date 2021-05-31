<template>
  <demo-wrapper title="业务组件">
    <!--v-form-->
    <demo-section>
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
          </template>
          <template #actions>
            <el-button type="primary">立即创建</el-button>
            <el-button @click="onReset">取消</el-button>
          </template>
        </v-form>
      </demo-card>
      <demo-card style="width: 60%;">
        <demo-block title="template">
          <highlightjs language="html" :code="vform.template"/>
        </demo-block>
        <demo-block title="javascript">
          <highlightjs language="javascript" :code="vform.javascript"/>
        </demo-block>
      </demo-card>
    </demo-section>
  </demo-wrapper>
</template>

<script>
  // mapping
  import { form } from './mapping'
  // code
  import { vform } from './code'

  const defaultForm = {
    input: null,
    digit: null,
    number: null,
    textarea: null,
    radio: null,
    checkbox: [],
    select: null,
    date: null,
    week: null,
    month: null,
    year: null,
    dates: null,
    daterange: [],
    datetime: null,
  }

  export default {
    name: 'vform',
    data() {
      return {
        form,
        vform,

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