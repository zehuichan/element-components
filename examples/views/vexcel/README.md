### 介绍

整理的前端上传Excel的方法，封装成公共组件。

支持Excel转json的前端上传。

### 前端导出excel

```html
<v-excel-export
  type="warning"
  icon="el-icon-download"
  :filename="filename"
  :can-export="canExport"
  :t-header="tHeader"
  :t-body="tBody"
>
  导出
</v-excel-export>
```

```js
export default {
  data() {
    return {
      tableData: [
        { name: 'John Brown', age: '32', address: 'New York No. 1 Lake Park', tags: ['NICE', 'DEVELOPER'] },
        { name: 'Jim Green', age: '42', address: 'London No. 1 Lake Park', tags: ['LOSER'] },
        { name: 'Joe Black', age: '32', address: 'Sidney No. 1 Lake Park', tags: ['COOL', 'TEACHER'] },
      ],
      
      filename: 'vtable',
      canExport: true,
      tHeader: ['Name', 'Age', 'Address', 'Tags'],
      tFilters: ['name', 'age', 'address', 'tags'],
    }
  },
  computed: {
    tBody() {
      return this.tableData.map(v => this.tFilters.map(j => {
        return v[j]
      }))
    }
  },
}
```

### 前端上传excel数据转json

```html
<v-excel-upload type="success" icon="el-icon-upload2" @success="onSuccess">上传</v-excel-upload>
```

```js
export default {
  data() {
    return {
      uploadForm: []
    }
  },
  methods: {
    onSuccess({ results, header }) {
      const transHeader = this.transExcelHeader(header)
      if (
        !this.inArray('手机号码', transHeader) ||
        !this.inArray('人员名称', transHeader)
      ) {
        this.$message.error('文件格式有误，请核对模板格式')
        return
      }
      for (let i = 0; i < results.length; i++) {
        let each = results[i]
        each = this.transExcelRow(each)
        this.uploadForm.upload_data.push({
          phone: each['手机号码'],
          name: each['人员名称']
        })
      }
      console.log(this.uploadForm)
    },
    transExcelRow(row) {
      const ret = {}
      for (const i in row) {
        ret[i.trim()] = row[i]
      }
      return ret
    },
    transExcelHeader(row) {
      const ret = {}
      for (const i in row) {
        ret[i] = row[i].trim()
      }
      return ret
    },
    inArray(search, array) {
      for (const i in array) {
        if (array[i] == search) {
          return true
        }
      }
      return false
    },
  }
}
```