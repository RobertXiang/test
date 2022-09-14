<template>
  <div>
    <!-- 头部 -->
    <mt-header fixed title="设计师" v-show="navTab">
      <mt-button @click="gomain()" icon="back" slot="left"></mt-button>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <!-- 背景图 -->
    <img
      src="/img/details_head.png"
      style="width: 100%"
    />
    <!-- 主体 -->
    <div id="main">
      <div v-if="data1">
        <div v-for="(d, index) in data1.data" :key="index">
          <img class="tou" :src="d.de_avatar" alt="" />
          <!-- 设计师 -->
          <div class="jianjie">
            <div class="left">
              <div class="left-a">
                <span>{{ d.de_name }}</span>
                <span>
                  <img
                    src="/img/Snipaste_2022-09-11_21-58-13.png"
                    style="
                      width: 18px;
                      border-radius: 20px;
                      position: relative;
                      top: 4px;
                    "
                  />
                  {{ d.de_grade }}
                </span>
              </div>
              <div class="a">
                <span>{{ d.jingyan }}</span>
              </div>
            </div>
            <button>咨询设计</button>
          </div>
          <!-- 设计风格 -->
          <div class="fg">
            <span>{{ d.de_fengge.split("\n")[0] }}</span>
            <span>{{ d.de_fengge.split("\n")[1] }}</span>
            <span>{{ d.de_fengge.split("\n")[2] }}</span>
          </div>
          <!-- 介绍 -->
          <div class="jies">
            <span>{{ d.lilian }}</span>
          </div>
        </div>
      </div>
      <!--导航  -->
      <van-tabs active="a" v-if="data2">
        <van-tab title="案例作品" name="a">
          <!-- 图片单元 -->
          <div id="tu" v-for="item in data2" :key="item.aid">
            <img :src="item.tit_pic" alt="" />
            <div class="dax">
              <span>{{ item.title }}</span>
            </div>
            <div class="daxa">
              <span>{{ item.fangwutype }}</span>
              <span>
                <img src="/img/num.png" style="width:18px"/>
                {{ item.renshu }}
              </span>
            </div>
          </div>
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
      data1: null,
      data2: null,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    this.getData1();
    this.getData2();
  },
  methods: {
    getData1() {
      let desid = Number(this.$route.query.index) + 1;
      console.log(this.$route.query);
      let url = `http://127.0.0.1:3000/des_deiles/details?des_id=${desid}`;
      this.axios.get(url).then((res) => {
        console.log(res);
        this.data1 = res.data;
      });
    },

    getData2() {
      let desid = Number(this.$route.query.index) + 1;
      let url = `http://127.0.0.1:3000/des_deiles/details/${desid}`;
      this.axios.get(url).then((res) => {
        console.log(res);
        this.data2 = res.data.data;
        console.log(this.data2);
      });
    },

    gomain() {
      this.$router.push("/designer");
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
*{
  margin: 0;
  padding: 0;
}
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
  padding: 10px 10px 50px 10px;
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
  color: rgb(188 175 153);
  position: relative;
  bottom: 4px;
}
#main .a {
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #000;
  margin-right: 10px;
}
.fg {
  display: flex;
}
.fg > span {
  background-color: rgb(240, 234, 229);
  margin: 8px;
  border-radius: 10px;
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
  border-radius: 4px;
}
#tu .dax {
  font-size: 16px;
  margin: 10px 0;
}
#tu .daxa{
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  color: #aaa;
}
.gd {
  font-size: 20px;
  text-align: center;
  margin-bottom: 40px;
}
#footer .dh {
  display: flex;
  flex-direction: column;
  // margin-left: 10px;
  width: 14%;
  // padding: 10px;
  font-size: 12px;
}
#footer {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: fixed;
  bottom: -2px;
  // left: 20px;
  padding: 6px;
  background-color: #fff;
  width: 100%;
  box-sizing:border-box;

}
#footer img {
  width: 30px;
}
#footer span {
  width: 34%;
  height: 45px;
  border-radius: 6px;
  font-size: 16px;
  text-align: center;
  line-height: 45px;
  align-items: center;
  // margin-left: 14px;
}
#footer span:nth-child(2) {
  border: 1px solid black;
}
#footer span:last-child {
  background-color: rgb(51, 51, 51);
  color: #fff;
}
.van-tabs__wrap {
  margin-bottom: 10px;
}
::v-deep .van-tabs__wrap .van-tabs__line{
  width: 200%;
  background-color: #eee6f6;
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