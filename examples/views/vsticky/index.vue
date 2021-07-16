<template>
  <demo-wrapper title="VSticky 固钉">
    <demo-card>
      <v-sticky>
        <el-button type="primary">Affix top</el-button>
      </v-sticky>
    </demo-card>
    <README/>
  </demo-wrapper>
</template>

<script>
import README from './README.md'

export default {
  name: 'vsticky',
  data() {
    return {}
  },
  components: {
    README
  }
}
</script>

<style lang="scss">

</style>