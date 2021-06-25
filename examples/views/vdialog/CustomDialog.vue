<template>
  <v-dialog
    v-bind="$attrs"
    v-on="$listeners"
    title="角色操作"
    :loading="loading"
    @confirm="onConfirm"
    @cancel="onCancel"
  >
    <v-form v-model="form" :options="options" label-position="left" label-width="80px"/>
  </v-dialog>
</template>

<script>
  export default {
    data() {
      return {
        loading: false,
        form: {},
        options: [
          { label: '角色名称', key: 'name', value: null, placeholder: '角色名称', type: 'input' },
          { label: '角色值', key: 'val', value: null, placeholder: '角色值', type: 'input' },
          {
            label: '状态',
            key: 'status',
            value: null,
            placeholder: '角色值',
            type: 'switch',
            options: [
              { label: '启用', },
              { label: '停用', }
            ]
          },
          { label: '备注', key: 'remark', value: null, placeholder: '备注', type: 'textarea' },
        ]
      }
    },
    methods: {
      onConfirm() {
      },
      onCancel() {
      },
    }
  }
</script>

<style scoped>

</style>