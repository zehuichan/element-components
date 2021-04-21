<template>
  <div class="card">
    <h3 v-if="title">{{title}}</h3>
    <slot/>
  </div>
</template>

<script>
  export default {
    name: 'DemoCard',
    props: {
      title: String
    }
  }
</script>

<style lang="scss">
  .card {
    margin-bottom: 24px;
    padding: 24px;
    background-color: #fff;
    border-radius: 12px;
    box-shadow: 0 8px 12px #ebedf0;
  }
</style>