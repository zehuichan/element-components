<template>
  <demo-wrapper title="VTreeSelect 树选择">
    <demo-card>
      <v-tree-select v-model="value" :options="options" placeholder="v-tree-select" clearable multiple/>
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