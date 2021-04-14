import Vue from 'vue'
import App from './App.vue'

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// global lib
import VComponents from '../packages'

// 全量引入使用
Vue.use(Element)
Vue.use(VComponents)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
