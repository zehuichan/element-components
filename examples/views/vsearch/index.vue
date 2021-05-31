<template>
  <demo-wrapper title="业务组件">
    <!--v-search-->
    <demo-card title="v-search">
      <v-search v-model="searchForm" :options="search.options" @search="onSearch" @reset="onReset">
        <template #tools>
          自定义额外插槽 #tools
        </template>
        <template #name-label="{scope}">
          {{ scope.label }}
          <el-tooltip class="item" effect="dark" content="Top Center 提示文字" placement="top">
            <i class="el-icon-warning" style="color: #f44;"></i>
          </el-tooltip>
        </template>
      </v-search>
      <demo-block title="result">
        <highlightjs language="javascript" :code="JSON.stringify(searchForm)"/>
      </demo-block>
      <demo-block title="template">
        <highlightjs language="html" :code="vsearch.template"/>
      </demo-block>
      <demo-block title="javascript">
        <highlightjs language="javascript" :code="vsearch.javascript"/>
      </demo-block>
    </demo-card>
  </demo-wrapper>
</template>

<script>
// mapping
import { search } from './mapping'
// code
import { vsearch } from './code'

export default {
  name: 'vsearch',
  data() {
    return {
      search,
      vsearch,

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