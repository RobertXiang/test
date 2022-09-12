<template>
  <div class="container">
    <!-- 头部导航 -->
    <van-nav-bar title="美墅装修" left-text="北京" />
    <!-- 一楼轮播 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" duration="1500">
      <!-- 跳转报价 -->
      <van-swipe-item @click="1">
        <img src="https://ikj-public.oss-cn-beijing.aliyuncs.com/market/249c8d5a/ce22c637/5187fcc4/ec445b2e/ZWU3MGJjMWIyNjMwMmJjNDY3ODY0ODMxODM4MDJhNjBfMjAyMi0wNi0yNFQxODo1NzoyNy44MzQ=.jpg" alt="" width="100%" />
      </van-swipe-item>
      <!-- 跳转设计师 -->
      <van-swipe-item @click="1">
        <img src="https://ikj-public.oss-cn-beijing.aliyuncs.com/market/249c8d5a/ce22c637/5187fcc4/ec445b2e/Teerr2Jhbm5lcu-8mjY5MF8yNDVfMjAyMi0wOC0xOFQxNjoyNjozOC4zODA=.png" alt="" width="100%" />
      </van-swipe-item>
      <!-- 跳转商场 -->
      <van-swipe-item @click="1">
        <img src="https://ikj-public.oss-cn-beijing.aliyuncs.com/market/249c8d5a/ce22c637/5187fcc4/ec445b2e/NjAzOWZhZjAtNzhjOC00NDUwLWFmN2ItZjhjMDVjNTVjYWI0XzIwMjItMDYtMjdUMTY6MDI6MjIuMjg0.png" alt="" width="100%" />
      </van-swipe-item>
    </van-swipe>
    <!-- 二楼功能列表 -->
    <van-grid>
      <!-- 跳转十秒报价 -->
      <van-grid-item @click="1" icon="https://ikj-storage-front-prod.oss-cn-beijing.aliyuncs.com/app/html-m/sy/site.png" text="10秒报价" />
      <!-- 跳转0元设计 -->
      <van-grid-item to="navdesign" icon="https://ikj-storage-front-prod.oss-cn-beijing.aliyuncs.com/app/html-m/sy/devise.png" text="0元设计" />
      <!-- 跳转装修案列 -->
      <van-grid-item @click="1" icon="https://ikj-storage-front-prod.oss-cn-beijing.aliyuncs.com/app/html-m/sy/site.png" text="装修案列" />
      <van-grid-item @click="1" icon="https://ikj-storage-front-prod.oss-cn-beijing.aliyuncs.com/app/html-m/sy/stores.png" text="空间商场" />
    </van-grid>
    <!-- 整装案列 -->
    <div class="three">
      <div class="setmeal">
        <div>
          <h4>整装套餐</h4>
          <p>全一线大牌&nbsp;&nbsp;一站搞定</p>
        </div>
      </div>
      <div class="three-one">
        <div class="gallery">
          <div class="text">
            <h4>线上展厅</h4>
            <p>12+life&nbsp;&nbsp;style</p>
          </div>
        </div>
        <div class="floor">
          <div class="text">
            <h4>家装新体验</h4>
            
            <p>一站式省心家装</p>
          </div>
        </div>
      </div>
    </div>

    <!-- 装修报价 -->
    <van-row class="quote">
      <van-row type="flex">
        <van-col span="6" style="font-size:20px;font-weight:12px;font-weight:bold;">装修报价</van-col>
        <van-col span="18" offset="1" style="margin-top:5px;font-size:15px;">根据房屋信息 3秒给出精准报价清单</van-col>
      </van-row>
      <div class="select">
        <div>新房</div>
        <div>老房</div>
      </div>
      <div class="select2">
        <div>
          <van-cell is-link @click="showPopup">北京体验店</van-cell>
          <van-popup v-model="show" position="bottom" :style="{ height: '30%' }">
            <van-picker title="" show-toolbar :columns="columns" @confirm="onConfirm" @cancel="onCancel" @change="onChange" />
          </van-popup>
        </div>
        <div><input type="text" placeholder="房屋面积" width="20px"><span>m²</span></div>
        <div>获取报价</div>
      </div>

    </van-row>

  </div>
</template>

<script>
export default {
  data () {
    return {
      // 地区
      columns: ['北京体验店', '成都体验店'],
      //弹出层
      show: false,
    }
  },
  methods: {
    // 头部导航条
    onClickLeft () {
      Toast('返回')
    },
    onClickRight () {
      Toast('按钮')
    },
    /*轮播和一楼跳转 */
    // 编程式跳转
    // 调至报价
    goQuote () {
      this.$router.push('')
    },
    // 跳到设计师
    goDesignter () {
      this.$router.push('')
    },
    // 调至商城
    goStore () {
      this.$router.push('')
    },
    // 调至设计报价
    goDesign () {
      this.$router.push('')
    },
    // 调至装修案列
    goWorks () {
      this.$router.push('')
    },
    //地区
    onConfirm (value, index) {
      Toast(`当前值：${value}, 当前索引：${index}`);
    },
    onChange (picker, value, index) {
      Toast(`当前值：${value}, 当前索引：${index}`);
    },
    onCancel () {
      Toast('取消');
    },
    //弹出层
    showPopup() {
      this.show = true;
    },
  },
}
</script>

<style lang="scss" scoped>
// 清零
* {
  margin: 0;
  padding: 0;
}
body {
  background-color: #f5f5f5;
}
// 轮播
.my-swipe .van-swipe-item {
  font-size: 20px;
  line-height: 150px;
  text-align: center;
}
div.van-swipe-item {
  width: 100%;
  height: 147px;
}

// 三楼功能
.three {
  height: 240px;
  width: 89.2%;
  margin: auto;
  display: flex;
  // border: 1px solid red;
  // 整装套餐
  .setmeal {
    border-radius: 5px;
    width: 45%;
    height: 200px;
    margin: 20px 0px;
    background: url("https://ikj-storage-front-prod.oss-cn-beijing.aliyuncs.com/app/html-m/sy/meal.png")
      no-repeat;
    background-size: cover;
    > div {
      color: #f5f5f5;
      text-align: left;
      margin: 15px 0 0 12px;
      > p {
        font-size: 12px;
      }
    }
  }
  // 线上展厅与家装体验
  // 线上展厅
  .three-one {
    width: 50%;
    margin: 20px 0px 0px 20px;
    // border: 1px solid red;
    height: 200px;
    .gallery {
      border-radius: 5px;
      height: 90px;
      margin-bottom: 18px;
      background: url(https://ikj-storage-front-prod.oss-cn-beijing.aliyuncs.com/app/html-m/sy/vr.png)
        no-repeat;
      background-size: cover;
      position: relative;
      > div {
        // border: 1px solid red;
        color: #f5f5f5;
        text-align: left;
        position: absolute;
        top: 15px;
        left: 12px;
        > p {
          font-size: 12px;
        }
      }
    }
    // 家装
    .floor {
      border-radius: 5px;
      height: 90px;
      // border: 1px solid red;
      background: url(https://ikj-storage-front-prod.oss-cn-beijing.aliyuncs.com/app/html-m/sy/tiyan.png)
        no-repeat;
      background-size: cover;
      position: relative;
      > div {
        // border: 1px solid red;

        text-align: left;
        position: absolute;
        top: 15px;
        left: 12px;
        > p {
          font-size: 12px;
        }
      }
    }
  }
}
.quote {
  border: 1px solid red;
  height: 500px;
  width: 89.2%;
  margin: auto;
  text-align: left;
  > .select {
    // border: 1px solid red;
    display: flex;
    > div:first-child {
      margin-right: 24px;
    }
    > div {
      border: 1px solid rgba(85, 83, 85, 0.467);
      width: 60%;
      height: 40px;
      margin-top: 10px;
      border-radius: 5px;
      text-align: center;
      line-height: 40px;
    }
  }
  .select2 {
    display: flex;
    > div:first-child {
      margin-right: 15px;
    }
    > div:nth-child(2) {
      margin-right: 15px;
    }
    > div {
      height: 40px;
      margin-top: 10px;
      border: 1px solid red;
      justify-self: start;
      width: 30%;
      text-align: center;
      line-height: 40px;
      > input {
        padding: 0;
        margin: 0;
        border: none;
        width: 80px;
        text-align: center;
        line-height: 40px;
      }
    }
  }
}
</style>
