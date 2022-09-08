<template>
  <div>
    <!-- 头部 -->
    <mt-header fixed title="设计师" v-show="navTab">
      <mt-button @click="gomain()" icon="back" slot="left"></mt-button>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <!-- 背景图 -->
    <img
      src="/img/Ml8yMDIyLTA3LTA1VDE2OjA4OjAzLjU4Mg==.jpg"
      style="width: 100%"
    />
    <!-- 主体 -->
    <div id="main">
      <img class="tou" src="/img/Snipaste_2022-09-05_22-40-42.png" alt="" />
      <!-- 设计师 -->
      <div class="jianjie">
        <div class="left">
          <div class="left-a">
            <span>王兴旺</span>
            <span>V-首席设计师</span>
          </div>
          <div class="left-b">
            <div class="a">
              <span>2934</span>
              <span>互动</span>
            </div>
            <div class="a">
              <span>700</span>
              <span>案例</span>
            </div>
          </div>
        </div>
        <button>咨询设计</button>
      </div>
      <!-- 设计风格 -->
      <div class="fg">
        <span>大宅设计</span>
        <span>亲子空间</span>
        <span>公寓改造</span>
      </div>
      <!-- 介绍 -->
      <div class="jies">
        <span
          >“设计是一个创造无限可能的过程，去追求人与空间，
          艺术的完美切合，做出有温度的设计。”
        </span>
      </div>
      <!--导航  -->
      <van-tabs active="a">
        <van-tab title="案例作品" name="a">
          <!-- 图片单元 -->
          <div id="tu">
            <img src="/img/Ml8yMDIyLTA3LTA1VDE2OjA4OjAzLjU4Mg==.jpg" alt="" />
            <div class="dax">
              <div>
                <span>扩容收纳</span>
                <span>生活灵感</span>
              </div>
              <span>二居室·105㎡·北京</span>
            </div>
            <span>书卧一体，居然还能喝茶品茗，这间日式宅体验感满分!</span>
          </div>
          <div id="tu">
            <img src="/img/Ml8yMDIyLTA3LTA1VDE2OjA4OjAzLjU4Mg==.jpg" alt="" />
            <div class="dax">
              <div>
                <span>扩容收纳</span>
                <span>生活灵感</span>
              </div>
              <span>二居室·105㎡·北京</span>
            </div>
            <span>书卧一体，居然还能喝茶品茗，这间日式宅体验感满分!</span>
          </div>
          <!-- 查看更多 -->
          <div class="gd">查看更多案例>></div>
        </van-tab>
        <van-tab title="服务信息" name="b">
          <div class="item">
            <span>服务区域</span>
            <span>北京</span>
          </div>
          <div class="item">
            <span>经手案例</span>
            <span>700套案例</span>
          </div>
          <div class="item">
            <span>服务的小区</span>
            <span>紫玉山庄、香江别墅、龙湖天琅、福熙大道</span>
          </div>
        </van-tab>
        <van-tab title="图集" name="c">
          <img src="/img/Ml8yMDIyLTA3LTA1VDE2OjA4OjAzLjU4Mg==.jpg" alt="" />
          <img src="/img/Ml8yMDIyLTA3LTA1VDE2OjA4OjAzLjU4Mg==.jpg" alt="" />
          <img src="/img/Ml8yMDIyLTA3LTA1VDE2OjA4OjAzLjU4Mg==.jpg" alt="" />
          <img src="/img/Ml8yMDIyLTA3LTA1VDE2OjA4OjAzLjU4Mg==.jpg" alt="" />
          <img src="/img/Ml8yMDIyLTA3LTA1VDE2OjA4OjAzLjU4Mg==.jpg" alt="" />
          <img src="/img/Ml8yMDIyLTA3LTA1VDE2OjA4OjAzLjU4Mg==.jpg" alt="" />
          <img src="/img/Ml8yMDIyLTA3LTA1VDE2OjA4OjAzLjU4Mg==.jpg" alt="" />
          <img src="/img/Ml8yMDIyLTA3LTA1VDE2OjA4OjAzLjU4Mg==.jpg" alt="" />
          <img src="/img/Ml8yMDIyLTA3LTA1VDE2OjA4OjAzLjU4Mg==.jpg" alt="" />
        </van-tab>
      </van-tabs>
      <!-- 底部导航栏 -->
      <div id="footer">
        <div class="dh">
          <img src="/img/Snipaste_2022-09-06_01-02-12.png" alt="" />
          400直拨
        </div>
        <span>在线问专家</span>
        <span>预约设计</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navTab: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    gomain() {
      this.$router.push("/banner");
    },

    handleScroll() {
      let scrollTop = document.documentElement.scrollTop;
      console.log(scrollTop);
      if (scrollTop >= 100) {
        this.navTab = true;
      } else {
        this.navTab = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.mint-header {
  height: 58px;
  background-color: #fff;
  color: #000;
}
::v-deep .mintui {
  font-size: 20px;
}
::v-deep .mint-header-title {
  font-weight: 900;
  font-size: 20px;
}
#main {
  border-radius: 16px;
  position: relative;
  top: -20px;
  background-color: #fff;
  padding: 10px;
}
#main .tou {
  width: 22%;
  border-radius: 50%;
  position: relative;
  top: -40px;
  left: 10px;
}
.jianjie {
  display: flex;
  justify-content: space-between;
  margin-top: -36px;
  align-items: center;
}
.jianjie button {
  font-size: 10px;
  height: 28px;
  width: 70px;
  border-radius: 4px;
  background-color: rgb(255, 105, 0);
  color: #fff;
  border: none;
  margin-right: 10px;
}
#main .left-a {
  padding: 4px 0;
}
#main .left-a > span:first-child {
  font-size: 24px;
  margin: 0 8px 0 0;
}
#main .left-a > span:last-child {
  border: 1px solid black;
  border-radius: 20px;
  font-size: 10px;
  padding: 4px;
  background-color: #000;
  color: rgb(140, 127, 106);
  position: relative;
  bottom: 4px;
}
#main .left-b {
  display: flex;
  align-items: center;
}
.left-b .a > span:first-child {
  font-weight: 300;
  margin: 0 4px;
}
.left-b .a > span:last-child {
  font-size: 14px;
  color: #aaa;
  margin-right: 10px;
}
.fg {
  display: flex;
}
.fg > span {
  background-color: rgb(240, 234, 229);
  margin: 10px;
  border-radius: 30px;
  color: rgb(209, 162, 111);
  padding: 5px;
  font-size: 12px;
}
::v-deep .van-tab {
  flex: none;
  margin: 10px 8px;
}
::v-deep .van-tab--active {
  font-size: 18px;
  font-weight: 900;
}
#tu {
  box-sizing: border-box;
  padding: 10px;
}
#tu > img {
  width: 100%;
}
#tu .dax {
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  margin: 10px 0;
}
.dax > div > span:first-child {
  background-color: rgb(193, 193, 193);
  margin-right: 10px;
  color: #fff;
  padding: 5px;
  border-radius: 3px;
}
.dax > div > span:last-child {
  background-color: rgb(217, 164, 109);
  padding: 5px;
  border-radius: 3px;
}
#tu .dax >span:last-child{
  color: #aaa;
}
#tu > span:last-child {
  font-size: 18px;
}
.gd {
  font-size: 20px;
  text-align: center;
  margin-bottom: 40px;
}
#footer .dh {
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  padding: 10px;
  font-size: 12px;
}
#footer {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 10px;
  background-color: #fff;
}
#footer img {
  width: 30px;
}
#footer span {
  width: 140px;
  height: 45px;
  border-radius: 6px;
  font-size: 16px;
  text-align: center;
  line-height: 45px;
  align-items: center;
  margin-left: 14px;
}
#footer span:nth-child(2) {
  border: 1px solid black;
}
#footer span:last-child {
  background-color: rgb(51, 51, 51);
  color: #fff;
}
.van-tabs__wrap{
  margin-bottom: 10px;
}
::v-deep .van-tabs__content .van-tab__pane:nth-child(2) .item {
  padding-left: 10px;
  display: flex;
  flex-direction: column;
}
::v-deep .van-tabs__content .van-tab__pane:nth-child(2) .item span:last-child {
    color: #aaa;
    margin: 10px 0;
}
::v-deep .van-tabs__content .van-tab__pane:last-child {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
::v-deep .van-tab__pane img {
  width: 30%;
}
</style>