<template>
  <div id="main">
    <!-- 顶部导航 -->
    <mt-header fixed title="关于我们">
      <mt-button icon="back" slot="left" @click="goHome"></mt-button>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>


    <!-- 主体 -->
    <img src="/img/phone_1.jpg" alt="" style="margin-top: 10vw" />
    <div class="ziti">
      <h2></h2>
      <h2>选择美墅进口整装,</h2>
      <h2>是一种什么样的体验？</h2>
      <img
        src="/img/Snipaste_2022-09-13_20-10-50.png"
        style="width: 10%; margin: auto"
      />
    </div>
    <!-- 图片 -->
    <div>
      <img src="/img/phone_3.jpg" alt="" />
    </div>
    <div>
      <img src="/img/phone_4.jpg" alt="" style="margin: 0" />
    </div>
    <div>
      <img src="/img/phone_5.jpg" alt="" />
    </div>
    <div>
      <img src="/img/phone_6.jpg" alt="" />
    </div>
    <div>
      <img src="/img/phone_7.jpg" alt="" />
    </div>
    <div>
      <img src="/img/phone_8.jpg" alt="" />
    </div>
    <div class="anli">
      <h2>精美案例</h2>
    </div>
    <!-- 轮播图 -->
    <mt-swipe style="height: 155vw" :auto="2000">
      <mt-swipe-item>
        <img src="/img/-1024518252_-1257175312_-1610581928.jpg" alt="" />
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="/img/-511239002_1281632133_1406277930.jpg" alt="" />
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="/img/-794298657_61681611_-1681164174.jpg" alt="" />
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="/img/1018698529_1002605228_-1239391120.jpg" alt="" />
      </mt-swipe-item>
    </mt-swipe>
    <!-- 尾部 -->
    <div id="footer">
      <div class="foot">
        <span  @click="goHome">首页</span>
        <span>APP下载</span>
        <span>关于我们</span>
      </div>
      <div class="foota">
        <span>美墅科技（成都）有限公司</span>
      <span>蜀ICP备12012345号-13</span>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goHome(){
      this.$router.push("/");
    },
  },
};
</script>

<style lang="scss" scoped>
*{
  margin: 0;
  padding: 0;
}
img {
  width: 100%;
  display: block;
}
::v-deep .mint-header {
  background-color: #fff;
  color: #000;
  font-size: 18px;
  height: 50px;
  padding: 12px;
}
::v-deep .mint-header i {
  font-size: 20px;
}
.ziti h2 {
  font-size: 21px;
  font-style: italic;
  height: 30px;
  font-family: "幼圆";
  color: rgb(223, 108, 52);
  text-align: center;
}
.anli h2 {
  font-size: 21px;
  font-style: italic;
  height: 30px;
  font-family: "幼圆";
  text-align: center;
  margin-bottom: 10px;
}
::v-deep .mint-swipe-indicators {
  bottom: 6vw;
}
#footer{
  border-top:1px solid #eee;
  padding: 10px 0;
}
#footer .foot{
  display: flex;
  justify-content: space-around;
  padding: 10px;
}
#footer .foota{
  display: flex;
  flex-direction: column;
  text-align: center;
}
</style>