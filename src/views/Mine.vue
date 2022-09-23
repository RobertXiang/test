<template>
  <!-- 我的页面 -->
  <div class="mine">
    <!-- 头部 -->
    <div class="header">
      <!-- fiexd 会固定在顶部 -->
      <van-nav-bar title="美墅装修" />
      <!-- <p
        style="
          margin: 0 auto;
          width: 120px;
          font-size: 20px;
          font-weight: bold;
          position: relative;
          top: 50px;
          left: 20px;
        "
      >
        美墅装修
      </p> -->
      <!-- 头像 -->
      <div class="tx">
        <div class="text" v-if="$store.state.islogin">
          <img :src="`/avatar/${this.avater}`" alt="" />
          <span>{{ this.user[0].uname }}</span>
          <button @click="out">退出登录</button>
          <button @click="$router.push('/newPwd')">修改密码</button>
        </div>
        <div class="text" v-else @click="login">
          <img src="@/assets/icon/tx.png" alt="" />
          <span>未登录，点击登录</span>
        </div>
      </div>

      <!-- 会员业务 -->
      <div class="hy">
        <router-link to="/rights">
          <mt-button type="primary">
            <img src="@/assets/icon/hy1.jpg" alt="" />
            <span>会员权益</span>
          </mt-button>
        </router-link>
        <router-link to="/">
          <mt-button type="primary">
            <img
              style="margin-right: 3px; width: 25px"
              src="@/assets/icon/jf.png"
              alt=""
            />
            <span>我的积分</span>
          </mt-button>
        </router-link>
      </div>
    </div>

    <!-- 内容 -->
    <!-- 1.会员服务 -->
    <div class="c1">
      <div class="container">
        <a href="/">
          <img src="/jpg/nav.jpg" alt="" />
        </a>
        <h4>会员服务</h4>
        <ul>
          <li>
            <router-link to="/">
              <img src="@/assets/icon/hy.jpg" alt="" />
            </router-link>
            <span>邀请好友</span>
          </li>
          <li>
            <router-link to="/">
              <img src="@/assets/icon/jf.jpg" alt="" />
            </router-link>
            <span>积分商城</span>
          </li>
          <li>
            <router-link to="/">
              <img src="@/assets/icon/hd.jpg" alt="" />
            </router-link>
            <span>会员活动</span>
          </li>
          <li>
            <router-link to="/">
              <img src="@/assets/icon/fl.jpg" alt="" />
            </router-link>
            <span>会员福利</span>
          </li>
        </ul>
      </div>
    </div>

    <!-- 2.我的服务 -->
    <div class="c2">
      <div class="container">
        <h4>我的服务</h4>
        <ul>
          <li>
            <router-link to="/">
              <img src="@/assets/icon/dj.png" alt="" />
            </router-link>
            <span>支付订金</span>
          </li>
          <li>
            <router-view />
            <router-link to="/orderform">
              <img src="@/assets/icon/dd.png" alt="" />
            </router-link>
            <span>我的订单</span>
          </li>
          <li>
            <router-link to="/">
              <img src="@/assets/icon/ht.png" alt="" />
            </router-link>
            <span>我的合同</span>
          </li>
          <li>
            <router-link to="/">
              <img src="@/assets/icon/cl.png" alt="" />
            </router-link>
            <span>材料清单</span>
          </li>
        </ul>
        <ul>
          <li>
            <router-link to="/">
              <img src="../assets/icon/zx.png" alt="" />
            </router-link>
            <span>装修播报</span>
          </li>
          <li>
            <router-link to="/">
              <img src="../assets/icon/sd.png" alt="" />
            </router-link>
            <span>水电VR</span>
          </li>
          <li>
            <router-link to="/">
              <img src="../assets/icon/bx.png" alt="" />
            </router-link>
            <span>竣工保修</span>
          </li>
          <li>
            <router-link to="/">
              <img src="../assets/icon/sh.png" alt="" />
            </router-link>
            <span>售后服务</span>
          </li>
        </ul>
      </div>
    </div>

    <!-- 3.我在现场 -->
    <div class="c3">
      <div class="container">
        <h4>我在现场</h4>
        <ul>
          <li>
            <router-link to="/">
              <img src="@/assets/icon/qd.png" alt="" />
            </router-link>
            <span>现场签到</span>
          </li>
          <li>
            <router-link to="/">
              <img src="@/assets/icon/yqk.png" alt="" />
            </router-link>
            <span>邀请卡</span>
          </li>
        </ul>
      </div>
    </div>

    <!-- 尾部 -->
    <!-- 尾部导航栏 -->
    <van-tabbar v-model="active" active-color="#ee0a24" inactive-color="#000">
      <van-tabbar-item icon="home-o" @click="goIndex">首页</van-tabbar-item>
      <van-tabbar-item icon="friends-o" @click="goDesigner">
        设计师
      </van-tabbar-item>
      <van-tabbar-item icon="orders-o" @click="goAnli">案列</van-tabbar-item>
      <van-tabbar-item icon="contact" to="mine" @click="goMine">
        我的
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import LoginHeader from '@/components/LoginHeader.vue'
export default {
  components: { LoginHeader },
  data() {
    return {
      active: 3,
      uid: sessionStorage.getItem('uid'),
      avater: sessionStorage.getItem('avater'),
      user: [{ phone: '', uname: '' }],
    }
  },
  mounted() {
    this.axios.get(`/user/${this.uid}`).then(res => {
      console.log(res.data)
      this.user = res.data.data
    })
  },
  methods: {
    // 跳转我的自动刷新
    goMine() {
      this.$router.push('mine')
      this.$router.go(0)
    },
    //跳转首页自动刷新
    goIndex() {
      this.$router.push('/')
      this.$router.go(0)
    },
    // 跳转设计师时自动刷新
    goDesigner() {
      this.$router.push('designer')
      // this.$router.go(0)
    },
    goAnli() {
      this.$router.push('anli')
    },
    out() {
      this.$router.push('/')
      // 修改vuex中的登录状态
      this.$store.commit('logout')
      sessionStorage.removeItem('islogin')
      sessionStorage.removeItem('uname')
      sessionStorage.removeItem('phone')
      sessionStorage.removeItem('uid')
      sessionStorage.removeItem('avater')
    },
    login() {
      this.$router.push('/login')
    },
  },
}
</script>

<style scoped>
.mine {
  background-color: rgba(246, 246, 246);
}

.c1 img,
.c2 img,
.c3 img,
.header img {
  width: 40px;
}
/*******头部 *******/
/* 标题样式 */
.header {
  background-color: rgba(255, 236, 224);
}
.mint-navbar .mint-tab-item.is-selected {
  border-bottom-width: 0;
  padding-top: 2rem;
  padding-bottom: 1.1rem;
}
.mint-tab-item {
  background-color: rgba(255, 236, 224);
}
.mint-tab-item-label {
  font-weight: 600;
  color: rgba(75, 67, 94);
  font-size: 1.1rem;
}

/* 头像样式 */

.tx {
  position: relative;
  padding-top: 1.5rem;
}
.tx .text {
  /* height: 2rem; */
  /* margin-left: 2rem; */
  display: flex;
  justify-content: center;
  text-align: center;
}
.tx .text img {
  width: 4rem;
  height: 4rem;
  display: block;
  border-radius: 2rem;
  margin-left: 1.5rem;
}
.tx .text span {
  margin: 1rem;
}
.tx .text button {
  width: 5rem;
  height: 2rem;
  padding: 0px;
  margin-top: 1rem;
  background-color: rgba(255, 255, 255, 0.1);
  /* border: none; */
  border: 1px solid #ccc;
  border-radius: 1rem;
}

/* .tx a img:first-child {
  width: 5rem;
  border-radius: 50%;
  margin-left: 1.5rem;
}
.tx a:last-child {
  font-size: 1.1rem;
  position: absolute;
  top: 6rem;
  left: 8rem;
  color: black;
} */

/* 会员按钮样式 */
.hy {
  width: 100%;
  padding-bottom: 1.2rem;
  margin: 1.5rem auto 0;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
}
.hy button {
  width: 35vw;
  background-color: rgba(55, 55, 55);
  color: rgba(255, 216, 197);
  font-size: 1.1rem;
  margin: 0 5vw;
}
.hy img {
  vertical-align: middle;
}

/*******内容 *******/
/*******1.会员服务*******/
.container {
  width: 90vw;
  margin: 0 auto;
}
.c1 {
  background-color: white;
  border-top-left-radius: 13px;
  border-top-right-radius: 13px;
  padding: 1rem 0;
}
.c1 a img {
  height: 30vw;
  width: 91vw;
  border-radius: 10px;
}
h4 {
  margin-top: 25px;
  margin-bottom: 10px;
  font-size: 17px;
  font-weight: 400;
  padding-bottom: 15px;
  border-bottom: 1px solid rgb(240, 238, 238);
}
ul {
  display: flex;
  justify-content: space-between;
}
ul li {
  text-align: center;
}
ul li a {
  display: block;
}
ul li span {
  font-size: 14px;
}
.c1 ul li img {
  width: 34px;
  height: 34px;
}

/* 2.我的服务 */
/* 3.我在现场 */
.c2 ul:last-child {
  margin-top: 20px;
}
.c2,
.c3 {
  background-color: white;
  padding-bottom: 20px;
}
.c2 h4,
.c3 h4 {
  margin-top: 20px;
  padding-top: 15px;
}
.c3 ul {
  display: flex;
  margin-bottom: 50px;
  justify-content: flex-start;
}
.c3 ul li:last-child {
  margin-left: 13vw;
}

/* 底部高亮颜色 */
.van-tabbar-item--active {
  color: black;
}
</style>
