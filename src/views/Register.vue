<template>
  <div>
    <!-- views/Register.vue -->
    <mt-header title="注册">
      <mt-button icon="back" slot="left"></mt-button>
      <router-link to="/login" slot="right">登录</router-link>
    </mt-header>
    <!-- 表单 -->
    <mt-field   type="text" placeholder="请输入账号" 
      label="账号"
      v-model="name" :state="nameState"
      @blur.native.capture="checkName"></mt-field>
    
    <mt-field 
        type="password" placeholder="请输入密码" label="密码"
        v-model="pwd" :state="pwdState"
        @blur.native.capture="checkPwd"></mt-field>

    <mt-field type="password" 
        placeholder="请再次输入密码" label="重复密码"
        v-model="pwd2" :state="pwd2State"
        @blur.native.capture="checkPwd2"></mt-field>

    <mt-button type="primary" size="large"
        @click="checkForm">立即注册</mt-button>
  </div>
</template>
<script>
export default {
    data() {
        return {
            name: '',   // 绑定账号输入框的值
            nameState: '', // 绑定账号输入框的state属性值
            pwd: '',  
            pwdState: '', 
            pwd2: '',  
            pwd2State: '', 
        }
    },
    methods:{
      checkForm(){  // 点击提交按钮，验证整张表单
        if(this.checkName() 
            && this.checkPwd() && this.checkPwd2()){
            console.log('验证通过，开始执行注册业务...')
        }
      },

      checkPwd2(){   // 用于验证确认密码输入框的值是否符合要求
        let exp = /^\d{6}$/
        if(exp.test(this.pwd2) && this.pwd==this.pwd2){ // 验证通过
            this.pwd2State = 'success'
            return true
        } else { // 验证失败
            this.pwd2State = 'error'
            return false
        }
      },      

      checkPwd(){   // 用于验证密码输入框的值是否符合要求
        let exp = /^\d{6}$/
        if(exp.test(this.pwd)){ // 验证通过
            this.pwdState = 'success'
            return true
        } else { // 验证失败
            this.pwdState = 'error'
            return false
        }
      },

      checkName(){   // 用于验证账号输入框的值是否符合要求
        console.log('账号：' + this.name)
        let exp = /^\w{3,15}$/
        if(exp.test(this.name)){ // 验证通过
            this.nameState = 'success'
            return true
        } else { // 验证失败
            this.nameState = 'error'
            return false
        }
      }
    }   
}
</script>