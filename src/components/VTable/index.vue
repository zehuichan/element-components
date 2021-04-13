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
      :cell-style="tableCss.cellStyle"
      :header-cell-style="tableCss.headerCellStyle"
      :row-class-name="tableRowClassName"
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
        :background="background"
        :current-page.sync="currentPage"
        :page-size.sync="pageSize"
        :layout="layout"
        :page-sizes="pageSizes"
        :total="total"
        v-bind="$attrs"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<script>
  // mixins
  import RowClass from './mixins/row-class'
  // utils
  import { scrollTo } from '../utils/scroll-to'

  export default {
    name: 'VTable',
    mixins: [RowClass],
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
        required: true,
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
    data() {
      return {
        tableCss: {
          cellStyle: {
            color: '#434343'
          },
          headerCellStyle: {
            background: '#E2EEFF',
            color: '#323232'
          }
        }
      }
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  ::v-deep {
    .el-table .ec-row {
      background-color: rgb(253, 246, 236);
    }

    .el-table .hh-row {
      background-color: rgb(254, 240, 240);
    }
  }

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
