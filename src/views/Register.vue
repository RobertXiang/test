<template>
  <div>
    <!-- views/Register.vue -->
    <mt-header title="注册">
      <mt-button
        icon="back"
        slot="left"
        @click.native.capture="goIndex"
      ></mt-button>
      <router-link to="/login" slot="right">登录</router-link>
    </mt-header>
    <van-image width="100vw" height="100%" src="/loginbanner.jpg" />
    <!-- 表单 -->
    <mt-field
      type="text"
      placeholder="请输入账号"
      label="账号："
      v-model="name"
      :state="nameState"
      @blur.native.capture="checkName"
    ></mt-field>
    <mt-field
      type="text"
      placeholder="请输入手机号"
      label="手机号"
      v-model="phone"
      :state="phoneState"
      @blur.native.capture="checkPhone"
    ></mt-field>
    <mt-field
      type="password"
      placeholder="请输入密码"
      label="密码"
      v-model="pwd"
      :state="pwdState"
      @blur.native.capture="checkPwd"
    ></mt-field>
    <mt-field
      type="password"
      placeholder="请再次输入密码"
      label="重复密码"
      v-model="pwd2"
      :state="pwd2State"
      @blur.native.capture="checkPwd2"
    ></mt-field>
    <mt-button size="large" type="primary" @click.native="checkForm"
      >立即注册</mt-button
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      nameState: "",
      phone: "",
      phoneState: "",
      pwd: "",
      pwdState: "",
      pwd2: "",
      pwd2State: "",
    };
  },
  methods: {
    checkName() {
      console.log("账号" + this.name);
      let exp = /^\w{3,15}$/;
      if (exp.test(this.name)) {
        this.nameState = "success";
        return true;
      } else {
        this.nameState = "error";
        return false;
      }
    },
    checkPhone() {
      let exp = /^1[3-9]\d{9}$/;
      if (exp.test(this.phone)) {
        this.phoneState = "success";
        return true;
      } else {
        this.phoneState = "error";
        return false;
      }
    },
    checkPwd() {
      let exp = /^\d{6}$/;
      if (exp.test(this.pwd)) {
        this.pwdState = "success";
        return true;
      } else {
        this.pwdState = "error";
        return false;
      }
    },
    checkPwd2() {
      if (this.pwd2 == this.pwd) {
        this.pwd2State = "success";
        return true;
      } else {
        this.pwd2State = "error";
        return false;
      }
    },
    checkForm() {
      if (this.checkName() && this.checkPwd() && this.checkPwd2()&&this.checkPhone()) {
        console.log("验证通过，开始执行注册业务...");

        let params=`uname=${this.name}&upwd=${this.pwd}&phone=${this.phone}`
        this.axios.post(`/user/register`,params).then(res=>{
            console.log('注册业务',res);
            if(res.data.code==200){
                //业务码200  注册成功
            this.$router.push('login')
            }else if(res.data.code==401){
                //业务码，
                this.$messagebox('提示','用户已存在，请重试')
            }

        })
      } else {
        console.log("请重新输入");
      }
    },
    goIndex() {
      this.$router.push("/");
    },
  },
};
</script>

<style lang="scss" scoped>
.mint-header{
    background-color: #5e7f96;
    color: #fff;
    border-radius: 3px;
    font-size: 16px;
}
.mint-cell.mint-field{
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 10px;
    margin: 4px;
    padding: 3px;
}
.mint-button--large{
    margin: 10px auto;
    padding: 5px;
    width: 90%;
}
</style>
