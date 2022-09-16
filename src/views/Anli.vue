<template>
  <div>
       <van-nav-bar
      title="看案例"
      left-text=""
      left-arrow
      @click-left="goIndex()"
    />

    <!-- Tab标签页 滑动 -->
    <van-row gutter="1">
      <van-col span="3">风格</van-col>
      <van-tabs title-active-color="#ca5c0de3">
        <van-tab v-for="(item, index) in title1" :title="item" :key="index">
        </van-tab>
      </van-tabs>
    </van-row>

    <van-row gutter="1">
      <van-col span="3">户型</van-col>
      <van-tabs>
        <van-tab v-for="(item, index) in title2" :title="item" :key="index">
        </van-tab>
      </van-tabs>
    </van-row>

    <van-row gutter="1">
      <van-col span="3">面积</van-col>
      <van-tabs>
        <van-tab v-for="(item, index) in title3" :title="item" :key="index">
        </van-tab>
      </van-tabs>
    </van-row>

    <div class="t" v-if="data">
      <ul>
        <li
          v-for="item of data.data"
          :key="item.anli_id"
          @click="goXiangqing(item.anli_id)"
        >
          <img :src="item.an_pic" alt="" style="margin-top: 15px" />
          <span>{{ item.an_title }}</span>
          <del style="float: left">{{ item.fenge }}</del>
          <del style="float: right">{{ item.biaojian11 }}</del>
          <br />
          <button class="button disabled1">{{ item.jushi }}</button>
          <button class="button disabled2">{{ item.getoffice }}</button>
          <!-- <button class="button disabled3">色彩搭配</button> -->
        </li>
      </ul>
    </div>
    <!-- Tag标签 -->
    <!-- <van-tag color="#969799" size="small">标签</van-tag>
   <van-tag color="#f2826a" size="small">标签</van-tag>
   <van-tag color="#969799" size="small">标签</van-tag> -->
  </div>
</template>

 
<script>
export default {
  data() {
    return {
      title1: [
        "全部",
        "日式",
        "极简风",
        "法式风",
        "复古风",
        "现代简约",
        "新中式",
        "美式",
        "北欧风",
        "轻奢风",
        "工业风",
        "INS风",
      ],
      title2: ["全部", "一居室", "二居室", "三居室", "四居室"],
      title3: [
        "全部",
        "60㎡以下",
        "60㎡-80㎡",
        "80㎡-100㎡",
        "100㎡-120㎡",
        "120㎡-180㎡",
        "180㎡以上",
      ],
      num: "",
      data: null,
    };
  },
  methods: {
    // 请求数据
    getData() {
      let url = "/anli/all";
      this.axios.get(url).then((res) => {
        console.log(res.data);
        this.data = res.data;
      });
    },
    //编程式跳转
    goXiangqing(index) {
      this.$router.push({
        path: "/anlidetail",
        query: { index },
      });
    },
    goIndex() {
      this.$router.push("/");
    },
  },
  // 挂载
  mounted() {
    this.getData();
  },
};
</script>



<style scoped>
/* 看案例 */
.van-nav-bar__content {
  padding-top: 4vh;
  height: 7vw;
  top: -3vw;
}
::v-deep .van-nav-bar .van-icon {
  font-size: 20px;
  color: gray;
}
.van-nav-bar__title {
  font-weight: 600;
  color: rgba(75, 67, 94);
  font-size: 1.2rem;
}
.van-nav-bar__left {
  padding-top: 4vh;
}
/*Tab 标签页  */
.van-row {
  margin: 10px;
  margin-top: 15px;
  align-items: baseline;
  height: 23px;
}
.van-col {
  text-align: justify;
  margin-top: 10px;
}

.van-tab {
  text-align: justify;
  display: inline-block;
}
.van-tabs__wrap--scrollable .van-tabs__nav {
  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  padding: 2px;
}
.van-tab--active {
  color: #ca5c0de3;
  font-weight: 400;
}
/* 下方红线 */
.van-tabs__line {
  background-color: #fff;
}

.t {
  padding: 0 10px;
}
.t ul {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.t ul li {
  background-color: white;
  width: 46vw;
  height: 30vh;
  border-radius: 5px;
  margin-bottom: 10px;
  justify-content: space-between;
}
.t ul li img {
  width: 100%;
  height: 15vh;
  border-radius: 5px;
  margin-bottom: 10px;
}
.t ul li span {
  font-size: 13px;
  display: block;
  margin: 2px 5px;
  overflow: hidden;
  height: 40px;
}

.t ul li del {
  justify-content: space-between;
  margin-left: 5px;
  display: inline-block;
  font-size: 10px;
  color: rgb(145, 140, 140);
}
.disabled1 {
  background-color: rgb(160, 155, 155);
  border: none;
  border-radius: 1px;
  color: white;
  display: inline-block;
  font-size: 12px;
  margin: 2px 1px;
  padding: 1px 3px;
  cursor: not-allowed;
}
.disabled2 {
  background-color: #dd772e;
  border: none;
  border-radius: 1px;
  color: white;
  display: inline-block;
  font-size: 12px;
  margin: 2px 1px;
  padding: 1px 3px;
  cursor: not-allowed;
}
.disabled3 {
  background-color: rgb(160, 155, 155);
  border: none;
  border-radius: 1px;
  color: white;
  display: inline-block;
  font-size: 12px;
  margin: 2px 1px;
  padding: 1px 3px;
  cursor: not-allowed;
}
</style>

