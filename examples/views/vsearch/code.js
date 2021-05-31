export const vsearch = {
  template: `
  <!-- 支持双向数据绑定，支持配置方式生成筛选项，默认@search、@reset事件 -->
  <v-search v-model="searchForm" :options="options" @search="onSearch" @reset="onReset">
    <template #tools>
      自定义额外插槽 #tools
    </template>
  </v-search>
  `,
  javascript: `
  export default {
    data() {
      return {
        searchForm: {}
      }
    },
    methods: {
      onSearch(form) {
        // todo fetch data
      },
      onReset(form) {
        // todo fetch data
      },
    }
  }
  `
}
