<template>
  <!-- 我的订单 -->
  <div class="order-form">
    <!-- 头部 -->
    <van-nav-bar
      title="我的订单"
      left-text
      left-arrow
      @click-left="goIndex()"
    />

    <!-- 导航栏 -->
    <van-tabs v-model="active">
      <van-tab title="待付款"></van-tab>
      <van-tab title="待收货"></van-tab>
      <van-tab title="售后/退款"></van-tab>
    </van-tabs>
    <!-- 内容 -->
    <router-view />
    <div class="mr" v-if="data">
      <div v-if="active == 1" id="yqy" class="ordlist_body">
        <div class="ordlist_body_img fl">
          <img
            src="https://a.vpimg4.com/upload/merchandise/pdcpos/1100001789/2022/0510/92/9f308229-3b41-4e11-bb83-080b18904dd9.jpg"
          />
          <div class="ordlist_body_font fl">
            <ul>
              <li class="olb_font_font fl over2">
                开关插座面板家用套餐86型墙壁房屋装修暗装五孔防水盒5孔五孔
              </li>
              <li style="margin-top: 3vh" class="olb_money_money fl">
                <label>实付：￥175</label>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div v-else-if="active == 0" id="dfk" class="ordlist_body">
        <div
          v-for="its in data.data"
          :key="its.orderid"
          class="ordlist_body_img fl card"
        >
          <img :src="its.propic" />
          <div class="text">
            <ul>
              <li class="title">{{ its.protitle }}</li>
              <li class="money">单价￥{{ its.price }}</li>
              <li><van-button icon="delete" size="small" type="danger" @click="Del(its.orderid)"></van-button></li>
              <li class="he">
                <span><van-icon name="add-o" />{{ its.num }}</span>
                <span class="xiao">小计：￥{{ its.num * its.price }}</span>
              </li>
            </ul>
          </div>
          <div>
            <!-- 提交订单 -->
            <van-cell @click="showPopup">
              <van-submit-bar
              :price="total"
              button-text="提交订单"
              @submit="onSubmit"
            />
            </van-cell>
            <van-popup v-model="show" style="width:60vw;height:60vw;">
              <span>扫码支付</span>
              <img src="/zhifu.jpg" alt="" style="width:50vw;height:50vw">
            </van-popup>
          </div>
        </div>
      </div>
      <div v-else class="box">
        <img id="m1" src="@/assets/icon/mr.png" alt />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [], //商品订单列表
      active: 0,  //高亮的id
      num: 1,   //商品数量
      show: false,
    };
  },
  computed: {
    //计算总价
    total() {
      console.log(this.data);
      if (this.data.data) {
        var total = 0;
        for (var i of this.data.data) {
          total += i.price * i.num * 100;
        }
        return total;
      }
    },
  },
  mounted() {
    this.getData();
  },
  methods: {
    // 弹出层
      showPopup() {
      this.show = true;
    },
    // 提交订单
    onSubmit() {
      this.show = true;
    },
    // 点击跳转到空间商城
    goIndex() {
      this.$router.push("/spacemall");
    },
    // 订单数据显示
    getData() {
      let orders = this.$route.query;
      let url = `http://127.0.0.1:3000/pro_order/allorder`;
      this.axios.get(url).then((res) => {
        console.log(res);
        this.data = res.data;
      });
    },
    // 删除按钮功能
    Del(orderid) {
      let url = `http://127.0.0.1:3000/pro_order/delete/${orderid}`;
      this.axios.get(url).then((res) => {
        this.getData();
        if (res.data.code == 200) {
          this.getData();
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
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
  width: 94vw;
  padding: 3vw;
  background-color: rgba(249, 249, 249);
  margin-top: 1vw;
}

.mr .ordlist_body_img {
  background-color: white;
  border-radius: 5px;
  display: flex;
  position: relative;
  flex-wrap: wrap;
  height: 10vh;
  margin: 5vw 2vw;
  padding: 5vw 2vw;
}
.mr .ordlist_body_img img {
  width: 18vw;
  height: 18vw;
  overflow: hidden;
  border-radius: 5px;
}

.ordlist_body_font {
  margin-left: 2vw;
  width: 50vw;
  height: 10vw;
}
.olb_font_font {
  width: 50vw;
  height: 10vw;
  line-height: 5vw;
  font-size: 3.6vw;
  color: black;
}
ul li:last-child {
  margin: 10px 0;
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
  position: absolute;
  left: 50%;
  bottom: 20%;
  width: 6vw;
  height: 5vw;
  line-height: 5vw;
  text-align: right;
  font-size: 4vw;
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
/* 订单样式设计 */
.ordlist_body .card{
  display: flex;
  justify-content: space-between;
  // background: #ff452c;
  .text{
    width: 65%;
    >ul{
      position: relative;
      .title{
        font-size: 16px;

        display: -webkit-box;
        overflow: hidden;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
      }
      >li>button{
        position: absolute;
        right: -20px;
        bottom: 20px;
        border-radius: 5px;
      }
     >.he{
      display: flex;
      justify-content: space-evenly;
      .xiao{
        font-size: 18px;
        color: #ff452c;
      }
     }
    }
  }
}
/* 遮罩层内容样式 */
.van-popup{
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
}
</style>
