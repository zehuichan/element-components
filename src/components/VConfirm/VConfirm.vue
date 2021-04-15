<template>
  <el-popconfirm
    class="v-confirm"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot slot="reference"/>
  </el-popconfirm>
</template>

<script>
  export default {
    name: 'VConfirm'
  }
</script>

<style>
  .v-confirm + .el-button,
  .v-confirm + .v-confirm,
  .el-button + .v-confirm {
    margin-left: 10px;
  }
</style>