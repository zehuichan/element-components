import Vue from 'vue'
import Router from 'vue-router'

const { nav } = require('examples/config')

const loadView = function () {
  return treeToList(nav, 'items').map(item => ({
    path: '/' + item.path,
    component: () => import(`examples/views/${item.path}`),
    name: item.path,
    meta: {
      title: item.title
    }
  }))
}

const treeToList = function (data, children = 'children') {
  let tmp = []
  data.forEach(item => {
    tmp.push(item)
    if (item[children] && item[children].length > 0) {
      const res = treeToList(item[children], children)
      tmp = tmp.concat(res)
    } else {
      // 删掉不存在 children 值的属性
      delete item[children]
    }
  })
  return tmp
}

Vue.use(Router)

/* Layout */
import Layout from 'examples/layout'

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  { path: '/', redirect: '/home' },
  {
    path: '',
    component: Layout,
    children: loadView()
  }
]

export default new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})
