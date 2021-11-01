<template>
  <demo-wrapper title="VSpace 间距">
    <demo-card>
      <el-slider v-model="size"/>
      <v-space :size="size">
        <el-card v-for="i in 3" :key="i" class="box-card" style="width: 250px">
          <template #header>
            <div class="card-header">
              <span>Card name</span>
              <el-button class="button" type="text">Operation button</el-button>
            </div>
          </template>
          <div v-for="o in 4" :key="o" class="text item">
            {{ 'List item ' + o }}
          </div>
        </el-card>
      </v-space>
    </demo-card>
    <README/>
  </demo-wrapper>
</template>

<script>
import README from './README.md'

export default {
  name: 'vspace',
  data() {
    return {
      size: 20,
    }
  },
  components: {
    README
  }
}
</script>

<style lang="scss" scoped>
.item {
  margin-bottom: 18px;
}

.text {
  font-size: 14px;
}
</style>