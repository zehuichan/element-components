<template>
  <v-dialog
    v-bind="$attrs"
    v-on="$listeners"
    title="角色操作"
    :loading="loading"
    @confirm="onConfirm"
    @cancel="onCancel"
  >
  </v-dialog>
</template>

<script>
  export default {
    data() {
      return {
        loading: false
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