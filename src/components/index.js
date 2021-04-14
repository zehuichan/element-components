// lib
import VSearch from './VSearch'
import VTable from './VTable'
import VForm from './VForm'
import VExcelUpload from './VExcelUpload'
import VExcelExport from './VExcelExport'
import VUploader from './VUploader'
import VCountDown from './VCountDown'
import VFooterToolBar from './VFooterToolBar'
import VDialog from './VDialog'
import VDrawer from './VDrawer'
import VDescriptions from './VDescriptions'
import VFooter from './VFooter'
import VImageViewer from './VImageViewer'
import VBadge from './VBadge'
import VEllipsis from './VEllipsis'
import VQrcode from './VQrcode'

const components = [
  VSearch,
  VTable,
  VForm,
  VExcelUpload,
  VExcelExport,
  VUploader,
  VCountDown,
  VFooterToolBar,
  VDialog,
  VDrawer,
  VDescriptions,
  VFooter,
  VImageViewer,
  VBadge,
  VEllipsis,
  VQrcode,
]

const install = (Vue, opts = {}) => {
  if (install.installed) {
    return
  }
  components.map(component => Vue.component(component.name, component))
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  version: require('../package.json').version,
  install,
  ...components
}