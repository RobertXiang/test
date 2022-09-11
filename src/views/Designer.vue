<template>
  <div>
    <mt-header fixed title="明星设计师">
      <mt-button icon="back" slot="left">返回</mt-button>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <!-- 轮播图 -->
    <mt-swipe style="height: 56vw" :auto="2000">
      <mt-swipe-item>
        <div class="bt">
          <mt-button>五星设计师推荐</mt-button>
          <span>魏凌峰·首席设计师</span>
        </div>
        <img src="/img/details_head.png" />
      </mt-swipe-item>
      <mt-swipe-item>
        <div class="bt">
          <mt-button>五星设计师推荐</mt-button>
          <span>杨佩·首席设计师</span>
        </div>
        <img src="/img/details_head.png" />
      </mt-swipe-item>
      <mt-swipe-item>
        <div class="bt">
          <mt-button>五星设计师推荐</mt-button>
          <span>秦浩波·首席设计师</span>
        </div>
        <img src="/img/details_head.png" />
      </mt-swipe-item>
    </mt-swipe>
    <!-- 主要内容 -->
    <div id="main">
      <div class="tit">
        <span>设计师榜</span>
        <van-field
        readonly
        clickable
        :value="value"
        placeholder="选择城市"
      />
        
      <van-icon name="arrow-down" @click="showPicker = true" />
      <van-popup v-model="showPicker" round position="bottom">
        <van-picker
          show-toolbar
          :columns="columns"
          @cancel="showPicker = false"
          @confirm="onConfirm"
        />
      </van-popup>
      </div>
      <!-- 单个卡片内容 -->
      <div v-if="data">
        <div @click="godetail(index)" id="item" v-for="(msgs,index) in data.msg" :key="msgs.desiger_id">
          <div class="header">
            <!-- 头像 -->
            <img :src="msgs.dpic" alt="" />
            <!-- 简介 -->
            <div class="right">
              <span>
                {{ msgs.dname }}
                <img
                  style="
                    width: 18px;
                    height: 18px;
                    position: relative;
                    bottom: -2px;
                  "
                  src="/img/Snipaste_2022-09-11_21-58-13.png"
                  alt=""
                />
              </span>
              <span>{{ msgs.seraddres }}</span>
              <div>
                <span>{{ msgs.fenge }}</span>
                <span>{{ msgs.conten01 }}</span>
                <span>{{ msgs.conten02 }}</span>
              </div>
            </div>
          </div>
          <!-- 图片 -->
          <div class="footer">
            <img :src="msgs.casepic01" alt="" />
            <img :src="msgs.casepic02" alt="" />
            <img :src="msgs.casepic03" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: null,
      value:'',
      showPicker: false,
      columns: ["杭州", "宁波", "温州", "绍兴", "湖州", "嘉兴", "金华", "衢州"],
    };
  },

  mounted() {
    this.getData();
  },

  methods: {
    godetail(index) {
      this.$router.push({
        path:'/desdetails',
        query:{index}
      });
      console.log(this.$route);
    },

    onConfirm(value) {
      this.value = value;
      this.showPicker = false;
    },

    getData() {
      let url = "http://localhost:3000/designer/all";
      this.axios.get(url).then((res) => {
        console.log(res);
        this.data = res.data;
      });
    },
  },
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}
.mint-header {
  background-color: #fff;
  z-index: 9999;
  color: #000;
  top: 0px;
  padding: 6px;
  height: 44px;
}
::v-deep .mint-header i {
  font-size: 20px;
}
::v-deep .mint-header mint-button-text {
  position: relative;
  top: 2px;
}
::v-deep .mint-header h1 {
  font-size: 17px;
  font-weight: 600;
}
.mint-swipe {
  position: fixed;
  z-index: 999;
  top: 5%;
  left: 0;
  width: 120%;
}
.mint-swipe-item img {
  width: 100%;
}
::v-deep .mint-swipe-indicators {
  position: absolute;
  bottom: 3%;
  left: 87%;
  transform: none;
}
::v-deep .mint-swipe-indicator {
  opacity: 0.7;
  margin: 26px 3px;
}
.bt {
  position: absolute;
  bottom: 9%;
  left: 8%;
  display: flex;
  flex-direction: column;
}
.bt > button {
  border-radius: 20px;
  color: #000;
  font-size: 14px;
  height: 30px;
  width: 120px;
}
.bt > span {
  color: #fff;
  font-size: 22px;
  font-weight: 400;
  margin: 5px 5px;
}
#main {
  border-radius: 20px;
  background: #fff;
  position: absolute;
  top: 35%;
  padding: 10px;
}
#main .tit {
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  padding: 18px 18px 18px 10px;
  position: fixed;
  background-color: #fff;
  z-index: 999;
  top: 29%;
  left: 0;
  height: 20px;
  border-radius: 16px 16px 0px 0px;
  width: 94%;
}
::v-deep .van-cell{
  width: 100px;
  right:-32%;
  font-size: 16px;
}
::v-deep .van-cell .van-field__control{
  text-align: right;
  padding-right: 35%;
}
::v-deep .van-picker__toolbar button{
  font-size: 18px;
}
#item {
  margin-bottom: 20px;
  text-decoration: none;
}
#item .header img {
  width: 55px;
  height: 55px;
  border-radius: 30px;
}
#item .header {
  display: flex;
}
.header .right {
  display: flex;
  flex-direction: column;
  margin-left: 16px;
}
.header .right > span:first-child {
  font-size: 20px;
}
.header .right > span:nth-child(2) {
  color: rgb(157, 151, 151);
}
.header .right > div {
  margin: 8px 0;
}
.header .right > div > span {
  padding: 3px 6px;
  margin: 0px 8px;
  width: 20px;
  font-size: 12px;
  background-color: rgb(217, 163, 107, 0.2);
  color: rgb(198, 177, 152);
}
.header .right > div > span:first-child {
  margin-left: 0px;
}
.footer img {
  width: 25%;
  height: 100px;
}
.footer {
  display: flex;
  justify-content: space-around;
}
.footer img:first-child {
  margin-left: 17%;
}
</style>