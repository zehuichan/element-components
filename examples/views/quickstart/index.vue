<template>
  <demo-wrapper title="快速上手">
    <README/>
  </demo-wrapper>
</template>

<script>
  import README from './README.md'

  export default {
    name: 'quickstart',
    components: {
      README
    }
  }
</script>