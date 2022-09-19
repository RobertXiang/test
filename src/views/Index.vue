<template>
  <div class="container">
    <!-- 头部导航 -->
    <van-nav-bar title="美墅装修" />
    <!-- 一楼轮播 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" duration="1500">
      <!-- 跳转设计师 -->
      <van-swipe-item @click="goDesigner">
        <img src="https://ikj-public.oss-cn-beijing.aliyuncs.com/market/249c8d5a/ce22c637/5187fcc4/ec445b2e/Teerr2Jhbm5lcu-8mjY5MF8yNDVfMjAyMi0wOC0xOFQxNjoyNjozOC4zODA=.png" alt="" width="400vm" />
      </van-swipe-item>
      <!-- 跳转0元设计 -->
      <van-swipe-item @click="goDesign">
        <img src="https://imgs.bzw315.com/upload/2017/4/13/636277026032137584.jpg?x-oss-process=image/resize,w_800/sharpen,100" alt="" width="400vm" />
      </van-swipe-item>

      <!-- 跳转关于我们 -->
      <van-swipe-item @click="goAbout">
        <img src="https://ikj-public.oss-cn-beijing.aliyuncs.com/market/249c8d5a/ce22c637/5187fcc4/ec445b2e/NjAzOWZhZjAtNzhjOC00NDUwLWFmN2ItZjhjMDVjNTVjYWI0XzIwMjItMDYtMjdUMTY6MDI6MjIuMjg0.png" alt="" width="400vm" />
      </van-swipe-item>
      <!-- 跳转十秒报价 -->
      <van-swipe-item @click="goQuote">
        <img src="https://imgs.bzw315.com/upload/2017/9/20/636414999875940870.jpg?x-oss-process=image/resize,w_800/sharpen,100" alt="" width="400vm" />
      </van-swipe-item>
    </van-swipe>
    <!-- 二楼功能列表 -->
    <van-grid>
      <!-- 跳转十秒报价 -->
      <van-grid-item to="price" icon="https://ikj-storage-front-prod.oss-cn-beijing.aliyuncs.com/app/html-m/sy/site.png" text="10秒报价" />
      <!-- 跳转0元设计 -->
      <van-grid-item to="navdesign" icon="https://ikj-storage-front-prod.oss-cn-beijing.aliyuncs.com/app/html-m/sy/devise.png" text="0元设计" />
      <!-- 跳转装修案列 -->
      <van-grid-item to="spacemall" icon="https://ikj-storage-front-prod.oss-cn-beijing.aliyuncs.com/app/html-m/sy/site.png" text="装修商城" />
      <van-grid-item to="about" icon="https://ikj-storage-front-prod.oss-cn-beijing.aliyuncs.com/app/html-m/sy/stores.png" text="关于我们" />
    </van-grid>
    <!-- 整装案列 -->
    <div class="case">
      <div class="three">
        <div class="setmeal" @click="goHome">
          <div>
            <h4>整装套餐</h4>
            <p>全一线大牌&nbsp;&nbsp;一站搞定</p>
          </div>
        </div>
        <div class="three-one">
          <div class="gallery" @click="goVR('http://statics.bzw315.com/720/v/7/view/index.html')">
            <div class="text">
              <h4>线上展厅</h4>
              <p>12+life&nbsp;&nbsp;style</p>
            </div>
          </div>
          <div class="floor" @click="goNewHome()">
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
          <div ref="select" :data-s="classify" v-for="(classify,index) in classifys" :class="{active:now==index}" @click="classCut(index,$event)">{{classify}}</div>
        </div>
        <!-- 计算价格 -->
        <div class="select2">
          <div>
            <!-- 弹出层 -->
            <van-cell @click="showPopup" style="width: 95px;height:40px;
            font-size:15px;padding: 0;text-align:center;line-height:40px;margin-left:4px;background-color:#eeeeee;margin-top:3px;">
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
    <div class="anlie">
      <van-col span="7" style="font-size:22px;font-weight:550;margin-top:20px;margin-left:20px;">优秀案列</van-col>
      <van-col span="10" style="font-size:14px;margin-top:27px;">业主装修精选案列推荐&nbsp;</van-col>
      <!-- 案列 -->
      <div class="recommend" v-if="data">
        <!-- 案列内容 -->
        <div class="content" v-for="item in data.data" @click="goXiangqing(item.anli_id)">
          <img :src="item.an_pic" alt="" width="175vm">
          <p>{{item.an_title}}</p>
          <div class="lanbel">
            <span>{{item.jushi}}</span>
            <span>{{item.biaojian11}}</span>
            <span>
              <van-icon name="eye-o" /><span>{{item.rensu}}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
    <!-- 尾部导航栏 -->
    <van-tabbar v-model="active" active-color="#ee0a24" inactive-color="#000">
      <van-tabbar-item icon="home-o" to="/" @click="goIndex">首页</van-tabbar-item>
      <van-tabbar-item icon="friends-o" to="designer">设计师</van-tabbar-item>
      <van-tabbar-item icon="orders-o" to="anli">案列</van-tabbar-item>
      <van-tabbar-item icon="contact" to="mine">我的</van-tabbar-item>
    </van-tabbar>
    <!-- 完 -->
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
      classifys: ['新房', '旧房'],
      now: 0,
      //地区的值
      value: '北京体验店',
      //输入框输入的平方
      square: null,
      //新房、老房、元素选择
      select: '新房',
      // 尾部导航切换
      active: 0,
      //  案列的数据
      data: null,
    }
  },
  mounted () {
    this.getData()
  },
  methods: {

    /*轮播和一楼跳转 */
    // 编程式跳转
    // 调至报价
    goQuote () {
      this.$router.push('price')
    },
    // 跳到设计师
    goDesigner () {
      this.$router.push('designer')
    },
    // 调至关于我们
    goAbout () {
      this.$router.push('about')
    },
    // 调至设计报价
    goDesign () {
      this.$router.push('navdesign')
    },
    // 跳转套餐
    goHome () {
      this.$router.push('home')
    },
    //跳转页面自动刷新
    goIndex () {
      this.$router.push('/')
      this.$router.go(0)
    },
    // 跳转外网VR
    goVR (url) {
      window.location.href = url
    },
    // 跳转家装新体验
    goNewHome () {
      this.$router.push('newhome')
    },
    //跳转案例
    goAnli () {
      this.$router.push("/anli");
    },
    //编程式跳转案列详情
    goXiangqing (index) {
      this.$router.push({
        path: "/indexdetail",
        query: { index },
      });
    },
    //地区
    onConfirm (value, index) {
      // console.log(`当前值：${value}, 当前索引：${index}`);
      this.value = value
      this.show = false;
    },
    // 地区关闭
    onCancel () {
      console.log(`取消`);
      this.show = false;
    },
    //弹出层
    showPopup () {
      this.show = true;
    },
    //样式切换和获取元素
    classCut (index, e) {
      this.now = index
      let select = e.target.dataset.s
      this.select = select
      console.log(this.select);
    },
    // 报价
    inputPrice () {
      console.log('选中的元素', this.select);
      // console.log(this.square);
      // 如果平方为空就结束调用

      if (this.square == null) {
        console.log('面积不能为空');
        //弹窗
        this.$dialog.alert({
          message: `输入的面积不能为空`,
          confirmButtonText: '我知道了',
          confirmButtonColor: '#000',
        })
        return this.square;
      }
      //如果平方不为空，就计算新房价格
      if (this.square != null && this.select === '新房') {
        // 新房价格
        let price1 = 8500
        // 计算总价 
        let total = this.square * price1
        console.log('总价为：' + total)
        // 弹窗
        this.$dialog.alert({
          message: `您的报价为：\n ￥${total}`,
          confirmButtonText: '我知道了',
          confirmButtonColor: '#000'
        })
      }
      //如果平方不为空，就计算老房价格
      if (this.square != null && this.select === '旧房') {
        // 旧房价格
        let price2 = 9500
        // 旧房总价 
        let total = this.square * price2
        console.log('总价为：' + total)
        // 弹窗
        this.$dialog.alert({
          message: `您的报价为：\n ￥${total}`,
          confirmButtonText: '我知道了',
          confirmButtonColor: '#000'
        })
      }
    },
    // 获取案列数据
    getData () {
      let url = 'http://127.0.0.1:3000/anli/all'
      this.axios.get(url).then(res => {
        console.log(res);
        this.data = res.data
      })
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
// 优秀案列推荐
.anlie {
  // border: 1px solid red;
  // 推荐案列
  background-color: #f9faf9;
  margin-top: 20px;
  > .recommend {
    // border: 1px solid red;
    padding-top: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 89.2%;
    margin: auto;
    background-color: #f9faf9;
    // 案列详情
    > .content {
    // border: 1px solid red;
      margin: 10px 0;
      border-radius: 8px;
      width: 175px;
      background-color: #ffffff;
      > p {
        // border: 1px solid red;
        padding: 5px 0;
        font-size: 12px;
        text-align: left;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      > div {
        font-size: 12px;
        text-align: left;
        padding: 5% 5% 10% 0%;
        position: relative;
        > span {
          margin-right: 5px;
          padding: 2%;
          font-size: 12px;
          background-color: #fcece0;
          color: #ef8185;
        }
        > span:nth-child(3) {
          position: absolute;
          left: 70%;
          top: 20%;
          padding: 1%;
          background-color: #fff;
          font-size: 12px;
          color: #000;
        }
      }
    }
  }
}
</style>
