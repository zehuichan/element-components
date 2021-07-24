import VCountDown from './v-count-down'

VCountDown.install = function (Vue) {
  Vue.component(VCountDown.name, VCountDown)
}

export default VCountDown
