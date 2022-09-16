import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //保存当前登录状态
    islogin:sessionStorage.getItem('islogin'),
    //保存当前登录用户名
    uname:sessionStorage.getItem('uname'),
    //保存当前登录手机号
    phone:sessionStorage.getItem('phone'),
    //保存当前登录用户id
    uid:sessionStorage.getItem('uid')
      },
      getters: {
      },
      mutations: {
        // 修改当前
        loginok(state,obj){//传参就可以
          state.islogin=true,
          state.uname=obj.uname,
          state.phone=obj.phone,
          state.uid=obj.uid
        },
        logout(state){
          state.islogin=false
        }
      },
  actions: {
  },
  modules: {
  }
})
