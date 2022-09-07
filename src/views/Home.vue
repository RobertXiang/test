<template>
  <div class="home">
    <!-- 导航栏 -->
    <mt-header title="套餐详情" fixed>
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>

    <!-- 内容 -->
    <div class="content">
      <!-- 轮播图:home -->
      <mt-swipe v-if="value == 0" :auto="3000" style="margin-top: 48px">
        <mt-swipe-item>
          <img src="/jpg/home1.jpg" alt="" />
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="/jpg/home2.jpg" alt="" />
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="/jpg/home3.jpg" alt="" />
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="/jpg/home4.jpg" alt="" />
        </mt-swipe-item>
      </mt-swipe>
      <!-- 轮播图:Magic -->
      <mt-swipe v-else :auto="3000" style="margin-top: 48px">
        <mt-swipe-item>
          <img src="/jpg/magic1.jpg" alt="" />
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="/jpg/magic2.jpg" alt="" />
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="/jpg/magic3.jpg" alt="" />
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="/jpg/magic4.jpg" alt="" />
        </mt-swipe-item>
      </mt-swipe>

      <div class="cc">
        <!-- 1楼 -->
        <div class="c1">
          <div class="title">
            <van-dropdown-menu>
              <van-dropdown-item v-model="value" :options="option" />
            </van-dropdown-menu>
          </div>
          <div class="price" style="font-size: 26px; line-height: 43px">
            <span style="font-size: 12px">￥</span>
            <span v-if="value == 0" style="font-weight: 600">119900</span>
            <span v-else style="font-weight: 600; line-height: 43px"
              >95900</span
            >
            <span style="font-size: 12px">元</span>
          </div>
        </div>

        <!-- 2楼 -->
        <div class="c2" style="color: gray; font-size: 14px">
          <div v-if="value == 0" class="leftc2">
            颜值过人·舒适过分·最优配置·细节控
          </div>
          <div v-else class="leftc2">超值性价比·功能主义·面面俱到</div>
          <div class="rightc2" style="font-size: 12px">以新房80m²为例</div>
        </div>

        <!-- 3楼 -->
        <div class="c3">
          <div class="leftc3">
            <van-icon name="location" />
            查看服务区域
          </div>
          <div class="rightc3" style="font-size: 12px">
            <van-icon name="arrow" />
          </div>
        </div>

        <!-- 4楼 -->
        <div class="c4">
          <van-tabs v-model="active">
            <van-tab title="老房产品"></van-tab>
            <van-tab title="新房产品"></van-tab>
          </van-tabs>
        </div>

        <!-- 5楼 -->
        <div class="c5" v-if="active == 0">
          <div class="imgc5">
            <img src="/jpg/five1.png" alt="" />
          </div>
          <div class="topc5">
            <ul>
              <li>
                <van-icon name="success" />
                <span>包检测排雷</span>
              </li>
              <li>
                <van-icon name="success" />
                <span>包拆除修复</span>
              </li>
              <li>
                <van-icon name="success" />
                <span>包水电改造</span>
              </li>
              <li>
                <van-icon name="success" />
                <span>包上门量房</span>
              </li>
              <li>
                <van-icon name="success" />
                <span>包基础施工</span>
              </li>
            </ul>
            <ul>
              <li>
                <van-icon name="success" />
                <span>包全屋建材</span>
              </li>
              <li>
                <van-icon name="success" />
                <span>包整体厨卫</span>
              </li>
              <li>
                <van-icon name="success" />
                <span>包定制家具</span>
              </li>
              <li>
                <van-icon name="success" />
                <span>包全程托管</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- 5.1楼 -->
        <div class="c5" v-else>
          <div class="imgc5">
            <img src="/jpg/five2.png" alt="" />
          </div>
          <div class="topc5">
            <ul>
              <li>
                <van-icon name="success" />
                <span>包水电改造</span>
              </li>
              <li>
                <van-icon name="success" />
                <span>包上门量房</span>
              </li>
              <li>
                <van-icon name="success" />
                <span>包基础施工</span>
              </li>
              <li>
                <van-icon name="success" />
                <span>包全屋建材</span>
              </li>
              <li>
                <van-icon name="success" />
                <span>包整体厨卫</span>
              </li>
            </ul>
            <ul>
              <li>
                <van-icon name="success" />
                <span>包定制家具</span>
              </li>
              <li>
                <van-icon name="success" />
                <span>包全程托管</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- 脚部 -->
    <div class="footer">
      <div class="left">
        <van-icon name="phone" />
        <span style="display: block">400直拨</span>
      </div>
      <van-button plain type="primary">免费咨询</van-button>
      <van-button type="primary">算算我家报价</van-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      show: false,
      // 切换Home标题
      value: 0,
      option: [
        { text: "Home", value: 0 },
        { text: "Magic", value: 1 },
      ],
    };
  },
  methods: {
    showPopup() {
      this.show = true;
    },
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  height: 100%;
}
/* 导航栏 */
.mint-header {
  background-color: white;
  color: black;
  font-size: 18px;
  padding: 8px 0;
}
.mintui {
  font-size: 20px;
}

/* 轮播图 */
.mint-swipe {
  width: 100vw;
  height: 36vh;
}
.mint-swipe-items-wrap img {
  width: 100vw;
  height: 100%;
}
.mint-swipe-indicator {
  margin: 5px 3px;
}

/* 内容 */
.content {
  position: relative;
  padding-top: 3px;
}
.mint-swipe {
  position: absolute;
}
.cc {
  position: absolute;
  left: 0;
  top: 41vh;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  background-color: white;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 20px 10px;
}

/* 1楼 */
/* 2楼 */
/* 3楼 */
.c1,
.c2,
.c3,
.c4 {
  display: flex;
  justify-content: space-between;
}
.c3 {
  margin-top: 30px;
  padding-bottom: 20px;
  color: gray;
  font-size: 14px;
  border-bottom: 1px solid gainsboro;
}
.c1 .van-dropdown-menu__title {
  font-size: 22px;
}
.c1 .van-dropdown-menu__bar {
  box-shadow: 0 0 0 white;
}

/* 4楼 */
.c4 {
  margin: 20px 0;
  font-size: 14px;
  color: gray;
}
.van-tab {
  font-size: 16px;
  padding: 0;
}
.van-tabs--line .van-tabs__wrap {
  width: 180px;
}
.van-tabs__line {
  background-color: orange;
}

/* 5楼 */
.c5 {
  position: relative;
}
.c5 img {
  width: 100%;
  margin-bottom: 30px;
}
.c5 .imgc5 {
  position: absolute;
}
.c5 .topc5 {
  position: absolute;
  display: flex;
  padding: 15px 10px;
  color: gray;
}
.c5 .topc5 ul li {
  font-size: 14px;
  margin: 8px;
}

/* 脚部 */
.footer {
  margin-top: 105vh;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid gainsboro;
}
.footer .left {
  text-align: center;
  margin-left: 10px;
}
.footer span {
  font-size: 12px;
}
.footer i {
  font-size: 22px;
}

.footer .van-button--primary {
  border-color: black;
  border-radius: 4px;
  padding: 0 35px;
}
.van-button--plain.van-button--primary {
  color: black;
}
.van-button--primary:last-child {
  background-color: black;
}
</style>