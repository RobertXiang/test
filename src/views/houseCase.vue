<template>
  <div class="anli">
    <!-- 版心 -->
    <div class="banxin">
      <div class="concent">
        <!-- 顶部图片 -->
        <div>
          <img
            class="topbj"
            src="	https://ikj-storage-front-prod.oss-cn-beijing.aliyuncs.com/app/html-pc/yzal/head.png"
            alt
          />
          <!-- 面包屑 -->
          <div class="mianbao">
            <el-breadcrumb separator-class="el-icon-arrow-right">
              <el-breadcrumb-item :to="{ path: '/' }">爱空间首页</el-breadcrumb-item>
              <el-breadcrumb-item>整屋案例</el-breadcrumb-item>
            </el-breadcrumb>
          </div>
        </div>
        <div class="lunbo">
          <swiper class="swiper" :options="swiperOption">
            <swiper-slide>
              <img src="../assets/ping_img/lunbo1.jpg" alt />
              <div class="bj">
                <div class="box1">今日整屋</div>
                <div class="box2">
                  <div class="time1">2022/09</div>
                  <div class="time2">24</div>
                </div>
                <div class="box3">
                  <span class="s1">1</span>/
                  <span>2</span>
                </div>
                <div class="box4">" 熟悉的89㎡ “以旧换新”她家简约原木控, 玩出大宅花样 "</div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <img src="../assets/ping_img/lunbo2.jpg" alt />
              <div class="bj">
                <div class="box1">今日整屋</div>
                <div class="box2">
                  <div class="time1">2022/09</div>
                  <div class="time2">24</div>
                </div>
                <div class="box3">
                  <span class="s1">2</span>/
                  <span>2</span>
                </div>
                <div class="box4">打通两套房, 竟是为了孩子的游乐场,当代家庭 "幼儿园"</div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
        <!-- 每一块 -->
        <!-- <house-case-cell
          v-for="item in data"
          :key="item.anli_id"
          :items="item"
        />-->
        <div class="house-case-cell" v-for="items in data" :key="items.anli_id">
          <div class="top" @click="goHcd(items.anli_id)">
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
      </div>
    </div>
  </div>
</template>

<script>
import houseCaseCell from "../components/houseCaseCell.vue";
export default {
  components: { houseCaseCell },
  methods: {
    goHcd(i) {
      let path = `/hcd?anli_id=${i}`;
      this.$router.push(path);
    }
  },
  data() {
    return {
      // id: this.data.anli_id,
      data: [],
      swiperOption: {
        loop: true,
        autoplay: {
          disableOnInteraction: false
        }
      }
    };
  },
  mounted() {
    let url = `http://127.0.0.1:3000/anli/fenge/现代简约`;
    this.axios.get(url).then(res => {
      console.log("res:", res);
      this.data = res.data.data;
    });
  }
};
</script>

<style lang="scss" scoped>
.anli {
  height: 800px;
  overflow: auto;
  margin-top: 10px;
}
.banxin {
  width: 1200px;
  margin: 0 auto;
}
.concent {
  display: flex;
  flex-wrap: wrap;
  .topbj {
    display: block;
  }
  .mianbao {
    margin: 20px 0;
  }
}
.bj {
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(1, 1, 1, 0.2);
  color: white;
  cursor: pointer;
  width: 290px;
  height: 329px;

  .box1 {
    position: absolute;
    left: 16px;
    top: 25px;
    height: 18px;
    font-size: 18px;
    font-weight: bold;
    color: #ffffff;
  }

  .box2 {
    margin-top: 5px;
    position: absolute;
    left: 16px;
    top: 58px;
    height: 90px;
    width: 63px;
    color: #ffffff;
    flex-direction: row;
    flex-wrap: wrap;
    > .time1 {
      width: 63px;
      height: 17px;
      font-size: 18px;
      font-weight: 300;
      color: #ffffff;
    }

    > .time2 {
      width: 63px;
      height: 72px;
      font-size: 60px;
      font-family: MADE TOMMY;
      font-weight: 700;
      color: #ffffff;
    }
  }

  .box3 {
    display: flex;
    position: absolute;
    flex-direction: row;
    right: 15px;
    top: 241px;
    width: 40px;
    height: 17px;
    font-size: 18px;
    font-weight: 200;
    font-family: MADE TOMMY;
    color: #ffffff;
    > .s1 {
      font-weight: bold;
    }
  }
  .box4 {
    display: -webkit-box;
    position: absolute;
    right: 15px;
    bottom: 20px;
    width: 257px;
    height: 42px;
    font-size: 14px;
    font-weight: 400;
    color: #ffffff;
    line-height: 22px;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }
}
.swiper-container {
  margin: 0 0 21px 10px;
  width: 290px;
  height: 329px;
  background: #fff;
  border: 1px solid #e5e5e5;
  border-radius: 6px;
  transition: all 0.2s;
  overflow: hidden;
  position: relative;
  &:hover .bj {
    display: block;
  }

  img {
    width: 290px;
    height: 329px;
    object-fit: cover;
  }
}

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
