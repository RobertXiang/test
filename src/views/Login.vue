<template>
  <div class="login center">
    <div class="loginform">
      <el-tabs v-model="activeName">
        <!-- 密码登录 -->
        <el-tab-pane label="密码登录" name="密码登录">
          <div class="mmdl">
            <p>
              <el-input v-model="phone" placeholder="请输入手机号码" />
            </p>
            <p>
              <el-input v-model="pwd" placeholder="请输入密码" show-password />
            </p>
            <p class="loginClick">
              <el-button class="submitBtn" @click="mmLogin">立即登录</el-button>
            </p>
            <div>
              <a href="" class="forgetPwd">忘记密码</a>
              <a href="/register" class="registerLink">免费注册</a>
            </div>
          </div>
        </el-tab-pane>

        <!-- 快捷登录 -->
        <el-tab-pane label="快捷登录" name="快捷登录">
          <div class="kjdl">
            <p>
              <el-input
                class="input"
                placeholder="请输入11位手机号"
                v-model="input"
                clearable
              />
              <el-button type="info" class="validate" @click="getValidate"
                >获取验证码</el-button
              >
            </p>
            <p>
              <el-input v-model="validate" placeholder="请输入验证码" />
            </p>
            <p class="loginClick">
              <el-button class="submitBtn" @click="kjLogin">立即登录</el-button>
            </p>
            <div>
              <a href="/register" class="registerLink">免费注册</a>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: "密码登录",
      input: "", //快捷登录手机号
      validate: "", //验证码
      phone: "", //账号
      pwd: "", //密码
      yzm: [4884, 8762, 1587, 1648, 6548, 4464, 9410, 1440, 1644, 3464],
    }; //模拟验证码
  },
  methods: {
    mmLogin() {
      if (this.phone != "" && this.pwd != "") {
        let params = `phone=${this.phone}&upwd=${this.pwd}`;
        this.axios.post("/user/login/phone", params).then((res) => {
          console.log(res);
          if (res.data.code == 200) {
            alert("登录成功!"); 
            
            //修改vuex中的登录状态
            this.$store.commit("loginok", {
              phone: this.phone,
              uid: res.data.data.uid,
            }); 
            //将islogin phone uid存入sessionStorage
            sessionStorage.setItem("islogin", true);
            sessionStorage.setItem("phone", this.phone);
            sessionStorage.setItem("uid", res.data.data.uid);
            sessionStorage.setItem("avater", res.data.data.avater);

            this.$router.push("/");
          } else {
            alert("账号或密码有误!");
          }
        });
      } else {
        alert("请输入账号或密码");
      }
    },
    kjLogin() {
      if (this.yzm != "" && /1[3-9][0-9]{9}/.test(this.input)) {
        this.$router.push("/");
      } else {
        alert("请输入正确的手机号码或验证码");
      }
    },

    //模拟验证码
    getValidate() {
      if (this.input == "") {
        alert("请输入手机号码");
      } else if (!/1[3-9][0-9]{9}/.test(this.input)) {
        alert("请输入正确的手机号码");
      } else {
        let index = Math.floor(Math.random() * 10);
        let yzm = this.yzm[index];
        this.validate = yzm;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
body {
  font-size: 16px !important;
}
* {
  margin: 0;
  padding: 0;
  user-select: none;
  list-style: none;
}

.center {
  width: 1200px;
  margin: 0 auto;
}
.login {
  margin: 40px auto;
  height: 460px;
  background-image: url("../assets/img/login-back.jpg");
  box-shadow: -2px 2px 20px #ccc;
  .loginform {
    float: right;
    height: 100%;
    // background-color: #fff !important;
    width: 420px;
    padding: 0 30px;
    ::v-deep .el-tabs__nav {
      width: 100%;
      padding: 20px 0;
      .el-tabs__item {
        width: 50%;
        font-size: 24px;
        text-align: center;
        padding: 0;
        &.el-tabs__item.is-active {
          color: #ffa31f;
        }
        &:hover {
          color: #ffa31f;
        }
      }
      .el-tabs__active-bar {
        background-color: #ffa31f;
      }
    }
    ::v-deep .el-tabs__content {
      padding-top: 30px;
      .el-input {
        margin: 10px 0;
        input {
          border-radius: 0;
          height: 46px;
          &:focus {
            border: 1px solid #dcdfe6;
          }
        }
      }
      .el-input.input {
        width: 60%;
      }
      .el-button.validate {
        width: 40%;
        height: 46px;
        border-radius: 0;
      }
      .submitBtn {
        width: 100%;
        height: 46px;
        margin: 30px 0;
        background-color: #ffa31f;
        color: #fff;
        font-size: 16px;
      }
      a {
        color: #666;
        font-size: 14px;
      }
      .forgetPwd {
        float: left;
      }
      .registerLink {
        float: right;
      }
    }
  }
}
</style>
