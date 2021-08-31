<template>
  <demo-wrapper title="VTreeSelect 树选择">
    <demo-card>
      <div class="nstration">large</div>
      <v-tree-select v-model="value" :options="options" placeholder="v-tree-select" multiple size="large"/>
      <div class="nstration">medium</div>
      <v-tree-select v-model="value" :options="options" placeholder="v-tree-select" multiple size="medium"/>
      <div class="nstration">small</div>
      <v-tree-select v-model="value" :options="options" placeholder="v-tree-select" multiple size="small"/>
      <div class="nstration">mini</div>
      <v-tree-select v-model="value" :options="options" placeholder="v-tree-select" multiple size="mini"/>
    </demo-card>
    <README/>
  </demo-wrapper>
</template>

<script>
import README from './README.md'

export default {
  name: 'vtreeselect',
  data() {
    return {
      value1: '45GP',
      options1: [
        {
          value: '20GP',
          label: '20GP'
        },
        {
          value: '40GP',
          label: '40GP'
        },
        {
          value: '45GP',
          label: '45GP'
        },
        {
          value: '45HQ',
          label: '45HQ'
        }
      ],
      value: ['a'],
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
  },
  components: {
    README
  }
}
</script>

<style>
.nstration {
  color: #8492a6;
  font-size: 14px;
  line-height: 30px;
}
</style>