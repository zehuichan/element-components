<template>
  <div class="demo-section">
    <slot/>
  </div>
</template>

<script>
  export default {
    name: 'DemoSection'
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .demo-section {
    display: flex;

    .card:nth-child(1) {
      flex: 1;
    }

    .card:nth-child(2) {
      flex-shrink: 0;
      margin-left: 24px;
    }
  }
</style>