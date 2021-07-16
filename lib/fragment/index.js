import Fragment from './fragment'

Fragment.install = function (Vue) {
  Vue.component(Fragment.name, Fragment)
}

export default Fragment
