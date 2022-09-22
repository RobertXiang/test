<template>
  <div class="register center">
    <div class="registerform">
      <div class="register-nav">
        <span>账号注册</span>
        <a href="/login">已有账号，切换登录</a>
      </div>
      <el-form
        :model="registerForm"
        status-icon
        :rules="rules"
        ref="registerForm"
        class="registerForm"
      >
        <el-form-item prop="phone">
          <el-input
            v-model="registerForm.phone"
            placeholder="请输入11位手机号码"
          ></el-input>
        </el-form-item>
        <el-form-item prop="pass">
          <el-input
            type="password"
            v-model="registerForm.pass"
            autocomplete="off"
            placeholder="请输入不少于6位的密码"
          ></el-input>
        </el-form-item>
        <el-form-item prop="checkPass">
          <el-input
            type="password"
            v-model="registerForm.checkPass"
            autocomplete="off"
            placeholder="请确认密码"
          ></el-input>
        </el-form-item>

        <el-button class="submitBtn" @click="submitForm('registerForm')"
          >立即注册</el-button
        >
      </el-form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    var checkPhone = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("手机号码不能为空"));
      } else if (!/1[3-9][0-9]{9}/.test(value)) {
        callback(new Error("手机号码格式不正确"));
      } else {
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else if (!/^.{6,}$/.test(value)) {
        callback(new Error("密码长度小于6位"));
      } else {
        if (this.registerForm.checkPass !== "") {
          this.$refs.registerForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.registerForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      registerForm: {
        pass: "",
        checkPass: "",
        phone: "",
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        phone: [{ validator: checkPhone, trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm(registerForm) {
      this.$refs[registerForm].validate((valid) => {
        if (valid) {
              console.log(this.registerForm.phone)
              console.log(this.registerForm.pass)
          
            let params=`phone=${this.registerForm.phone}&upwd=${this.registerForm.pass}`
            this.axios.post('/user/pcreg',params).then(res=>{
              console.log(res.data)
            if (res.data.code == 200) {
              alert('注册成功!')
              setTimeout(() => {
                this.$router.push('/login')
              }, 1200)
            }else if(res.data.code == 401){
              alert('用户已存在!')
            }
            else {
              alert("注册失败!");
            }    
            })
        } else {
          alert("手机号或密码有误!");
          return false;
        }
      });
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
.register {
  margin: 40px auto;
  height: 460px;
  background-image: url("../assets/img/login-back.jpg");
  box-shadow: -2px 2px 20px #ccc;
  .registerform {
    float: right;
    height: 100%;
    width: 420px;
    padding: 0 30px;
  }
  .register-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 30px 0;
    > span {
      font-size: 24px;
      color: #ffa31f;
    }
    > a {
      font-size: 14px;
      color: #666;
    }
  }
  ::v-deep .el-form-item {
    margin-bottom: 25px;
    input {
      border-radius: 0;
      height: 46px;
      &:focus {
        border: 1px solid #dcdfe6;
      }
    }
  }
  .submitBtn {
        width: 100%;
        height: 46px;
        margin: 30px 0;
        background-color: #ffa31f;
        color: #fff;
        font-size: 16px;
      }
}
</style>