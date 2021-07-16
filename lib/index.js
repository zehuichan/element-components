// lib
import dayjs from 'dayjs'
import Fragment from './fragment'
import VForm from './v-form'
import VFormItem from './v-form-item'
import VBadge from './v-badge'
import VTable from './v-table'
import VDialog from './v-dialog'
import VDrawer from './v-drawer'
import VFooter from './v-footer'
import VQrcode from './v-qrcode'
import VSearch from './v-search'
import VSticky from './v-sticky'
import VConfirm from './v-confirm'
import VEllipsis from './v-ellipsis'
import VUploader from './v-uploader'
import VCountDown from './v-count-down'
import VExcelExport from './v-excel-export'
import VExcelUpload from './v-excel-upload'
import VImageViewer from './v-image-viewer'
import VDescriptions from './v-descriptions'
import VFooterToolBar from './v-footer-tool-bar'
import VWangEditor from './v-wang-editor'
import VInput from './v-input'
import VSelect from './v-select'
import VTreeSelect from './v-tree-select'
import VRadio from './v-radio'
import VCheckbox from './v-checkbox'
import VSvgIcon from './v-svg-icon'

const components = [
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
  VCheckbox,
  VSvgIcon,
]

const install = (Vue, opts = {}) => {
  if (install.installed) {
    return
  }

  components.map(component => Vue.component(component.name, component))

  Vue.prototype.$D = dayjs
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
