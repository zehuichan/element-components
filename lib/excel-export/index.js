import ExcelExport from './excel-export'

ExcelExport.install = function (Vue) {
  Vue.component(ExcelExport.name, ExcelExport)
}

export default ExcelExport
