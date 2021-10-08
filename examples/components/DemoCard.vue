<template>
  <div class="card">
    <h3 v-if="title">{{ title }}</h3>
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