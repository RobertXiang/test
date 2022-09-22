import { Avatar } from 'element-ui'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //保存当前登录状态
    islogin: sessionStorage.getItem('islogin'),
    //保存当前登录用户名
    uname: sessionStorage.getItem('uname'),
    //保存当前登录手机号
    phone: sessionStorage.getItem('phone'),
    //保存当前登录用户id
    uid: sessionStorage.getItem('uid'),
    // 保存头像
    avater: sessionStorage.getItem('avater'),
  },
  getters: {},
  mutations: {
    loginok(state, obj) {
      ;(state.islogin = true),
        (state.uname = obj.uname),
        (state.phone = obj.phone),
        (state.uid = obj.uid),
        (state.avater = obj.avater)
    },
    logout(state) {
      state.islogin = false
    },
  },
  actions: {},
  modules: {},
})
