import Vue from 'vue'
import Router from 'vue-router'

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
    children: [
      {
        path: '/home',
        component: () => import('examples/views/home'),
        name: 'home'
      },
      {
        path: '/quickstart',
        component: () => import('examples/views/quickstart'),
        name: 'quickstart'
      },
      // 业务组件
      {
        path: '/vsearch',
        component: () => import('examples/views/vsearch'),
        name: 'vsearch'
      },
      {
        path: '/vtable',
        component: () => import('examples/views/vtable'),
        name: 'vtable'
      },
      {
        path: '/vdialog',
        component: () => import('examples/views/vdialog'),
        name: 'vdialog'
      },
      {
        path: '/vdrawer',
        component: () => import('examples/views/vdrawer'),
        name: 'vdrawer'
      },
      {
        path: '/vconfirm',
        component: () => import('examples/views/vconfirm'),
        name: 'vconfirm'
      },
      {
        path: '/vexcel',
        component: () => import('examples/views/vexcel'),
        name: 'vexcel'
      },
      // 表单组件
      {
        path: '/vwangeditor',
        component: () => import('examples/views/vwangeditor'),
        name: 'vwangeditor'
      },
      {
        path: '/vinput',
        component: () => import('examples/views/vinput'),
        name: 'vinput'
      },
      {
        path: '/vselect',
        component: () => import('examples/views/vselect'),
        name: 'vselect'
      },
      {
        path: '/vform',
        component: () => import('examples/views/vform'),
        name: 'vform'
      },
      {
        path: '/vformnext',
        component: () => import('examples/views/vformnext'),
        name: 'vformnext'
      },
      // 展示组件
      {
        path: '/vbadge',
        component: () => import('examples/views/vbadge'),
        name: 'vbadge'
      },
      {
        path: '/vcountdown',
        component: () => import('examples/views/vcountdown'),
        name: 'vcountdown'
      },
      {
        path: '/vdescriptions',
        component: () => import('examples/views/vdescriptions'),
        name: 'vdescriptions'
      },
      {
        path: '/vqrcode',
        component: () => import('examples/views/vqrcode'),
        name: 'vqrcode'
      },
    ]
  }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
