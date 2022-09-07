<template>
  <div>
    <!-- 轮播图 -->
    <mt-header fixed title="设计师">
      <mt-button v-link="'/'" icon="back" slot="left">返回</mt-button>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <mt-swipe style="height: 56vw" :auto="1000">
      <mt-swipe-item>
        <div class="bt">
          <mt-button>五星设计师推荐</mt-button>
          <span>魏凌峰·首席设计师</span>
        </div>
        <img src="/img/1.jpg" />
      </mt-swipe-item>
      <mt-swipe-item>
        <div class="bt">
          <mt-button>五星设计师推荐</mt-button>
          <span>魏凌峰·首席设计师</span>
        </div>
        <img src="/img/2.jpg" />
      </mt-swipe-item>
      <mt-swipe-item>
        <div class="bt">
          <mt-button>五星设计师推荐</mt-button>
          <span>魏凌峰·首席设计师</span>
        </div>
        <img src="/img/3.jpg" />
      </mt-swipe-item>
    </mt-swipe>
    <!-- 主要内容 -->
    <div id="main">
      <div class="tit">
        <span>设计师榜</span>
      </div>
      <!-- 单个卡片内容 -->
      <div @click="godetail()" id="item">
        <div class="header">
          <!-- 头像 -->
          <img src="/img/icon-demo-1126.png" alt="" />
          <!-- 简介 -->
          <div class="right">
            <span>
              王兴旺
              <img
                style="
                  width: 18px;
                  height: 18px;
                  position: relative;
                  bottom: -2px;
                "
                src="/img/icon-demo-1126.png"
                alt=""
              />
            </span>
            <span>北京 · 经手案例700</span>
            <div>
              <span>轻奢风</span>
              <span>美式</span>
            </div>
          </div>
        </div>
        <!-- 图片 -->
        <div class="footer">
          <img src="/img/1.jpg" alt="" />
          <img src="/img/2.jpg" alt="" />
          <img src="/img/3.jpg" alt="" />
        </div>
      </div>
      <div id="item">
        <div class="header">
          <!-- 头像 -->
          <img src="/img/icon-demo-1126.png" alt="" />
          <!-- 简介 -->
          <div class="right">
            <span>
              王兴旺
              <img
                style="
                  width: 18px;
                  height: 18px;
                  position: relative;
                  bottom: -2px;
                "
                src="/img/icon-demo-1126.png"
                alt=""
              />
            </span>
            <span>北京 · 经手案例700</span>
            <div>
              <span>轻奢风</span>
              <span>美式</span>
            </div>
          </div>
        </div>
        <!-- 图片 -->
        <div class="footer">
          <img src="/img/1.jpg" alt="" />
          <img src="/img/2.jpg" alt="" />
          <img src="/img/3.jpg" alt="" />
        </div>
      </div>
      <div id="item">
        <div class="header">
          <!-- 头像 -->
          <img src="/img/icon-demo-1126.png" alt="" />
          <!-- 简介 -->
          <div class="right">
            <span>
              王兴旺
              <img
                style="
                  width: 18px;
                  height: 18px;
                  position: relative;
                  bottom: -2px;
                "
                src="/img/icon-demo-1126.png"
                alt=""
              />
            </span>
            <span>北京 · 经手案例700</span>
            <div>
              <span>轻奢风</span>
              <span>美式</span>
            </div>
          </div>
        </div>
        <!-- 图片 -->
        <div class="footer">
          <img src="/img/1.jpg" alt="" />
          <img src="/img/2.jpg" alt="" />
          <img src="/img/3.jpg" alt="" />
        </div>
      </div>
      <div id="item">
        <div class="header">
          <!-- 头像 -->
          <img src="/img/icon-demo-1126.png" alt="" />
          <!-- 简介 -->
          <div class="right">
            <span>
              王兴旺
              <img
                style="
                  width: 18px;
                  height: 18px;
                  position: relative;
                  bottom: -2px;
                "
                src="/img/icon-demo-1126.png"
                alt=""
              />
            </span>
            <span>北京 · 经手案例700</span>
            <div>
              <span>轻奢风</span>
              <span>美式</span>
            </div>
          </div>
        </div>
        <!-- 图片 -->
        <div class="footer">
          <img src="/img/1.jpg" alt="" />
          <img src="/img/2.jpg" alt="" />
          <img src="/img/3.jpg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        methods: {
          godetail() {
            this.$router.push("/detail")
          }
        },
    }
</script>

<style scoped>
*{
  padding: 0;
  margin: 0;
}
.mint-header{
  background-color: #fff;
  z-index: 9999;
  color: #000;
  top:2px;

}
.mint-swipe {
  position: fixed;
  z-index: 999;
  top: 5%;
  left: 0;
  width: 100%;
}
.mint-swipe-item img {
  width: 100%;
}
::v-deep .mint-swipe-indicators {
  position: absolute;
  bottom: 3%;
  left: 87%;
  transform: none;
}
::v-deep .mint-swipe-indicator {
  opacity: 0.7;
  margin: 26px 3px;
}
.bt {
  position: absolute;
  bottom: 9%;
  left: 8%;
  display: flex;
  flex-direction: column;
}
.bt > button {
  border-radius: 20px;
  color: #000;
  font-size: 12px;
  font-weight: 600;
  height: 26px;
  width: 110px;
}
.bt > span {
  color: #fff;
  font-size: 22px;
  font-weight: 400;
  margin: 5px 5px;
}
#main {
  border-radius: 20px;
  background: #fff;
  position: absolute;
  top: 36%;
  /* margin-top: 280px; */
}
#main .tit {
  font-size: 20px;
  padding: 18px 18px 18px 10px;
  /* margin: 0; */
  position: fixed;
  background-color: #fff;
  z-index: 999;
  top: 29%;
  left: 0;
  height: 20px;
  border-radius: 16px 16px 0px 0px;
  width: 94%;
}
#item {
  margin-bottom: 20px;
  text-decoration: none;
}
#item .header img {
  width: 55px;
  height: 55px;
  margin-right: 4px;
}
#item .header {
  display: flex;
}
.header .right {
  display: flex;
  flex-direction: column;
  padding: 4px;
}
.header .right > span:first-child {
  font-size: 20px;
}
.header .right > span:nth-child(2) {
  color: rgb(157, 151, 151);
}
.header .right > div {
  margin: 8px 0;
}
.header .right > div > span {
  padding: 3px 6px;
  margin: 0px 8px;
  width: 20px;
  font-size: 12px;
  background-color: rgb(217, 163, 107, 0.2);
  color: rgb(198, 177, 152);
}
.header .right > div > span:first-child {
  margin-left: 0px;
}
.footer img {
  width: 25%;
  height: 100px;
}
.footer {
  display: flex;
  justify-content: space-around;
}
.footer img:first-child {
  margin-left: 17%;
}
</style>