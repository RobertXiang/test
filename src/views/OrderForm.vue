<template>
  <!-- 我的订单 -->
  <div class="order-form">
    <!-- 头部 -->
    <van-nav-bar title="我的订单" left-text="" left-arrow />

    <!-- 导航栏 -->
    <van-tabs v-model="active">
      <van-tab title="待付款"></van-tab>
      <van-tab title="已签约"></van-tab>
      <van-tab title="售后/退款"></van-tab>
    </van-tabs>

    <!-- 内容 -->
    <router-view />
    <div class="mr">
      <div v-if="active == 1" id="yqy" class="ordlist_body">
        <div class="ordlist_body_img fl">
          <img src="../assets/icon/bx.png" />
        </div>
        <div class="ordlist_body_font fl">
          <ul>
            <li class="olb_font_font fl over2">
              仓鼠笼子送礼包47基础笼亚克力金丝熊小别墅小仓鼠大双层齐全窝包邮
            </li>
            <li class="olb_money_money fl">实付：<label>￥9.9</label></li>
          </ul>
          <div class="clear"></div>
        </div>
        <div class="ordlist_body_money fl">
          <div class="olb_font_money fr">￥9.9</div>
          <div style="color: gray" class="olb_font_money fr">x1</div>
        </div>
      </div>
      <div v-else-if="active == 0" id="dfk" class="ordlist_body">
        <div class="ordlist_body_img fl">
          <img src="../assets/icon/bx.png" />
        </div>
        <div class="ordlist_body_font fl">
          <ul>
            <li class="olb_font_font fl over2">
              仓鼠笼子送礼包47基础笼亚克力金丝熊小别墅小仓鼠大双层齐全窝包邮
            </li>
            <li>
              <button @click="n--">-</button>
              <span>1</span>
              <button @click="n++">+</button>
            </li>
          </ul>
        </div>
        <div class="ordlist_body_money fl">
          <div class="olb_font_money fr">￥9.9</div>
        </div>
      </div>
      <img v-else id="m1" src="@/assets/icon/mr.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
    };
  },
};
</script>

<style>
body {
  background-color: rgba(249, 249, 249);
  color: gray;
}
/*******头部 *******/
.van-nav-bar__content {
  padding-top: 4vh;
}
.van-nav-bar .van-icon {
  font-size: 18px;
  color: gray;
}
.van-nav-bar__title {
  font-weight: 600;
  color: rgba(75, 67, 94);
  font-size: 1.05rem;
}
.van-nav-bar__left {
  padding-top: 4vh;
}

/* 导航栏 */
.van-tab {
  font-size: 18px;
  color: #bbb;
}
.van-tab--active {
  color: orange;
  border-bottom: 3px solid orange;
}
.van-tabs__line {
  background-color: orange;
}

/******* 内容 *******/
.mr #m1 {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}

.ordlist_body {
  display: flex;
  width: 94vw;
  padding: 3vw;
  background-color: white;
  margin-top: 1vw;
}
.mr .ordlist_body_img img {
  width: 18vw;
  height: 18vw;
  overflow: hidden;
}
.ordlist_body_font {
  width: 74vw;
  height: 10vw;
  margin-left: 2vw;
}
.olb_font_font {
  width: 60vw;
  height: 10vw;
  line-height: 5vw;
  font-size: 3.6vw;
  color: black;
}
.ordlist_body_font li:last-child {
}
.ordlist_body_font li button {
  background-color: orange;
  border: none;
  padding: 3px 8px;
  margin: 10px;
  border-radius: 5px;
}
.ordlist_body_font li button:first-child {
  margin-left: 0;
}
.olb_font_money {
  width: 12vw;
  height: 5vw;
  line-height: 5vw;
  text-align: right;
  font-size: 3.6vw;
  font-weight: 600;
  color: black;
}
.odl_font_num {
  width: 12vw;
  height: 10vw;
  line-height: 10vw;
  text-align: right;
  font-size: 4vw;
  color: #999999;
  font-weight: 600;
}
.ordlist_body_money {
  width: 74vw;
  margin-left: 2vw;
}
.olb_money_money {
  height: 5vw;
  font-size: 3vw;
  margin-top: 3vw;
  color: black;
}
.olb_money_money label {
  font-size: 4vw;
}
.olb_money_block {
  width: 18vw;
  height: 6vw;
  line-height: 6vw;
  border-radius: 1vw;
  background-color: #ff452c;
  margin-top: 2vw;
  font-size: 2.8vw;
  color: white;
  text-align: center;
}
</style>
