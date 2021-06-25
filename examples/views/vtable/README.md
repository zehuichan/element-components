### 介绍

管理后台通用表格组件，支持翻页、自定义插槽等功能。

### 基础用法

```html

<v-table
  :loading="loading"
  :data="tableData"
  :columns="columns"
  :total="total"
  :page.sync="query.page"
  :limit.sync="query.limit"
  @pagination="initData"
>
  <template #toolbar-title>
    插槽#toolbar-title
  </template>
  <template #toolbar-space>
    插槽#toolbar-space
  </template>
  <template #selection>
    <el-table-column type="selection" width="55"/>
  </template>
  <template #tags="{scope}">
    <el-tag v-for="tag in scope.row.tags" :key="tag" :type="tag.length > 5 ? 'warning' : 'success'">
      {{ tag }}
    </el-tag>
  </template>
  <template #action="{scope}">
    <el-button type="text">Invite</el-button>
    <el-button type="text">Delete</el-button>
  </template>
</v-table>
```

```js
export default {
  data() {
    return {
      loading: false,
      tableData: [],
      columns: [],
      total: 0,
      query: {
        page: 1,
        limit: 10
      },
    }
  },
  created() {
    this.columns = [
      { label: 'Name', key: 'name' },
      { label: 'Age', key: 'age' },
      { label: 'Address', key: 'address' },
      { label: 'Tags', key: 'tags' },
      { label: 'Action', key: 'action' },
    ]
  },
  methods: {
    initData() {
      this.loading = true
      this.tableData = [
        { name: 'John Brown', age: '32', address: 'New York No. 1 Lake Park', tags: ['NICE', 'DEVELOPER'] },
        { name: 'Jim Green', age: '42', address: 'London No. 1 Lake Park', tags: ['LOSER'] },
        { name: 'Joe Black', age: '32', address: 'Sidney No. 1 Lake Park', tags: ['COOL', 'TEACHER'] },
      ]
      this.total = 1
      this.loading = false
    },
  },
}
```

## API

### Base Props

| 参数   | 说明           | 类型      | 默认值 |
| ------ | -------------- | --------- | ------ |
| loading | 绑定值 | _boolean_  | `false` |
| data | 显示的数据   | _data[]_  | `[]`    |
| columns | 对象数组，配置每一列   | _Column[]_  | `[]`    |
| total | 总条目数     | _number_  | _    |
| page |   当前页数，支持 .sync 修饰符     | _number_  | 1    |
| limit | 每页显示条目个数，支持 .sync 修饰符     | _number_  | 10  |

### Events

| 事件名   | 说明           | 回调参数      |
| ------ | -------------- | --------- |
| pagination | 点击翻页操作时触发   | _  |
|  原生支持 el-table Events | [el-table 文档](https://element.eleme.cn/#/zh-CN/component/table#table-events)   | _  |

### Slots

| 名称   | 说明           | 
| ------ | -------------- | 
| toolbar-title | 工具栏左侧内容   |
| toolbar-space | 工具栏右侧内容   |