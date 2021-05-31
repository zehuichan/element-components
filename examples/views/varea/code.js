export const varea = {
  template: `
  <div>
    <v-area v-model="value" columns-num="3" clearable/>
  </div>
  `,
  javascript: `
  export default {
    data() {
      return {
        value: []
      }
    },
  }
  `
}