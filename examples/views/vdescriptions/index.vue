<template>
  <demo-wrapper title="展示组件">
    <!--v-descriptions-->
    <demo-card title="v-descriptions">
      <v-descriptions :data="descriptions.data" :columns="descriptions.columns">
        <template #date="{scope}">
          {{ scope.datetime.split(' ')[0] }}
        </template>
        <template #time="{scope}">
          {{ scope.datetime.split(' ')[1] }}
        </template>
        <template #custom>
          自定义插槽
        </template>
      </v-descriptions>
      <demo-block title="template">
        <highlightjs language="html" :code="vdescriptions.template"/>
      </demo-block>
    </demo-card>
  </demo-wrapper>
</template>

<script>
// mapping
import {descriptions} from './mapping'
// code
import {vdescriptions} from './code'

export default {
  name: 'vdescriptions',
  data() {
    return {
      descriptions,
      vdescriptions,
    }
  }
}
</script>