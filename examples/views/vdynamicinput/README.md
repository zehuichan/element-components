### 介绍

动态录入。

### 基础用法

```html
<!--基础用法-->
<v-dynamic-input
  :data="tableData"
  :columns="columns"
  :prop="prop"
  @row-edit="onEditItem"
  @row-save="onSaveItem"
  @row-delete="onDeleteItem"
/>
```

```js
const tableData = [
  { code: 'YWRk', action: 'add', desc: '新增' },
  { code: 'ZGVsZXRl', action: 'delete', desc: '删除' },
  { code: 'ZWRpdA==', action: 'edit', desc: '修改' },
  { code: 'cXVlcnk=', action: 'query', desc: '查询' },
  { code: 'aW1wb3J0', action: 'import', desc: '导入' },
  { code: 'ZXhwb3J0', action: 'export', desc: '导出' },
]

export default {
  data() {
    return {
      tableData: [],
      columns: [
        { label: '标识码', key: 'code', type: 'input', placeholder: '标识码' },
        { label: '操作名称', key: 'action', type: 'input', placeholder: '操作名称' },
        { label: '描述', key: 'desc', type: 'input', placeholder: '描述' },
      ],
      prop: {
        code: '',
        action: '',
        desc: '',
      }
    }
  },
  created() {
    this.initData()
  },
  methods: {
    initData() {
      this.tableData = tableData.reduce((acc, item) => {
        this.$set(item, 'edit', false)
        acc.push(item)
        return acc
      }, [])
    },
    onEditItem({ row, $index }, next) {
      next()
    },
    onSaveItem({ row, $index }, next) {
      next()
    },
    onDeleteItem({ row, $index }, next) {
      if (row.edit) {
        this.$message.error(`row: ${$index + 1}, 当前行未保存`)
        return false
      }
      this.tableData.splice(this.tableData.indexOf(row), 1)
      next()
    }
  },
}
```

## API

### Base Props

| 参数   | 说明           | 类型      | 默认值 |
| ------ | -------------- | --------- | ------ |
| data | 显示的数据   | _data[]_  | `[]`    |
| columns | 对象数组，配置每一列   | _Column[]_  | `[]`    |
| prop | 列表单域 | _object_  | `{}`    |


### Events

| 事件名   | 说明           | 回调参数      |
| ------ | -------------- | --------- |
| row-edit | 当某一行被点击时会触发该事件，必须通过 `next()` 释放   | `function(scope, next)`  |
| row-save | 当某一行被点击时会触发该事件，必须通过 `next()` 释放   | `function(scope, next)`  |
| row-delete | 当某一行被点击时会触发该事件   | `function(scope)`  |
|  原生支持 el-table Events | [el-table 文档](https://element.eleme.cn/#/zh-CN/component/table#table-events)   | _  |
