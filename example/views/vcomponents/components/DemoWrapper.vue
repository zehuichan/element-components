<template>
  <div class="v-components">
    <h1 v-if="title">{{title}}</h1>
    <slot/>
    <demo-affix/>
  </div>
</template>

<script>
  // components
  import DemoAffix from './DemoAffix'

  export default {
    name: 'DemoWrapper',
    props: {
      title: String
    },
    components: {
      DemoAffix,
    }
  }
</script>

<style lang="scss">
  body {
    background-color: #f5f5f5;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    color: #323233;
    font-weight: normal;
    line-height: 1.5;
  }

  h1 {
    margin: 0 0 30px;
    font-size: 30px;
    cursor: default;
  }

  h3 {
    margin-bottom: 16px;
    font-weight: 600;
    font-size: 18px;
  }

  canvas {
    display: block;
  }

  .v-components {
    padding: 30px;
    overflow: hidden;

    .colon {
      display: inline-block;
      margin: 0 4px;
      color: #001529;
    }

    .block {
      display: inline-block;
      width: 22px;
      color: #fff;
      font-size: 12px;
      text-align: center;
      background-color: #001529;
    }

    .el-tag + .el-tag {
      margin-left: 8px;
    }
  }
</style>