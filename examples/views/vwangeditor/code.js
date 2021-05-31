export const vwangeditor = {
  template: `
  <div>
    <v-wang-editor v-model="editor1"/>
    <v-wang-editor v-model="editor2"/>
  </div>
  `,
  javascript: `
  export default {
    data() {
      return {
        editor1: '',
        editor2: '<p>支持回填</p>',
      }
    },
  }
  `
}