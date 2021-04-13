// components
import VSearch from './VSearch/index'
import VTable from './VTable/index'
import VForm from './VForm/index'
import VExcelUpload from './VExcelUpload/index'
import VExcelExport from './VExcelExport/index'
import VUploader from './VUploader/index'
import VCountDown from './VCountDown/index'
import VFooterToolBar from './VFooterToolBar/index'
import VDialog from './VDialog'
import VDrawer from './VDrawer'
import VDescriptions from './VDescriptions/index'
import VFooter from './VFooter/index'
import VImageViewer from './VImageViewer/index'
import VBadge from './VBadge/index'
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

function plugin(Vue, opt) {
  if (plugin.installed) {
    return
  }
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

export default plugin