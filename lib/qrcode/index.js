import Qrcode from './qrcode'

Qrcode.install = function (Vue) {
  Vue.component(Qrcode.name, Qrcode)
}

export default Qrcode
