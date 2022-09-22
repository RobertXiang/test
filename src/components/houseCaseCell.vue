<template>
  <div class="house-case-cell">
    <div class="top" @click="goHcd">
      <img :src="`${items.an_pic}`" alt />
      <div class="active">
        <img
          src="https://ikj-storage-front-prod.oss-cn-beijing.aliyuncs.com/app/html-pc/yzal/eye.png"
          alt
        />
        <span>{{ items.rensu }}</span>
      </div>
      <div class="active1">这样装多少钱?</div>
    </div>
    <!-- 下半部分 -->
    <div class="bottom">
      <img :src="`${items.an_pic1}`" alt />
      <div>
        <div class="title">
          <router-link to="/">{{ items.an_title }}</router-link>
        </div>
        <div class="troduct">
          <span>{{ items.jushi }}</span> |
          <span>{{ items.fenge }}</span> |
          <span>{{ items.biaojian11 }}</span>
        </div>
        <div class="sheji">找他设计</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log(this.id);
  },
  props: ["items"],
  methods: {
    goHcd(e) {
      // let id = e.target.dateset(i);
      let path = `/hcd?anli_id=${this.id}`;
      this.$router.push(path);
    }
  },
  data() {
    return {
      id: this.items.anli_id
    };
  }
};
</script>

<style lang="scss" scoped>
.house-case-cell {
  margin: 0 0 21px 10px;
  width: 290px;
  height: 329px;
  background: #fff;
  border: 1px solid #e5e5e5;
  border-radius: 6px;
  transition: all 0.2s;
  overflow: hidden;
}
.top {
  height: 206px;
  width: 291px;
  position: relative;
  &:hover .active {
    display: none;
  }
  &:hover .active1 {
    display: block;
  }
  > img {
    height: 206px;
    width: 289px;
    border-radius: 6px 6px 0 0;
    object-fit: cover;
  }
  > div:nth-child(2) {
    position: absolute;
    left: 12px;
    top: 11px;
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 24px;
    height: 24px;
    line-height: 24px;
    min-width: 70px;
    padding: 0 7px;
    color: #fff;

    > img {
      margin-right: 2px;
    }
  }
  > div:nth-child(3) {
    // border: 1px solid red;
    position: absolute;
    right: 0px;
    top: 170px;
    z-index: 1;
    background: url(https://ikj-storage-front-prod.oss-cn-beijing.aliyuncs.com/app/html-pc/yzal/icon6.png)
      100% no-repeat;
    width: 123px;
    height: 24px;
    padding-left: 21px;
    line-height: 24px;
    color: #fff;
    font-size: 14px;
    display: none;
    cursor: pointer;
  }
}
// 下半部分
.bottom {
  display: flex;
  width: 263px;
  height: 87px;
  // border: 1px solid red;
  margin: 0 auto;
  // height: 87px;
  margin: 15px 13px 0;
  > img {
    width: 87px;
    height: 87px;
    border-radius: 50%;
    margin-right: 8px;
  }
  > div {
    width: 168px;

    > .title {
      margin-top: 4px;
      font-size: 18px;

      line-height: 1;
      font-weight: bold;
      display: block;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      > a {
        color: #111;
      }
    }
    > .troduct {
      margin: 2px 0 5px;
      > span {
        color: #484848;
        font-size: 14px;
        cursor: pointer;
      }
    }
    > .sheji {
      width: 100px;
      height: 32px;
      text-align: center;
      line-height: 32px;
      color: #787878;
      background: #e5e5e5;
      border-radius: 16px;
      cursor: pointer;
    }
  }
}
</style>
