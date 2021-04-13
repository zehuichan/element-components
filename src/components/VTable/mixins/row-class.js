export default {
  methods: {
    tableRowClassName({ row, rowIndex }) {
      if (row.ecChannel) {
        return 'ec-row'
      }
      if (row.orderChannel == 13) {
        return 'hh-row'
      }
      return ''
    },
  }
}