<template>
  <div>
    <van-nav-bar title="家装新体验" left-arrow @click-left="goIndex()" />
    <div class="container">
      <!-- 一楼图片 -->
      <div class="one_img">
        <img
          src="https://ikj-storage-front-prod.oss-cn-beijing.aliyuncs.com/app/html-m/jzxty/banner.png"
          width="100%"
          alt=""
        />
      </div>
      <!-- 二楼 -->
      <div class="two">
        <div class="text">
          <h3>6大项目组模式,找对人很重要</h3>
          <p>专业专责陪伴装修全程</p>
        </div>
        <div class="list">
          <div class="list_item">
            <img
              src="https://ikj-storage-front-prod.oss-cn-beijing.aliyuncs.com/app/html-m/jzxty/pattern1.png"
              alt=""
              width="100px"
            />
            <p>家装设计组</p>
          </div>
          <div class="list_item">
            <img
              src="https://ikj-storage-front-prod.oss-cn-beijing.aliyuncs.com/app/html-m/jzxty/pattern2.png"
              alt=""
              width="100px"
            />
            <p>家装设计组</p>
          </div>
          <div class="list_item">
            <img
              src="https://ikj-storage-front-prod.oss-cn-beijing.aliyuncs.com/app/html-m/jzxty/pattern3.png"
              alt=""
              width="100px"
            />
            <p>家装设计组</p>
          </div>
          <div class="list_item">
            <img
              src="https://ikj-storage-front-prod.oss-cn-beijing.aliyuncs.com/app/html-m/jzxty/pattern4.png"
              alt=""
              width="100px"
            />
            <p>家装设计组</p>
          </div>
          <div class="list_item">
            <img
              src="https://ikj-storage-front-prod.oss-cn-beijing.aliyuncs.com/app/html-m/jzxty/pattern5.png"
              alt=""
              width="100px"
            />
            <p>家装设计组</p>
          </div>
          <div class="list_item">
            <img
              src="https://ikj-storage-front-prod.oss-cn-beijing.aliyuncs.com/app/html-m/jzxty/pattern6.png"
              alt=""
              width="100px"
            />
            <p>家装设计组</p>
          </div>
          <!-- item完 -->
        </div>
      </div>
      <!-- 三楼 -->
      <div class="three">
        <div class="three_text">
          <h3>您的装修最佳组合拍档</h3>
          <p>设计、施工、验收、Ta们更在行</p>
        </div>
        <div class="three_img">
          <img
            src="https://ikj-storage-front-prod.oss-cn-beijing.aliyuncs.com/app/html-m/jzxty/bg.png"
            alt=""
            width="100%"
          />
        </div>
        <div class="three_phone">联系我们：400-6031-556</div>
      </div>
      <!-- 四楼 -->
      <div class="two">
        <div class="text">
          <h3>整装体验 &nbsp;一价包</h3>
          <p>0增项 &nbsp; 0跑腿 &nbsp; 0假货</p>
        </div>
        <div class="list">
          <div class="list_item">
            <img
              src="https://ikj-storage-front-prod.oss-cn-beijing.aliyuncs.com/app/html-m/jzxty/experience1.png"
              alt=""
              width="100px"
            />
            <p>量房排雷</p>
          </div>
          <div class="list_item">
            <img
              src="https://ikj-storage-front-prod.oss-cn-beijing.aliyuncs.com/app/html-m/jzxty/experience2.png"
              alt=""
              width="100px"
            />
            <p>大师设计</p>
          </div>
          <div class="list_item">
            <img
              src="https://ikj-storage-front-prod.oss-cn-beijing.aliyuncs.com/app/html-m/jzxty/experience3.png"
              alt=""
              width="100px"
            />
            <p>标准施工</p>
          </div>
          <div class="list_item">
            <img
              src="https://ikj-storage-front-prod.oss-cn-beijing.aliyuncs.com/app/html-m/jzxty/experience5.png"
              alt=""
              width="100px"
            />
            <p>大牌材料</p>
          </div>
          <div class="list_item">
            <img
              src="https://ikj-storage-front-prod.oss-cn-beijing.aliyuncs.com/app/html-m/jzxty/experience4.png"
              alt=""
              width="100px"
            />
            <p>整体厨卫</p>
          </div>
          <div class="list_item">
            <img
              src="https://ikj-storage-front-prod.oss-cn-beijing.aliyuncs.com/app/html-m/jzxty/experience6.png"
              alt=""
              width="100px"
            />
            <p>全屋托管</p>
          </div>
          <!-- item完 -->
        </div>
      </div>
      <!-- 五楼 -->
      <div class="five">
        <div class="five_text">
          <h3>效率体验&nbsp;33天准时工期</h3>
          <p>装修各阶段无缝衔接</p>
        </div>
        <div class="five_shuffling">
          <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item>
              <img
                src="https://ikj-storage-front-prod.oss-cn-beijing.aliyuncs.com/app/html-m/jzxty/swiper1.png"
                alt=""
                width="100%"
              />
            </van-swipe-item>
            <van-swipe-item>
              <img
                src="https://ikj-storage-front-prod.oss-cn-beijing.aliyuncs.com/app/html-m/jzxty/swiper2.png"
                width="100%"
                alt=""
              />
            </van-swipe-item>
            <van-swipe-item>
              <img
                src="https://ikj-storage-front-prod.oss-cn-beijing.aliyuncs.com/app/html-m/jzxty/swiper3.png"
                alt=""
                width="100%"
              />
            </van-swipe-item>
            <van-swipe-item>
              <img
                src="https://ikj-storage-front-prod.oss-cn-beijing.aliyuncs.com/app/html-m/jzxty/swiper4.png"
                alt=""
                width="100%"
              />
            </van-swipe-item>
          </van-swipe>
        </div>
      </div>
      <!-- 六楼 -->
      <div class="design-footer">
        <div>
          <span>首页</span>
          <span>app下载</span>
          <span>关于我们</span>
        </div>
        <div>— 美墅科技（成都）有限公司 京ICP备15007819号-1 —</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goIndex() {
      this.$router.push('/')
    },
  },
}
</script>

<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
}
.container {
  // border: 1px solid red;
  width: 90%;
  margin: auto;
  > .one_img {
    // border: 1px solid red;
    margin: 20px 0;
    border-radius: 8px;
  }
  > .two {
    // border: 1px solid red;
    > .text {
      text-align: left;
    }
    > .list {
      // border: 1px solid red;
      display: flex;
      flex-wrap: wrap;
      > .list_item {
        // border: 1px solid red;
        width: 100px;
        margin: 15px 10px;
      }
    }
  }
  > .three {
    // border: 1px solid red;
    height: 350px;
    > .three_text {
      margin: 20px 0;
      text-align: left;
    }
    > .three_img {
      // border: 1px solid red;
      margin: 20px 0;
    }
    > .three_phone {
      width: 80%;
      // border: 1px solid red;
      text-align: center;
      line-height: 40px;
      margin: auto;
      position: relative;
      top: -80px;
      background-color: #ff6400;
      color: #ffff;
    }
  }
  > .five {
    // border: 1px solid red;
    margin: 20px 0;
    > .five_text {
      text-align: left;
    }
    > .five_shuffling {
      // border: 1px solid red;
      margin: 20px 0;
      height: 200px;
    }
  }
  // 轮播样式
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    // background-color: #39a9ed;
  }
  // 尾部
  .design-footer {
    width: 100%;
    font-size: 12px;
    padding-bottom: 50px;
    margin-top: 80px;
    > div {
      margin: 10px 0;
      display: flex;
      justify-content: center;
      justify-content: space-evenly;
    }
  }
}
</style>
