import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入elementui组件库
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

//import css
import 'vue-beauty/package/style/vue-beauty.min.css'

//import components
import vueBeauty from 'vue-beauty'
Vue.use(vueBeauty)

//全局注入swiper模块
import VAS from 'vue-awesome-swiper'
Vue.use(VAS)
import 'swiper/css/swiper.css'

//引入axios
import axios from 'axios'
import VueAxios from 'vue-axios'
axios.defaults.baseURL='http://127.0.0.1:3000'
Vue.use(VueAxios, axios)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
