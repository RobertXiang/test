import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: sessionStorage.getItem('state') ? JSON.parse(sessionStorage.getItem('state')) : {
      uname:null,
      uid:null,
      close:false
      },
    
    getters: {},
    mutations: {
        //验证是否登录
        updateUname(state,uname){
            state.uname=uname
        },
        //验证是否搜索
        updateUid(state,uid){
            state.uid=uid
        },
        //弹出客服框
        updateClose(state){
            state.close=!state.close
        }


    },
    actions: {},
    modules: {}
})