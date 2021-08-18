import CountDown from './count-down'

CountDown.install = function (Vue) {
  Vue.component(CountDown.name, CountDown)
}

export default CountDown
