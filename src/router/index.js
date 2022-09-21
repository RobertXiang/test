import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'

Vue.use(VueRouter)

const routes = [
  // 关于我们
  {
    path: '/aboutus',
    name: 'aboutus',
    component: () => import('../views/AboutUs.vue'),
  },
  // 省心施工
  {
    path: '/construct',
    name: 'construct',
    component: () => import('../views/ConsTruct.vue'),
  },
  {
    // 甄选套餐
    path: '/combomeal',
    name: 'combomeal',
    component: () => import('../views/ComboMeal.vue'),
  },
  {
    path: '/',
    name: 'index',
    component: Index
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
