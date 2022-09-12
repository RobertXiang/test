import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'

Vue.use(VueRouter)

const routes = [
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
    path: '/index',
    name: 'Index',
    component: () => import('../views/index.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
