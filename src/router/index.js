import Vue from 'vue'
import VueRouter from 'vue-router'
import Users from '../views/user/Users.vue'
import Welcome from '../views/Welcome.vue'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
Vue.use(VueRouter)

const routes = [{ path: '/', redirect: '/login' },
    { path: '/login', component: Login },
    {
        path: '/home',
        component: Home,
        redirect: '/welcome',
        children: [
            { path: '/welcome', component: Welcome },
            { path: '/users', component: Users },
            {
                path: '/good',
                component: () =>
                    import ('../views/Good/Good')
            },
            {
                path: '/order',
                component: () =>
                    import ('../views/Order/Order')
            },


        ]
    }

]

//解决导航菜单中的Vue-router在3.0版本以上重复点击菜单报错的问题
const routerlPush = VueRouter.prototype.push
   VueRouter.prototype.push = function push(location) {
   return routerlPush.call(this,location).catch(err => err)
}

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
})

// 挂载路由导航守卫
// router.beforeEach((to, from, next) => {
//     // to 将要访问的路径
//     // from 代表从哪个路径跳转而来
//     // next 是一个函数，表示放行
//     //     next()  放行    next('/login')  强制跳转

//     if (to.path === '/login') return next()
//         // 获取token
//     const tokenStr = window.sessionStorage.getItem('token')
//     if (!tokenStr) return next('/login')
//     next()
// })

export default router