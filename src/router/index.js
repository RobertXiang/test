import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'

Vue.use(VueRouter)

const routes = [
  // 我的
  {
    path: '/mine',
    name: 'mine',
    component: () => import('../views/Mine.vue'),
  },
  // Home
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/Home.vue'),
  },
  // 空间商城
  {
    path: '/spacemall',
    name: '/spacemall',
    component: () => import('../views/SpaceMall.vue'),
  },
  // 我的订单
  {
    path: '/orderform',
    name: 'orderform',
    component: () => import('../views/OrderForm.vue'),
  },
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
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
