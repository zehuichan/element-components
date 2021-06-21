<template>
  <demo-wrapper title="业务组件">
    <!--v-form-next-->
    <demo-section>
      <demo-card title="v-form-next">
        <v-form-next ref="form" v-model="dataForm" :options="form" label-position="right" label-width="80px">

        </v-form-next>
      </demo-card>
      <demo-card style="width: 60%;">
        <demo-block title="template">
          <code>{{ dataForm }}</code>
        </demo-block>
      </demo-card>
    </demo-section>
  </demo-wrapper>
</template>

<script>
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
        form: {},
        dataForm: Object.assign({}, defaultForm),
      }
    }
  }
</script>