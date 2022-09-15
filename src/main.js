import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// axios
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
// 配置基础路径
axios.defaults.baseURL='http://127.0.0.1:3000'

// ElementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// VantUI
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

// MintUI
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
