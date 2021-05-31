export const vdescriptions = {
  template: `
  <v-descriptions :data="data" :columns="columns">
    <template #custom>
      自定义插槽
    </template>
  </v-descriptions>
  `,
  javascript: `
  export default {
    data() {
      return {
      
      }
    },
  }
  `
}