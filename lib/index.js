
import VForm from './components/VForm'
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

const components = [
  VForm,
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
  VFooterToolBar
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
  install,
  ...components
}
