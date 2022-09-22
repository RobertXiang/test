<template>
  <div class="log">
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
      src="https://ikj-storage-front-prod.oss-cn-beijing.aliyuncs.com/app/html-pc/xsybj/xsybjhead.png"
    />
    <!-- 表单验证单 -->
    <van-tabs v-model="active">
      <van-tab title="账号密码登录" class="box">
        <!-- 表单登录 -->
        <van-form>
          <van-field
            v-model="name"
            name="用户名"
            placeholder="请输入用户名"
            left-icon="friends"
            :rules="[{ pattern: /^.{3,20}$/, message: '请输入正确用户名' }]"
          />
          <van-field
            v-model="pwd"
            name="密码"
            type="password"
            placeholder="请设置登录密码"
            left-icon="todo-list"
            :rules="[{ validator, message: '请输入正确密码' }]"
          />
          <div style="margin: 16px">
            <van-button
              round
              block
              type="info"
              native-type="submit"
              @click="onBlur"
            >
              立即登录
            </van-button>
          </div>
          <div style="margin: 16px">
            <van-button
              round
              block
              type="info"
              native-type="submit"
              @click="onChange"
            >
              没有账号，立即注册
            </van-button>
          </div>
        </van-form>
      </van-tab>
      <van-tab title="手机密码登录" class="box">
        <!-- 表单登录 -->
        <van-form>
          <van-field
            v-model="phone"
            name="手机号"
            placeholder="请填写手机号"
            left-icon="phone"
            :rules="[{ pattern: /^1[3-9]\d{9}$/, message: '请输入正确手机号' }]"
          />
          <van-field
            v-model="pwd"
            name="密码"
            type="password"
            placeholder="请设置登录密码"
            left-icon="todo-list"
            :rules="[{ validator, message: '请输入正确密码' }]"
          />
          <div style="margin: 16px">
            <van-button
              round
              block
              type="info"
              native-type="submit"
              @click="onSubmit"
            >
              立即登录
            </van-button>
          </div>
          <div style="margin: 16px">
            <van-button
              round
              block
              type="info"
              native-type="submit"
              @click="onChange"
            >
              没有账号，立即注册
            </van-button>
          </div>
        </van-form>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import { Toast } from 'vant'
export default {
  data() {
    return {
      active: 0,
      name: '',
      phone: '',
      pwd: '',
      checked: false,
    }
  },
  methods: {
    onClickLeft() {
      // 跳转到首页
      this.$router.push('/')
    },
    // 验证密码
    validator(pwd) {
      return /^(\w){6,10}$/.test(pwd)
    },
    onBlur() {
      this.axios
        .post('/user/login/uname', `uname=${this.name}&upwd=${this.pwd}`)
        .then(result => {
          console.log(result.data)
          // console.log(result.data.data.uid)
          if (result.data.code == 200) {
            Toast({
              message: '登录成功',
              position: 'bottom',
              duration: 1000,
            })
            // 跳转到首页
            setTimeout(() => {
              this.$router.push('/')
            }, 1100)

            //修改vuex中的登录状态
            this.$store.commit('loginok', {
              uname: this.name,
              uid: result.data.data.uid,
            })
            //将islogin phone uid存入sessionStorage
            sessionStorage.setItem('islogin', true)
            sessionStorage.setItem('uname', this.name)
            sessionStorage.setItem('uid', result.data.data.uid)
            sessionStorage.setItem('avater', result.data.data.avater)
          } else {
            Toast({
              message: '登录失败',
              position: 'bottom',
              duration: 1000,
            })
          }
        })
    },
    onSubmit() {
      this.axios
        .post('/user/login/phone', `phone=${this.phone}&upwd=${this.pwd}`)
        .then(result => {
          console.log(result.data)
          if (result.data.code == 200) {
            Toast({
              message: '登录成功',
              position: 'bottom',
              duration: 1000,
            })
            // 跳转到首页
            setTimeout(() => {
              this.$router.push('/')
            }, 1100)

            //修改vuex中的登录状态
            this.$store.commit('loginok', {
              phone: this.phone,
              uid: result.data.data.uid,
            })
            //将islogin phone uid存入sessionStorage
            sessionStorage.setItem('islogin', true)
            sessionStorage.setItem('phone', this.phone)
            sessionStorage.setItem('uid', result.data.data.uid)
            sessionStorage.setItem('avater', result.data.data.avater)
          } else {
            Toast({
              message: '登录失败',
              position: 'bottom',
              duration: 1000,
            })
          }
        })
    },
    onChange() {
      this.$router.push('/register')
    },
    goindex() {
      this.$router.push('/mine')
    },
  },
}
</script>

<style>
.log {
  background-image: url('/public/loginbanner.jpeg');
  background-size: cover;
  height: 100vh;
}
.log .mint-header {
  height: 50px;
  font-size: 18px;
  background-color: rgb(61, 68, 103);
}
.log .van-tabs__wrap {
  margin: 10px;
}
.log .van-tabs__wrap .van-tab {
  font-size: 18px;
  border: 1px solid #ccc;
  /* border-radius: 8px; */
  box-sizing: border-box;
}
.log .van-form .van-cell {
  font-size: 16px;
  width: 90%;
  margin-left: 20px;
  margin-top: 20px;
}
</style>
