<template>
  <div class="reg">
    <!-- 标题栏 -->
    <van-nav-bar title="注册" left-arrow @click-left="onClickLeft" />
    <!-- 表单 -->
    <van-form>
      <van-field
        v-model="name"
        name="用户名"
        placeholder="用户名字符在3~15个字符"
        left-icon="friends"
        :rules="rules.nameyz"
      />
      <van-field
        v-model="phone"
        name="手机号"
        placeholder="请填写手机号"
        left-icon="phone"
        :rules="rules.phoneyz"
      />
      <van-field
        v-model="email"
        name="邮箱"
        placeholder="请填写邮箱"
        left-icon="send-gift"
        :rules="rules.emailyz"
      />
      <van-field
        v-model="pwd"
        name="密码"
        type="password"
        placeholder="请设置登录密码"
        left-icon="todo-list"
        :rules="rules.pwdyz"
      />
      <van-checkbox
        v-model="checked"
        icon-size="14px"
        checked-color="rgb(222,196,155)"
      >
        我已阅读并同意《用户注册协议》
      </van-checkbox>
      <div style="margin: 16px">
        <van-button
          round
          block
          type="info"
          :disabled="!checked"
          native-type="submit"
          @click="onSubmit"
        >
          立即注册
        </van-button>
      </div>
      <div style="margin: 16px">
        <van-button
          round
          block
          type=" info"
          native-type="submit"
          @click="onChange"
        >
          已有账号，立即登录
        </van-button>
      </div>
    </van-form>
  </div>
</template>
<script>
import { Toast } from 'vant'
export default {
  data() {
    return {
      name: '',
      phone: '',
      email: '',
      pwd: '',
      checked: false,
      //验证用户名 手机号 密码 邮箱
      isname: false,
      isPhone: false,
      isEmail: false,
      isPwd: false,
      //验证规则
      rules: {
        nameyz: [
          {
            validator: name => {
              let result = /^.{3,20}$/.test(name)
              if (result) {
                this.isname = true
                return true
              } else {
                this.isname = false
                return false
              }
            },
            message: '请输入3-20个字符',
          },
        ],
        phoneyz: [
          {
            validator: phone => {
              let result = /^1[3-9]\d{9}$/.test(phone)
              if (result) {
                this.isPhone = true
                return true
              } else {
                this.isPhone = false
                return false
              }
            },
            message: '请输入正确的手机号',
          },
        ],
        emailyz: [
          {
            validator: email => {
              let result = /[\w\-]+@[a-z0-9A-Z]+(\.[A-Za-z]{2,4}){1,2}/.test(
                email
              )
              if (result) {
                this.isEmail = true
                return true
              } else {
                this.isEmail = false
                return false
              }
            },
            message: '请输入正确的邮箱号',
          },
        ],
        pwdyz: [
          {
            validator: pwd => {
              let result = /^(\w){6,10}$/.test(pwd)
              if (result) {
                this.isPwd = true
              } else {
                this.isPwd = false
              }
            },
            message: '请输入正确的六位数密码',
          },
        ],
      },
    }
  },
  methods: {
    onClickLeft() {
      // 跳转到首页
      this.$router.push('/')
    },
    onSubmit() {
      //判断
      if (this.isname && this.isPhone && this.isPwd && this.isEmail) {
        this.axios
          .post(
            '/user/register',
            `uname=${this.name}&phone=${this.phone}&email=${this.email}&upwd=${this.pwd}`
          )
          .then(result => {
            console.log(result.data)
            if (result.data.code == 200) {
              Toast({
                message: '注册成功',
                position: 'bottom',
                duration: 1000,
              })
              setTimeout(() => {
                this.$router.push('/login')
              }, 1200)
            } else {
              Toast({
                message: '注册失败',
                position: 'bottom',
                duration: 1000,
              })
            }
          })
      } else {
        Toast({
          message: '用户名或者手机号或者密码或者邮箱格式错误',
          position: 'bottom',
          duration: 1000,
        })
      }
    },
    onChange() {
      this.$router.push('/login')
    },
  },
}
</script>

<style>
.reg {
  background-image: url('/public/loginbanner.jpeg');
  background-size: cover;
  height: 100vh;
}
.reg .van-checkbox span {
  color: rgba(255, 255, 255, 0.7);
}
.reg .van-cell.van-field {
  border-radius: 5px;
}
.reg .van-nav-bar {
  background-color: rgb(61, 68, 103);
  height: 50px;
  border-radius: 5px;
}
.reg .van-nav-bar .van-icon {
  color: white;
  font-size: 24px;
}
.reg .van-nav-bar__title {
  color: #fff;
  font-size: 20px;
}

.reg .van-cell {
  font-size: 16px;
  width: 90%;
  margin-left: 20px;
  margin-top: 20px;
}
.reg .van-field__control {
  margin-left: 10px;
}
.reg .van-checkbox {
  font-size: 14px;
  margin-top: 20px;
  margin-left: 80px;
}
.reg .van-button--block {
  background-color: rgb(222, 196, 155);
  border: 1px solid rgb(222, 196, 155);
}

.reg .van-form > div:nth-child(7) button {
  background-color: #fff;
  color: rgb(222, 196, 155);
}
</style>
