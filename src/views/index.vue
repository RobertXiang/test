<template>
  <div>
    <!-- 头部导航 -->
    <van-nav-bar title="美墅装修" left-text="北京" />
    <!-- 一楼轮播 -->
    <van-swipe
      class="my-swipe"
      :autoplay="3000"
      indicator-color="white"
      duration="1500"
    >
      <!-- 跳转报价 -->
      <van-swipe-item @click="goQuote">
        <img
          src="https://ikj-public.oss-cn-beijing.aliyuncs.com/market/249c8d5a/ce22c637/5187fcc4/ec445b2e/ZWU3MGJjMWIyNjMwMmJjNDY3ODY0ODMxODM4MDJhNjBfMjAyMi0wNi0yNFQxODo1NzoyNy44MzQ=.jpg"
          alt=""
          width="100%"
        />
      </van-swipe-item>
      <!-- 跳转设计师 -->
      <van-swipe-item @click="goDesignter">
        <img
          src="https://ikj-public.oss-cn-beijing.aliyuncs.com/market/249c8d5a/ce22c637/5187fcc4/ec445b2e/Teerr2Jhbm5lcu-8mjY5MF8yNDVfMjAyMi0wOC0xOFQxNjoyNjozOC4zODA=.png"
          alt=""
          width="100%"
        />
      </van-swipe-item>
      <!-- 跳转商场 -->
      <van-swipe-item @click="goStore">
        <img
          src="https://ikj-public.oss-cn-beijing.aliyuncs.com/market/249c8d5a/ce22c637/5187fcc4/ec445b2e/NjAzOWZhZjAtNzhjOC00NDUwLWFmN2ItZjhjMDVjNTVjYWI0XzIwMjItMDYtMjdUMTY6MDI6MjIuMjg0.png"
          alt=""
          width="100%"
        />
      </van-swipe-item>
    </van-swipe>
    <!-- 二楼功能列表 -->
    <van-grid>
      <!-- 跳转十秒报价 -->
      <van-grid-item
        @click="goQuote"
        icon="https://ikj-storage-front-prod.oss-cn-beijing.aliyuncs.com/app/html-m/sy/site.png"
        text="10秒报价"
      />
      <!-- 跳转0元设计 -->
      <van-grid-item
        @click="goDesign"
        icon="https://ikj-storage-front-prod.oss-cn-beijing.aliyuncs.com/app/html-m/sy/devise.png"
        text="0元设计"
      />
      <!-- 跳转装修案列 -->
      <van-grid-item
        @click="goWorks"
        icon="https://ikj-storage-front-prod.oss-cn-beijing.aliyuncs.com/app/html-m/sy/site.png"
        text="装修案列"
      />
      <van-grid-item
        @click="goStore"
        icon="https://ikj-storage-front-prod.oss-cn-beijing.aliyuncs.com/app/html-m/sy/stores.png"
        text="空间商场"
      />
    </van-grid>
    <!-- 整装案列 -->
    <div class="show">
      <div class="setmeal">整装套餐</div>
      <div class="">
        <div class="gallery">线上展厅</div>
        <div class="floor">家装新体验</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    // 头部导航条
    onClickLeft() {
      Toast('返回')
    },
    onClickRight() {
      Toast('按钮')
    },
  },
  /*轮播和一楼跳转 */
  // 编程式跳转
  // 调至报价
  goQuote() {
    this.$router.push('')
  },
  // 跳到设计师
  goDesignter() {
    this.$router.push('')
  },
  // 调至商城
  goStore() {
    this.$router.push('')
  },
  // 调至设计报价
  goDesign() {
    this.$router.push('')
  },
  // 调至装修案列
  goWorks() {
    this.$router.push('')
  },
}
</script>

<style lang="scss" scoped>
// 清零
* {
  margin: 0;
  padding: 0;
}
// 轮播
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
}
div.van-swipe-item {
  width: 100%;
  height: 147px;
}
// 三楼功能
</style>
