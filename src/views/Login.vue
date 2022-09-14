<template>
  <div>
    <!-- 头部导航栏 -->
    <mt-header title="美墅装修">
      <mt-button
        icon="back"
        slot="left"
        @click.native.capture="goindex"
      ></mt-button>
      <router-link to="/register" slot="right">注册</router-link>
    </mt-header>
    <!-- 背景图样式设置 -->
    <van-image
      width="100vw"
      height="100%"
      src="/loginbanner.jpg"
    />
    <van-tabs v-model="active">
      <van-tab title="账号密码登录" class="box">
        <!-- 表单登录 -->
        <mt-field
      type="text"
      placeholder="请输入账号"
      label="账号"
      v-model="uname"
      :state="unameState"
      @blur.native.capture="checkUname"
    ></mt-field>
    <mt-field
      type="password"
      placeholder="请输入密码"
      label="密码"
      v-model="password"
      :state="passwordState"
      @blur.native.capture="checkPassword"
    ></mt-field>
    <mt-button size="large" type="primary" @click.native="checkForm"
      >快速登录</mt-button
    >
      </van-tab>
      <van-tab title="手机密码登录" class="box">
        <!-- 表单登录 -->
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
      v-model="password"
      :state="passwordState"
      @blur.native.capture="checkpassword"
    ></mt-field>
    <mt-button size="large" type="primary" @click.native="checkForm1"
      >快速登录</mt-button
    >

      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      uname:'',
      unameState:'',
      phone:'',
      phoneState:'',
      password:'',
      passwordState:'',
    };
  },
  methods: {
    checkUname() {
      console.log("账号" + this.uname);
      let exp = /^\w{3,15}$/;
      if (exp.test(this.uname)) {
        this.unameState = "success";
        return true;
      } else {
        this.unameState = "error";
        return false;
      }
    },
    checkPassword() {
      let exp = /^\d{6}$/;
      if (exp.test(this.password)) {
        this.passwordState = "success";
        return true;
      } else {
        this.passwordState = "error";
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
    checkForm() {
      if (this.checkUname() && this.checkPassword()) {
        console.log("验证通过，登录成功...");
        let params = `uname=${this.uname}&upwd=${this.password}`;
        this.axios.post(`/user/login/uname`, params).then((res) => {
          console.log("登录业务", res);
          if (res.data.code == 200) {
            //业务码200  登录成功
            //调用vuex的mutations,修改登录用户信息
            // this.$store.commit('updateUserInfo',this.name)
            
            this.$router.push("/");
          } else if (res.data.code == 300) {
            //业务码，
            this.$messagebox("提示", "用户名或密码错误，请重试");
          }
        });
      } else {
        console.log("请重新输入");
      }
    },
     checkForm1() {
      if (this.checkPhone() && this.checkPassword()) {
        console.log("验证通过，登录成功...");
        let params = `phone=${this.phone}&upwd=${this.password}`;
        this.axios.post(`/user/login/phone`, params).then((res) => {
          console.log("登录业务", res);
          if (res.data.code == 200) {
            //业务码200  登录成功
            //调用vuex的mutations,修改登录用户信息
            // this.$store.commit('updateUserInfo',this.name)
            
            this.$router.push("/");
          } else if (res.data.code == 300) {
            //业务码，
            this.$messagebox("提示", "用户名或密码错误，请重试");
          }
        });
      } else {
        console.log("请重新输入");
      }
    },

  },
};
</script>

<style>
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
.van-tab{
    font-size: 16px;
    border:1px solid #ccc;
    border-radius: 8px;
}
</style>
