<template>
  <demo-wrapper title="v-tree-select 树选择">
    <demo-card title="v-tree-select">
      <v-tree-select v-model="form.value" :options="options" clearable/>
    </demo-card>
    {{ form }}
  </demo-wrapper>
</template>

<script>
  export default {
    name: 'vtreeselect',
    data() {
      return {
        form: {
          value: null
        },
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