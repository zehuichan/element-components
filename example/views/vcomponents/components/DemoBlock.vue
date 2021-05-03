<template>
  <div class="demo-block">
    <h2 v-if="title" class="demo-block__title">{{ title }}</h2>
    <div v-if="card" class="demo-block__card">
      <slot/>
    </div>
    <slot v-else/>
  </div>
</template>

<script>
  export default {
    name: 'DemoBlock',

    props: {
      card: Boolean,
      title: String,
    },
  }
</script>

<style lang="scss">
  .demo-block {
    &__title {
      margin: 0;
      padding: 32px 0 16px;
      color: rgba(69, 90, 100, 0.6);
      font-weight: normal;
      font-size: 14px;
      line-height: 16px;
    }

    &__card {
      margin: 12px 12px 0;
      overflow: hidden;
      border-radius: 8px;
    }

    &__title + &__card {
      margin-top: 0;
    }

    &:first-of-type {
      .demo-block__title {
        padding-top: 20px;
      }
    }

    p {
      font-size: 14px;
      line-height: 1.517;
    }
  }
</style>
