<template>
  <div id="app">
    <v-search v-model="searchForm" :options="search.options" @search="onSearch" @reset="onReset">
      <template #tools>
        自定义额外插槽 #tools
      </template>
      <template #name="{scope}">
        {{scope.label}}
        <el-tooltip class="item" effect="dark" content="Top Center 提示文字" placement="top">
          <i class="el-icon-warning" style="color: #f44;"></i>
        </el-tooltip>
      </template>
    </v-search>
  </div>
</template>

<script>
  // mapping
  import { search } from './mapping'

  export default {
    name: 'App',
    data() {
      return {
        search,

        searchForm: {
          name: 'chenzehui'
        },
      }
    },
    methods: {
      onSearch(form) {
      },
      onReset(form) {
      },
    }
  }
</script>