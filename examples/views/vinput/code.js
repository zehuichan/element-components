export const vinput = {
  template: `
  <div>
    <v-input v-model="vinput" type="number">
      <template #prepend>Http://</template>
      <template #append>.com</template>
    </v-input>
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