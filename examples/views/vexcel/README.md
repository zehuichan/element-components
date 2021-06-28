### 介绍

整理的前端上传Excel的方法，封装成公共组件。

支持Excel转json的前端上传，支持原生formData协同后端上传。

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
  前端导出excel
</v-excel-export>
```

```js
export default {
  data() {
    return {
      // 导出相关
      filename: '换卡换签待发货',
      canExport: false,
      tHeader: ['发行方', '车辆类型', '售后订单号', '车牌号', '收货人姓名', '收货人电话', '收货地址', '模式', '快递公司', '快递单号'],
      tFilters: ['supplierId', 'vehicleTypeDesc', 'id', 'plateNumber', 'consignee', 'consigneePhone', 'receivingAddress', 'patternDesc', 'expressCompany', 'deliveryNumber'],
    }
  },
  computed: {
    tBody() {
      return this.tableData.map(v => this.tFilters.map(j => {
        if (j === 'supplierId') {
          return this.$options.filters.supplierFilter(+v[j])
        }
        return v[j]
      }))
    }
  },
}
```

### 前端上传excel数据转json

```html

<v-excel-upload type="success" icon="el-icon-upload2" @success="onSuccess">前端上传Excel</v-excel-upload>
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

### 前端原生上传

```html
<v-uploader type="info" icon="el-icon-upload" :on-success="onSuccess">原生上传</v-uploader>
```

```js
export default {
  methods: {
    onSuccess(rawFile) {
      this.visible = false
      this.uploadLoading = true
      const fd = new FormData()
      fd.append('file', rawFile)
      upload('/api/url', fd).then((res) => {
        this.$message.success('上传成功')
      }).catch((err) => {
        this.uploadLoading = false
      })
    },
  }
}
```