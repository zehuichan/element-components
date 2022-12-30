<template>
  <demo-wrapper title="VSelect 选择框">
    <demo-card title="基础用法">
      <v-select v-model="value" :options="options" clearable />
    </demo-card>
    <demo-card title="自定义模板">
      <v-select v-model="value" :options="options" clearable>
        <template #default="scope">{{ scope }}</template>
      </v-select>
    </demo-card>
    <README />
  </demo-wrapper>
</template>

<script>
import README from './README.md'

export default {
  name: 'vselect',
  data() {
    return {
      value: '',
      options: [
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
      ]
    }
  },
  components: {
    README
  }
}
</script>