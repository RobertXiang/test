<template>
  <div class="newpwd">
    <div style="height: 50px">
      <mt-header title="美墅装修">
        <mt-button
          icon="back"
          slot="left"
          @click.native.capture="handleClose()"
        ></mt-button>
        <router-link to="/login" slot="right">登录</router-link>
      </mt-header>
    </div>
    <!-- 注册页面 -->
    <div class="item">
      <div class="item-img">
        <img :src="`/avatar/${this.avater}`" alt="" />
      </div>
      <!-- 注册表单 -->
      <mt-field
        v-model="name"
        type="text"
        label="账号"
        placeholder="请输入账号"
      ></mt-field>
      <mt-field
        v-model="oldpwd"
        label="原密码"
        type="password"
        placeholder="请输入原密码"
      ></mt-field>
      <mt-field
        v-model="pwd"
        label="新密码"
        type="password"
        placeholder="请输入新密码"
      ></mt-field>
      <mt-field
        @blur.native.capture="checkPwd2"
        v-model="pwd2"
        label="确认新密码"
        placeholder="请确认新密码"
        disableClear
        type="password"
      ></mt-field>
      <mt-button @click="checkForm" type="primary" size="large">修改</mt-button>
      <div class="item-null">
        <!-- 占位 -->
      </div>
    </div>
  </div>
</template>

<script>
import { MessageBox } from 'mint-ui'
import { Toast } from 'mint-ui'
export default {
  data() {
    return {
      name: '', //绑定账号输入框的值
      pwd: '',
      pwd2: '',
      oldpwd: '',
      uid: sessionStorage.getItem('uid'),
      avater: sessionStorage.getItem('avater'),
    }
  },
  methods: {
    handleClose() {
      this.$router.push('/mine')
    },
    loginout() {
      this.$store.commit('logout')
      this.$router.push('/login')
      Toast({
        message: '密码已修改,请重新登录',
        position: 'top',
        duration: 3000,
      })
    },
    checkPwd2() {
      if (this.pwd == this.pwd2) {
        //验证通过
        return true
      } else {
        // 验证失败
        return false
      }
    },
    checkForm() {
      // 点击提交按钮，验证整张表单
      if (this.checkPwd2()) {
        // console.log("验证通过，即将安全登录");
        // 发送注册请求，执行注册业务
        let pic = `${parseInt(Math.random() * 10 + 1)}.jpg`
        let params = `uid=${this.uid}&uname=${this.name}&upwd=${this.pwd}&avater=${pic}`
        this.axios.post('/user/set', params).then(res => {
          if (res.data.code == 200) {
            MessageBox.alert('修改成功').then(action => {
              this.loginout()
            })
          } else if (res.data.code == 201) {
            this.$messagebox('提示', '原密码有误,请重试')
          }
        })
      } else {
        this.$messagebox('提示', '新密码两次输入不一致,请重试')
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.newpwd {
  background-image: url('/public/loginbanner.jpeg');
  background-size: cover;
  height: 100vh;
}
.mint-header {
  height: 50px;
  font-size: 18px;
  background-color: rgb(61, 68, 103);
}
.item {
  width: 100%;
  height: 100%;
}
.item-img {
  width: 100%;
  height: 20vh;
  background-color: rgba(255, 255, 255, 0.4);
  display: flex;
  text-align: center;
  justify-content: center;
  padding-top: 5px;
  position: relative;
}
img {
  margin: auto;
  width: 20vh;
  height: 20vh;
  display: block;
  border-radius: 10vh;
  position: absolute;
  top: 30px;
}

// 修改注册按钮颜色
.mint-button--primary {
  background-color: #5589fd;
}
.newpwd .mint-cell {
  height: 40px;
  margin: 30px 20px;
  border-radius: 5px;
}
.mint-cell-title {
  width: 80px;
}
.newpwd .item button {
  width: 90%;
  margin-left: 5%;
  height: 6vh;
  border-radius: 10px;
  background: #5589fd;
}
</style>
