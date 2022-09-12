import Vue from 'vue'
import VueRouter from 'vue-router'

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
    path: '/',
    component: () => import('../views/index.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
