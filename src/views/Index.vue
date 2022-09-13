<template>
  <div class="container">
    <!-- 头部导航 -->
    <van-nav-bar title="美墅装修" left-text="北京" />
    <!-- 一楼轮播 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" duration="1500">
      <!-- 跳转报价 -->
      <van-swipe-item @click="">
        <img src="https://ikj-public.oss-cn-beijing.aliyuncs.com/market/249c8d5a/ce22c637/5187fcc4/ec445b2e/ZWU3MGJjMWIyNjMwMmJjNDY3ODY0ODMxODM4MDJhNjBfMjAyMi0wNi0yNFQxODo1NzoyNy44MzQ=.jpg" alt="" width="100%" />
      </van-swipe-item>
      <!-- 跳转设计师 -->
      <van-swipe-item @click="">
        <img src="https://ikj-public.oss-cn-beijing.aliyuncs.com/market/249c8d5a/ce22c637/5187fcc4/ec445b2e/Teerr2Jhbm5lcu-8mjY5MF8yNDVfMjAyMi0wOC0xOFQxNjoyNjozOC4zODA=.png" alt="" width="100%" />
      </van-swipe-item>
      <!-- 跳转商场 -->
      <van-swipe-item @click="">
        <img src="https://ikj-public.oss-cn-beijing.aliyuncs.com/market/249c8d5a/ce22c637/5187fcc4/ec445b2e/NjAzOWZhZjAtNzhjOC00NDUwLWFmN2ItZjhjMDVjNTVjYWI0XzIwMjItMDYtMjdUMTY6MDI6MjIuMjg0.png" alt="" width="100%" />
      </van-swipe-item>
    </van-swipe>
    <!-- 二楼功能列表 -->
    <van-grid>
      <!-- 跳转十秒报价 -->
      <van-grid-item @click="" icon="https://ikj-storage-front-prod.oss-cn-beijing.aliyuncs.com/app/html-m/sy/site.png" text="10秒报价" />
      <!-- 跳转0元设计 -->
      <van-grid-item @click="" to="navdesign" icon="https://ikj-storage-front-prod.oss-cn-beijing.aliyuncs.com/app/html-m/sy/devise.png" text="0元设计" />
      <!-- 跳转装修案列 -->
      <van-grid-item @click="" icon="https://ikj-storage-front-prod.oss-cn-beijing.aliyuncs.com/app/html-m/sy/site.png" text="装修案列" />
      <van-grid-item @click="" icon="https://ikj-storage-front-prod.oss-cn-beijing.aliyuncs.com/app/html-m/sy/stores.png" text="空间商场" />
    </van-grid>
    <!-- 整装案列 -->
    <div class="case">
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
              </h4>
              <p>一站式省心家装</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 装修报价 -->
    <div class="price">
      <van-row class="quote">
        <van-row type="flex">
          <van-col span="7" style="font-size:22px;font-weight:550;">装修报价</van-col>
          <van-col span="16" style="font-size:14px;margin-top:6px;">根据房屋信息&nbsp;3秒给出精准报价信息</van-col>
        </van-row>
        <div class="select">
          <div ref="select" :data-s="classify" v-for="(classify,index) in classifys" :class="{active:now==index}" @click="classQ(index,$event)">{{classify}}</div>
        </div>
        <div class="select2">
          <div>
            <!-- 弹出层 -->
            <van-cell @click="showPopup" style="width: 95px;height:40px;
            font-size:15px;padding: 0;text-align:center;line-height:40px;margin-left:4px;background-color:#eeeeee;">
              <span>{{value}}</span>
              <van-icon name="arrow-down" @click="showPicker = true" />
            </van-cell>
            <!-- 弹出内容 -->
            <van-popup v-model="show" round position="bottom" :style="{ height: '30%' }">
              <van-picker title="选择店铺" show-toolbar :columns="columns" @confirm="onConfirm" @cancel="onCancel" />
            </van-popup>
          </div>
          <div>
            <input type="number" placeholder="房屋面积" width="20px" oninput="if(value.length>4)value=value.slice(0,3)" v-model="square"><span>m²</span>
          </div>
          <div @click="inputPrice">获取报价</div>
        </div>
      </van-row>
    </div>
    <!-- 推荐案列 -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      // 地区
      columns: ['重庆体验店', '成都体验店'],
      //弹出层
      show: false,
      //类别：新房，老房
      classifys: ['新房', '老房'],
      now: 0,
      //地区的值
      value: '北京体验店',
      //装修单价
      price: 5000,
      //输入框输入的平方
      square: null,
    }
  },
  methods: {

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
      // console.log(`当前值：${value}, 当前索引：${index}`);
      this.value = value
      this.show = false;
    },
    onCancel () {
      console.log(`取消`);
      this.show = false;
    },
    //弹出层
    showPopup () {
      this.show = true;
    },
    // 报价
    inputPrice () {
      console.log(this.square);
      // 如果平方为空就结束调用
      if (this.square == null) {
        console.log('面积不能为空');
        //弹窗
        this.$dialog.alert({
          message: `输入的价格不能为空`,
          confirmButtonText: '我知道了',
          confirmButtonColor: '#000',
        })
        return this.square;
      }
      //如果平方不为空，就计算价格
      if (this.square != null) {
        let total = this.square * this.price
        console.log('总价为：' + total)
        this.$dialog.alert({
          message: `您的报价为：\n ￥${total}`,
          confirmButtonText: '我知道了',
          confirmButtonColor: '#000'
        })
      }

    },
    classQ(index,e){
      this.now = index
      console.log(e.target.dataset.s);
     

    }
    





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
  font-size: 20px;
  line-height: 150px;
  text-align: center;
}
div.van-swipe-item {
  width: 100%;
  height: 147px;
}

// 三楼功能
.case {
  background-color: #f6f6f6;
}
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
//新房、老房选择
.price {
  // background-color: red;
  margin-top: 20px;
}
//装修报价
.quote {
  width: 89.2%;
  margin: auto;
  text-align: left;
  > .select {
    display: flex;
    margin-top: 5px;
    // border: 1px solid red;
    > div:first-child {
      margin-right: 24px;
    }
    > div {
      border: 1px solid rgba(85, 83, 85, 0.467);
      width: 60%;
      height: 45px;
      margin-top: 10px;
      border-radius: 5px;
      text-align: center;
      line-height: 45px;
    }
    div.active {
      border-color: #f6721e;
    }
  }
  .select2 {
    margin-top: 5px;
    display: flex;
    > div:first-child {
      margin-right: 15px;
      text-align: right;
      background-color: #eeeeee;
      line-height: 45px;
    }
    > div:nth-child(2) {
      margin-right: 15px;
      background-color: #eeeeee;
    }
    > div:nth-child(3) {
      color: white;
      background-color: #3e3e3e;
      text-align: center;
      line-height: 45px;
    }
    > div {
      border-radius: 5px;
      height: 45px;
      margin-top: 10px;
      // border: 1px solid red;
      width: 38%;
      > input {
        padding: 0;
        margin: 0;
        border: none;
        width: 80px;
        text-align: center;
        line-height: 45px;
        background-color: #eeeeee;
      }
    }
  }
}
</style>
