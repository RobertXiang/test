import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 导入字体图标
import './assets/fonts/iconfont.css'
// 导入全局样式表
import './assets/css/global.css'

//引入vant
import Vant from 'vant'
import 'vant/lib/index.css'

//引入elementui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

//y引入echorts
import echarts from 'echarts'
import china from './assets/json/china.json' //此处填上面内容创建的china.json文件的路径


//引入qs
import qs from 'qs'


//引入axios

import axios from 'axios'
// 配置请求的跟路径
axios.defaults.baseURL = 'http://127.0.0.1:3000/'
    // axios.interceptors.request.use(config => {
    //     // console.log(config)
    //     config.headers.Authorization = window.sessionStorage.getItem('token')
    //         // 在最后必须 return config
    //     return config
    // })
Vue.prototype.$http = axios

//地图
Vue.prototype.$echarts = echarts
echarts.registerMap('china', china)

//引入qs
Vue.prototype.$qs = qs

Vue.use(ElementUI);

Vue.use(Vant)
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')