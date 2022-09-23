<template>
  <div class="log">
    <!-- 头部导航栏 -->
    <mt-header title="">
      <mt-button
        icon="back"
        slot="left"
        @click.native.capture="goindex"
      ></mt-button>
      <mt-button slot="right">
        <van-cell @click="showPopup">帮助</van-cell>
        <van-popup
          v-model="show"
          round
          style="height: 15%; text-align: center; width: 60%"
        >
          <p style="margin-top: 12%">客服热线：</p>
          <p>0428-88888-6666</p>
        </van-popup>
      </mt-button>
    </mt-header>
    <!-- 提示 -->
    <h2 style="width: 100%; text-align: center">美墅装修账号登录</h2>
    <div style="text-align: center; margin-top: 15%">
      <img
        src="../../public/logo.jpg"
        width="35%"
        style="border-radius: 10%"
        alt=""
      />
      <p style="font-size: 16px">让每个人都享受装修的乐趣</p>
    </div>
    <!-- 表单验证单 -->
    <van-tabs v-model="active" style="margin-top: 15%">
      <van-tab title="账号密码登录" class="box">
        <!-- 表单登录 -->
        <van-form>
          <van-field
            v-model="name"
            name="用户名"
            placeholder="请输入用户名"
            left-icon="friends"
            :rules="[{ pattern: /^.{3,20}$/, message: '请输入正确用户名' }]"
            style="
              border: 1px solid #ddd;
              border-radius: 5px;
              background-color: rgb(240 240 240);
              display: inner-block;
            "
          />
          <van-field
            v-model="pwd"
            name="密码"
            type="password"
            placeholder="请输入登录密码"
            left-icon="todo-list"
            :rules="[{ validator, message: '请输入正确密码' }]"
            style="
              border: 1px solid #ddd;
              border-radius: 5px;
              background-color: rgb(240 240 240);
              display: inner-block;
            "
          />
          <div style="margin: 16px">
            <van-button
              round
              block
              type="info"
              native-type="submit"
              @click="onBlur"
              size:large
              round:true
              text="登录"
              color="rgba(11, 132, 255, 0.3)"
              style="font-size: 20px"
            ></van-button>
          </div>
          <div style="margin: 16px">
            <van-button
              round
              block
              type="info"
              native-type="submit"
              color="rgba(255,255,255,0)"
              @click="onChange"
            >
              <p style="color: black; font-size: 18px">没有账号?立即注册</p>
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
            style="
              border: 1px solid #ddd;
              border-radius: 5px;
              background-color: rgb(240 240 240);
              display: inner-block;
            "
          />
          <van-field
            v-model="pwd"
            name="密码"
            type="password"
            placeholder="请设置登录密码"
            left-icon="todo-list"
            :rules="[{ validator, message: '请输入正确密码' }]"
            style="
              border: 1px solid #ddd;
              border-radius: 5%;
              background-color: rgb(240 240 240);
              display: inner-block;
            "
          />
          <div style="margin: 16px">
            <van-button
              round
              block
              type="info"
              native-type="submit"
              @click="onSubmit"
              size:large
              round:true
              text="登录"
              color="rgba(11, 132, 255, 0.3)"
              style="font-size: 20px"
            ></van-button>
          </div>
          <div style="margin: 16px">
            <van-button
              round
              block
              type="info"
              native-type="submit"
              @click="onChange"
              hairline
              color="rgba(255,255,255,0)"
              style="font-size:18px,color:black;"
            >
              <p style="color: black; font-size: 18px">没有账号?立即注册</p>
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
      show: false, //弹出提示
      active: 0,
      name: '',
      phone: '',
      pwd: '',
      checked: false,
    }
  },
  methods: {
    //弹出提示
    showPopup() {
      this.show = true
    },
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

<style scoped>
.log {
  background: url('../../public/img/src=http___hbimg.huabanimg.com_6a8b5cf52dab7c7c3538f49acc3a457fcfffcfa5392f5-eu5bX1_fw658&refer=http___hbimg.huabanimg.webp') no-repeat;
  background-size: cover;
  height: 100vh;
}
.log .mint-header {
  height: 50px;
  font-size: 18px;
  background-color: rgb(255, 255, 255);
  color: black;
}
.log .van-tabs__wrap {
  margin: 10px;
}
.log .van-tabs__wrap .van-tab {
  font-size: 18px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-sizing: border-box;
}
.log .van-form .van-cell {
  font-size: 16px;
  width: 90%;
  margin-left: 20px;
  margin-top: 20px;
}
::v-deep .van-tabs--line .van-tabs__wrap{
  width: 90vw;
  margin-left: 20px;
}
</style>
