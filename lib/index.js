// lib
import ExtendSlot from './components/ExtendSlot'
import Fragment from './components/Fragment'
import VForm from './components/VForm'
import VFormItem from './components/VFormItem'
import VBadge from './components/VBadge'
import VTable from './components/VTable'
import VDialog from './components/VDialog'
import VDrawer from './components/VDrawer'
import VFooter from './components/VFooter'
import VQrcode from './components/VQrcode'
import VSearch from './components/VSearch'
import VSticky from './components/VSticky'
import VConfirm from './components/VConfirm'
import VEllipsis from './components/VEllipsis'
import VUploader from './components/VUploader'
import VCountDown from './components/VCountDown'
import VExcelExport from './components/VExcelExport'
import VExcelUpload from './components/VExcelUpload'
import VImageViewer from './components/VImageViewer'
import VDescriptions from './components/VDescriptions'
import VFooterToolBar from './components/VFooterToolBar'
import VWangEditor from './components/VWangEditor'
import VInput from './components/VInput'
import VSelect from './components/VSelect'
import VTreeSelect from './components/VTreeSelect'
import VRadio from './components/VRadio'

const components = [
  ExtendSlot,
  Fragment,
  VForm,
  VFormItem,
  VBadge,
  VTable,
  VDialog,
  VDrawer,
  VFooter,
  VQrcode,
  VSearch,
  VSticky,
  VConfirm,
  VEllipsis,
  VUploader,
  VCountDown,
  VExcelExport,
  VExcelUpload,
  VImageViewer,
  VDescriptions,
  VFooterToolBar,
  VWangEditor,
  VInput,
  VSelect,
  VTreeSelect,
  VRadio,
]

const install = (Vue, opts = {}) => {
  if (install.installed) {
    return
  }

  components.map(component => Vue.component(component.name, component))

  Vue.prototype.$ELEMENT = {
    size: opts.size || '',
    zIndex: opts.zIndex || 2000
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  version: process.env.VERSION || require('../package.json').version,
  install: install,
  ...components
}
