<template>
  <!-- 空间商城 -->
  <div class="space-mall">
    <!-- 头部 -->
    <van-nav-bar title="家装商城" left-text="" left-arrow />

    <!-- 内容 -->
    <!-- 1.城市 -->
    <div class="c1">
      <span>当前城市：不限</span>
      <span>切换城市 ></span>
    </div>

    <!-- 2.卡片 -->
    <div class="c2" v-if="data">
      <ul>
        <li v-for="item in data.data" :key="item.sid">
          <img :src="item.pic" alt="" />
          <span>{{ item.title }}</span>
          <h4>{{ item.piric }}</h4>
          <button @click="showPopup">加入购物车</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { Dialog } from "vant";

export default {
  data() {
    return {
      data: {},
      show: false,
      subtotal: 0,
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    showPopup() {
      this.show = true;
      Dialog.confirm({
        title: "提示",
        message: "是否加入我的订单",
      })
        .then(() => {
          // 点击确认
          let sid = item.sid;
          let piric = item.piric;
          let title = item.title;
          let pic = item.pic;
          let url = `http://127.0.0.1:3000/shop?sid=${sid}&sid=${piric}&sid=${title}&sid=${pic}`;
          this.axios.get(url).then((res) => {});
        })
        .catch(() => {
          // on cancel
        });
    },
    getData() {
      let url = `http://127.0.0.1:3000/shop/all`;
      this.axios.get(url).then((res) => {
        console.log(res);
        this.data = res.data;
      });
    },
  },
};
</script>

<style>
/* 通用 */
body {
  background-color: rgba(249, 249, 249);
}
/*******头部 *******/
.van-nav-bar__content {
  padding-top: 4vh;
}
.van-nav-bar .van-icon {
  font-size: 1.5rem;
  color: gray;
}
.van-nav-bar__title {
  font-weight: 600;
  color: rgba(75, 67, 94);
  font-size: 1.1rem;
}
.van-nav-bar__left {
  padding-top: 4vh;
}

/******* 内容 *******/
/******* 1.城市 *******/
.c1 {
  margin: 0 4vw;
  display: flex;
  justify-content: space-between;
}
.c1 span {
  line-height: 5vh;
}

/******* 2.卡片 *******/
.c2 {
  padding: 0 1.2vh;
}
.c2 ul {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.c2 ul li {
  background-color: white;
  width: 46vw;
  border-radius: 1vw;
  margin-bottom: 3vw;
}
.c2 ul li img {
  width: 100%;
  height: 20vh;
  border-top-left-radius: 1vw;
  border-top-right-radius: 1vw;
  margin-bottom: 3vw;
}
.c2 ul li span {
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 1rem;
  display: block;
  margin: 0 2vw;
}
.c2 ul li h4 {
  display: inline-block;
  font-size: 1.2rem;
  color: rgba(255, 120, 14);
  font-weight: 400;
  margin: 1vw 2vw;
}
.c2 ul li del {
  margin-left: 2vw;
  display: inline-block;
  font-size: 0.6rem;
  color: #ccc;
}
.c2 ul li button {
  display: block;
  margin: 1vw 2vw;
  font-size: 0.8rem;
  color: white;
  background-color: rgba(255, 120, 14);
  border-radius: 5px;
  border: none;
  padding: 1vw 2vw;
}
</style>