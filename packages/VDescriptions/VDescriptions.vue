<template>
  <div class="v-descriptions">
    <div class="v-descriptions-header" v-if="title">
      <div class="title">
        <slot name="title">{{title}}</slot>
      </div>
    </div>
    <div class="v-descriptions-view">
      <table>
        <tbody>
        <tr class="v-descriptions-row" v-for="(item, index) in _columns" :key="index">
          <td class="v-descriptions-item" :colspan="span(item, idx)" v-for="(sub, idx) in item" :key="idx">
            <div class="v-descriptions-item__container" :class="item.className">
              <span class="label">{{sub.label}}</span>
              <span class="content">
                 <slot :scope="data[sub.key]" :name="sub.key">{{data[sub.key] || '_'}}</slot>
              </span>
            </div>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  // lodash
  import chunk from 'lodash.chunk'

  export default {
    name: 'VDescriptions',
    props: {
      data: {
        type: Object,
        required: true,
        default: () => ({})
      },
      column: {
        type: Number,
        default: 3,
        validator: (val) => [1, 2, 3].includes(val)
      },
      columns: {
        type: Array,
        required: true,
        default: () => []
      },
      title: String
    },
    computed: {
      _columns() {
        return chunk(this.columns, this.column)
      }
    },
    methods: {
      span(row, idx) {
        if (row.length === this.column) {
          return 1
        } else if (row.length === 2) {
          return idx === 0 ? 1 : 2
        } else {
          return this.column
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .v-descriptions-header {
    display: flex;
    align-items: center;
    margin-bottom: 20px;

    .title {
      flex: auto;
      overflow: hidden;
      color: rgba(0, 0, 0, .85);
      font-weight: 700;
      font-size: 16px;
      line-height: 1.5715;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }

  .v-descriptions-view {
    table {
      width: 100%;
      table-layout: fixed;
    }
  }

  .v-descriptions-row {
    padding-bottom: 0;
    vertical-align: top;

    > td {
      padding-bottom: 16px;
    }
  }

  .v-descriptions-item__container {
    display: flex;

    .label,
    .content {
      display: inline-flex;
      align-items: baseline;
    }

    .label {
      color: rgba(0, 0, 0, .85);
      font-weight: 500;
      font-size: 14px;
      line-height: 1.5715;
      text-align: start;

      &:after {
        content: ":";
        position: relative;
        top: -.5px;
        margin: 0 8px 0 2px;
      }
    }

    .content {
      display: table-cell;
      flex: 1 1;
      color: rgba(0, 0, 0, .85);
      font-size: 14px;
      line-height: 1.5715;
      word-break: break-word;
      overflow-wrap: break-word;
    }
  }
</style>