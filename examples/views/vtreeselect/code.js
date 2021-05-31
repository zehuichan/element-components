export const vtreeselect = {
  template: `
  <div>
    <v-tree-select v-model="value"/>
  </div>
  `,
  javascript: `
  export default {
    data() {
      return {
        value: ''
      }
    },
  }
  `
}