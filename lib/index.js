// lib
import Fragment from './fragment'
import Form from './form'
import Badge from './badge'
import Table from './table'
import Dialog from './dialog'
import Drawer from './drawer'
import Footer from './footer'
import Qrcode from './qrcode'
import Search from './search'
import Sticky from './sticky'
import Confirm from './confirm'
import Uploader from './uploader'
import CountDown from './count-down'
import ExcelExport from './excel-export'
import ExcelUpload from './excel-upload'
import ImageViewer from './image-viewer'
import Descriptions from './descriptions'
import FooterToolBar from './footer-tool-bar'
import WangEditor from './wang-editor'
import Input from './input'
import Select from './select'
import TreeSelect from './tree-select'
import Radio from './radio'
import Checkbox from './checkbox'
import SvgIcon from './svg-icon'
import Barcode from './barcode'
import Time from './time'
import F2 from './f2'
import Ellipsis from './ellipsis'
import DynamicInput from './dynamic-input'
import Space from './space'

const components = [
  Fragment,
  Form,
  Badge,
  Table,
  Dialog,
  Drawer,
  Footer,
  Qrcode,
  Search,
  Sticky,
  Confirm,
  Uploader,
  CountDown,
  ExcelExport,
  ExcelUpload,
  ImageViewer,
  Descriptions,
  FooterToolBar,
  WangEditor,
  Input,
  Select,
  TreeSelect,
  Radio,
  Checkbox,
  SvgIcon,
  Barcode,
  Time,
  F2,
  Ellipsis,
  DynamicInput,
  Space,
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
  version: APP_VERSION,
  APP_VERSION,
  GIT_HASH,
  install: install,
  ...components
}
