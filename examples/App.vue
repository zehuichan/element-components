<template>
  <div id="app">
    <el-button @click="show = true">click</el-button>
    <v-dialog v-model="show">
      123
    </v-dialog>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        show: false
      }
    },
  }
</script>
