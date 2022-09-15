import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// socket.io
import VueSocketIO from 'vue-socket.io'
import SocketIO from 'socket.io-client'

Vue.use(
  new VueSocketIO({
    debug: false,
    connection: SocketIO('http://127.0.0.1:3030', {
      autoConnect: false // 取消自动连接     
    }),
    extraHeaders: { 'Access-Control-Allow-Origin': '*' }
  })
)


// 引入elementui组件库
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

//import css
import 'vue-beauty/package/style/vue-beauty.min.css'

//import components
import vueBeauty from 'vue-beauty'
Vue.use(vueBeauty)

//引入axios
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
