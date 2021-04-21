<template>
  <div class="v-table" v-loading="loading" element-loading-text="拼命加载中...">
    <div class="v-table-list-toolbar" v-if="$slots['toolbar-title'] || $slots['toolbar-space']">
      <div class="v-table-list-toolbar-container">
        <div class="toolbar-title">
          <slot name="toolbar-title"/>
        </div>
        <div class="toolbar-space">
          <slot name="toolbar-space"/>
        </div>
      </div>
    </div>
    <el-table
      ref="table"
      :data="data"
      v-bind="$attrs"
      v-on="$listeners"
      style="width: 100%;"
    >
      <slot name="selection"/>
      <slot name="pre-column"/>
      <el-table-column
        v-for="(column, index) in columns"
        :key="column.key"
        :prop="column.key"
        :label="column.label"
        :width="column.width"
        :min-width="column.minWidth"
        :align="column.align || 'left'"
        :header-align="column.headerAlign || 'left'"
        :fixed="column.fixed"
        :sortable="column.sortable"
        :show-overflow-tooltip="column.showOverflowTooltip"
        v-if="column.hidden === undefined && !column.hidden"
      >

        <template slot-scope="scope">
          <slot :scope="scope" :name="column.key">
            {{setPropsData(scope.row, column.key)}}
          </slot>
        </template>
      </el-table-column>
    </el-table>
    <div class="pagination-container text-right">
      <el-pagination
        v-bind="$attrs"
        :background="background"
        :current-page.sync="currentPage"
        :page-size.sync="pageSize"
        :layout="layout"
        :page-sizes="pageSizes"
        :total="total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<script>
  // utils
  import { scrollTo } from '../utils/scroll-to'

  export default {
    name: 'VTable',
    props: {
      // table
      loading: Boolean,
      data: {
        type: Array,
        required: true,
        default: () => []
      },
      columns: {
        type: Array,
        default: () => []
      },
      // pagination
      total: {
        type: Number
      },
      page: {
        type: Number,
        default: 1
      },
      limit: {
        type: Number,
        default: 10
      },
      pageSizes: {
        type: Array,
        default() {
          return [10, 20, 30, 50]
        }
      },
      layout: {
        type: String,
        default: 'total, sizes, prev, pager, next, jumper'
      },
      background: {
        type: Boolean,
        default: true
      },
      autoScroll: {
        type: Boolean,
        default: false
      },
    },
    computed: {
      currentPage: {
        get() {
          return this.page
        },
        set(val) {
          this.$emit('update:page', val)
        }
      },
      pageSize: {
        get() {
          return this.limit
        },
        set(val) {
          this.$emit('update:limit', val)
        }
      }
    },
    methods: {
      setPropsData(row, rowKey) {
        if (typeof rowKey === 'string') {
          if (rowKey.indexOf('.') < 0) {
            return row[rowKey]
          }
          let key = rowKey.split('.')
          let current = row
          for (let i = 0; i < key.length; i++) {
            current = current?.[key[i]]
          }
          return current
        }
      },
      handleSizeChange(val) {
        this.$emit('pagination', { page: this.currentPage, limit: val })
        if (this.autoScroll) {
          scrollTo(0, 800)
        }
      },
      handleCurrentChange(val) {
        this.$emit('pagination', { page: val, limit: this.pageSize })
        if (this.autoScroll) {
          scrollTo(0, 800)
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .v-table {
    .pagination-container {
      background: #fff;
      padding: 16px;
    }
  }

  .v-table-list-toolbar {
    .v-table-list-toolbar-container {
      display: flex;
      justify-content: space-between;
      padding: 16px 0;
    }

    .toolbar-title {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      color: rgba(0, 0, 0, .85);
      font-weight: 500;
      font-size: 16px;
    }

    .toolbar-space {
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }
  }
</style>
