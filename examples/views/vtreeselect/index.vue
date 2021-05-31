<template>
  <demo-wrapper title="表单组件">
    <!--v-badge-->
    <demo-section>
      <demo-card title="v-tree-select">
        <v-tree-select v-model="value" :options="options"/>
      </demo-card>
      <demo-card style="width: 60%;">
        <demo-block title="template">
          <highlightjs language="html" :code="vtreeselect.template"/>
        </demo-block>
      </demo-card>
    </demo-section>
  </demo-wrapper>
</template>

<script>
// code
import { vtreeselect } from './code'

export default {
  name: 'vtreeselect',
  data() {
    return {
      vtreeselect,
      value: [],
      options: [
        {
          id: 'a',
          label: 'a',
          children: [
            {
              id: 'aa',
              label: 'aa',
            }, {
              id: 'ab',
              label: 'ab',
            }
          ],
        },
        {
          id: 'b',
          label: 'b',
        },
        {
          id: 'c',
          label: 'c',
        }
      ],
    }
  }
}
</script>