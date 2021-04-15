// lib
import VSearch from './VSearch/index.js'
import VTable from './VTable/index.js'
import VForm from './VForm/index.js'
import VExcelUpload from './VExcelUpload/index.js'
import VExcelExport from './VExcelExport/index.js'
import VUploader from './VUploader/index.js'
import VCountDown from './VCountDown/index.js'
import VFooterToolBar from './VFooterToolBar/index.js'
import VDialog from './VDialog/index.js'
import VDrawer from './VDrawer/index.js'
import VDescriptions from './VDescriptions/index.js'
import VFooter from './VFooter/index.js'
import VImageViewer from './VImageViewer/index.js'
import VBadge from './VBadge/index.js'
import VEllipsis from './VEllipsis/index.js'
import VQrcode from './VQrcode/index.js'
import VConfirm from './VConfirm/index.js'
import VSticky from './VSticky/index.js'

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
  VConfirm,
  VSticky,
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