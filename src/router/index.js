import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'

Vue.use(VueRouter)

const routes = [
  // 注册页面
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue'),
  },
  //登录页面
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
  },
  // 我的
  {
    path: '/mine',
    name: 'mine',
    component: () => import('../views/Mine.vue'),
  },
  // Home:套餐详情
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/Home.vue'),
  },
  // 空间商城
  {
    path: '/spacemall',
    name: 'spacemall',
    component: () => import('../views/SpaceMall.vue'),
  },
  // 我的订单
  {
    path: '/orderform',
    name: 'orderform',
    component: () => import('../views/OrderForm.vue'),
  },
  // 免费设计
  {
    path: '/navdesign',
    name: 'navdesign',
    component: () => import('../views/NavDesign.vue'),
  },
  {
    path: '/navdetail',
    name: 'navdetail',
    component: () => import('../views/NavDetail.vue'),
  },
  // 首页
  {
    path: '/',
    name: 'index',
    component: Index,
  },
  // 设计师模块
  {
    path: '/desdetails',
    name: 'Desdetail',
    component: () => import('../views/Desdetails.vue'),
  },
  {
    path: '/designer',
    name: 'designer',
    component: () => import('../views/Designer.vue'),
  },
  // 关于我们
  {
    path: '/about',
    name: 'about',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },
  //十秒报价
  {
    path: '/price',
    name: 'price',
    component: () => import('../views/Price.vue'),
  },
  // 家装新体验
  {
    path: '/newhome',
    name: 'NewHome',
    component: () => import('../views/NewHome.vue'),
  },
  //案例详情
  {
    path: '/anlidetail',
    name: 'Anlidetail',
    component: () => import('../views/Anlidetail.vue'),
  },
  // 案列
  {
    path: '/anli',
    name: 'Anli',
    component: () => import('../views/Anli.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
