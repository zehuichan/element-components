// with polyfills
import 'core-js/stable'

import Vue from 'vue'
import App from './App.vue'
import router from './router'

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import hljs from 'highlight.js'
import 'highlight.js/styles/default.css'

// global lib
import VComponents from '../lib'

import './styles/scss/index.scss' // global css

// 全量引入使用
Vue.use(Element, {
  size: 'small'
})
Vue.use(hljs.vuePlugin)
Vue.use(VComponents)

Vue.config.productionTip = false
console.log('Vue', Vue.version)
console.log('Element', Element.version)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
