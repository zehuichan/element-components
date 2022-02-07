import './index.scss'
// utils
import { scrollTo } from '../utils/scroll-to'

export default {
  name: 'VTable',
  inheritAttrs: false,
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
      default: () => [10, 20, 30, 50]
    },
    layout: {
      type: String,
      default: 'total, sizes, prev, pager, next, jumper'
    },
    background: {
      type: Boolean,
      default: true
    },
    hideOnSinglePage: {
      type: Boolean,
      default: false
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
      if (!row) throw new Error('row is required when get row identity')
      if (typeof rowKey === 'string') {
        if (rowKey.indexOf('.') < 0) {
          return row[rowKey]
        }
        let key = rowKey.split('.')
        let current = row
        for (let i = 0; i < key.length; i++) {
          current = current[key[i]]
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
  },
  render() {
    const renderToolbar = () => (
      (this.$slots['toolbar-title'] || this.$slots['toolbar-space']) && <div class="v-table-list-toolbar">
        <div class="v-table-list-toolbar-container">
          <div class="toolbar-title">
            {this.$slots['toolbar-title']}
          </div>
          <div class="toolbar-space">
            {this.$slots['toolbar-space']}
          </div>
        </div>
      </div>
    )

    const renderTable = () => (
      <el-table
        vLoading={this.loading}
        {...{ props: this.$props, on: { ...this.$listeners } }}
        style="width: 100%;"
      >
        {this.$scopedSlots.default && this.$scopedSlots.default()}
        {
          this.columns.map((column) => {
            return (
              column.hidden === undefined && !column.hidden
                ? <el-table-column
                  prop={column.key}
                  {...{
                    props: column,
                    scopedSlots: {
                      default: (scope) => {
                        if (this.$scopedSlots[column.key]) {
                          return this.$scopedSlots[column.key]({ scope: scope })
                        }
                        return this.setPropsData(scope.row, column.key)
                      }
                    }
                  }}
                />
                : null
            )
          })
        }
      </el-table>
    )

    const renderPagination = () => (
      !this.hideOnSinglePage && <div class="pagination-container text-right">
        <el-pagination
          background={this.background}
          current-page={this.currentPage}
          page-size={this.pageSize}
          layout={this.layout}
          page-sizes={this.pageSizes}
          total={this.total}
          hide-on-single-page={this.hideOnSinglePage}
          on-size-change={this.handleSizeChange}
          on-current-change={this.handleCurrentChange}
        />
      </div>
    )
    return (
      <div class="v-table">
        {renderToolbar()}
        {renderTable()}
        {renderPagination()}
      </div>
    )
  }
}