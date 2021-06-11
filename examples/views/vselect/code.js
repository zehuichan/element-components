export const vselect = {
  template: `
  <div>
    <v-select v-model="value" :options="options"/>
  </div>
  `,
  javascript: `
  export default {
    data() {
      return {
        value: '',
        options: []
      }
    },
  }
  `
}