<template>
  <div class="v-doc-content">
    <h1 v-if="title">{{ title }}</h1>
    <slot/>
  </div>
</template>

<script>
  export default {
    name: 'DemoWrapper',
    props: {
      title: String
    }
  }
</script>

<style lang="scss">

</style>