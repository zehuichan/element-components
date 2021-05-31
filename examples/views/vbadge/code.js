export const vbadge = {
  template: `
  <div>
    <v-badge/>
    <v-badge status="error"/>
    <v-badge status="default"/>
    <v-badge status="processing"/>
    <v-badge status="warning"/>
    
    <v-badge>Success</v-badge>
    <v-badge status="error">Error</v-badge>
    <v-badge status="default">Default</v-badge>
    <v-badge status="processing">Processing</v-badge>
    <v-badge status="warning">Warning</v-badge>
    <v-badge color="#f50">Custom #f50</v-badge>
    <v-badge color="#2db7f5">Custom #2db7f5</v-badge>
    <v-badge color="#87d068">Custom #87d068</v-badge>
    <v-badge color="#108ee9">Custom #108ee9</v-badge>
  </div>
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