<template>
  <div class="main">
    <!-- 面包屑 -->
    <div class="bread">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>整屋案例</el-breadcrumb-item>
        <el-breadcrumb-item>{{ desc.xqtitle }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <!-- 中间内容 -->
    <div class="contentMain">
      <!-- 左边内容 -->
      <div class="left">
        <!-- 标题 -->
        <div class="maintitle">
          <h1 class="word10">{{ desc.xqtitle }}</h1>
          <div class="bd7">
            <div class="grounp4">
              <span class="word11">来源:</span>
              <span class="info6">看到你的心情</span>
            </div>
            <div class="grounp5">
              <span class="word11">浏览人数:</span>
              <span class="info6">1058次</span>
            </div>
            <div class="grounp6">
              <span class="word11">更新时间:</span>
              <span class="info6">2022-09-05 06:07:58</span>
            </div>
          </div>
        </div>
        <!-- 内容 -->
        <div class="box2">
          <!-- 案例风格 -->
          <div class="section1">
            <div class="group7">
              <div class="box3">
                <span class="word13">案例风格</span>
                <span class="word14">{{ desc.xqfg }}</span>
              </div>
              <div class="box4"></div>
              <div class="box3">
                <span class="word13">案例户型</span>
                <span class="word14">{{ desc.xqfx }}</span>
              </div>
              <div class="box4"></div>
              <div class="box3">
                <span class="word13">案例面积</span>
                <span class="word14">{{ desc.area }}</span>
              </div>
              <div class="box4"></div>
              <div class="box3">
                <span class="word13">楼盘名称</span>
                <span class="word14">{{ desc.loupan }}</span>
              </div>
              <div class="box4"></div>
              <div class="box3">
                <span class="word13">所在城市</span>
                <span class="word14">{{ desc.city }}</span>
              </div>
            </div>
          </div>
          <!-- 轮播图 -->
          <div class="section2">
            <div class="swiper-container">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <img class="banner" :src="`${desc.xqpic}`" alt />
                  <span class="word15">{{ desc.xqtext1 }}</span>
                </div>
                <div class="swiper-slide">
                  <img class="banner" :src="`${desc.xqpic1}`" alt />
                  <span class="word15">{{ desc.xqtext2 }}</span>
                </div>
                <div class="swiper-slide">
                  <img class="banner" :src="`${desc.xqpic2}`" alt />
                  <span class="word15">餐厅位于客厅一侧，简雅的餐桌椅让空间更具亲和力，用餐氛围素雅温馨。</span>
                </div>
                <div class="swiper-slide">
                  <img class="banner" :src="`${desc.xqpic3}`" alt />
                  <span class="word15">{{ desc.xqtext3 }}</span>
                </div>
                <div class="swiper-slide">
                  <img class="banner" :src="`${desc.xqpic4}`" alt />
                  <span class="word15">{{ desc.xqtext4 }}</span>
                </div>
                <div class="swiper-slide">
                  <img class="banner" :src="`${desc.xqpic5}`" alt />
                  <span class="word15">{{ desc.xqtext5 }}</span>
                </div>
              </div>
              <!-- 如果需要导航按钮 -->
              <div class="swiper-button-prev"></div>
              <div class="swiper-button-next"></div>
            </div>
          </div>
          <!-- <div class="section3"></div> -->
          <!-- 图文介绍 -->
          <div class="section4">
            <p>
              <span style="line-height: 1.75">设计理念</span>
            </p>
            <p>
              <span
                style="line-height: 1.75; width: 800px; white-space: pre-wrap"
              >本案秉持高雅大气的美学设计理念，用天然的石材、金属、布艺等元素，展现出业主明快和简洁性格，在空间布局中，以宽阔开扬的空间规划开拓了视野，塑造出简单舒适，温馨自然的现代空间。</span>
            </p>
            <p>
              <span
                style="line-height: 1.75"
              >全屋配以崇尚简约但不失时尚感，高级咖色贯穿空间，与白色相互羁绊，呈现出真实自然的现代美感，置身其中可安享生活气息。</span>
            </p>
            <p></p>
            <div class="image-wrap">
              <img
                src="https://ikj-public.oss-cn-beijing.aliyuncs.com/market/10bf05ec/9534d895/e282f33d/96fe71b8/dW5kZWZpbmVkMV8yMDIyLTA0LTA3VDExOjQ2OjQzLjE5Nw==.jpg"
                alt
              />
            </div>
            <p></p>
            <p>
              <span style="line-height: 1.75">户型方正，可餐厅一体化设计，卧室面积宽敞且集中分布，日常休憩不受打扰。</span>
            </p>
            <p></p>
            <div class="image-wrap">
              <img :src="`${desc.xqpic}`" alt />
            </div>
            <p></p>
            <p>
              <span style="line-height: 1.75">{{ desc.xqtext1 }}</span>
            </p>
            <p></p>
            <div class="image-wrap">
              <img :src="`${desc.xqpic1}`" alt />
            </div>
            <p></p>
            <p>
              <span style="line-height: 1.75">{{ desc.xqtext2 }}</span>
            </p>
            <p></p>
            <div class="image-wrap">
              <img :src="`${desc.xqpic2}`" alt />
            </div>
            <p></p>
            <p>
              <span style="line-height: 1.75"></span>
            </p>
            <p></p>
            <div class="image-wrap">
              <img :src="`${desc.xqpic3}`" alt />
            </div>
            <p></p>
            <p>
              <span style="line-height: 1.75">{{ desc.xqtext3 }}</span>
            </p>
            <p></p>
            <div class="image-wrap">
              <img :src="`${desc.xqpic4}`" alt />
            </div>
            <p></p>
            <p>
              <span style="line-height: 1.75">{{ desc.xqtext4 }}</span>
            </p>
            <p></p>
            <div class="image-wrap">
              <img :src="`${desc.xqpic5}`" alt />
            </div>
            <p></p>
            <p>
              <span style="line-height: 1.75">{{ desc.xqtext5 }}</span>
            </p>
            <p></p>
          </div>
          <!-- 翻页 -->
          <div class="bd14">
            <a href>
              <div class="pagenav">
                <img
                  src="https://ikj-storage-front-prod.oss-cn-beijing.aliyuncs.com/app/html-pc/alxq/top.png"
                  class="labe16"
                />
                <span>上一个案例： 中冶祥腾菁英尚都 124平米 现代简约</span>
              </div>
            </a>
            <a href>
              <div class="pagenav">
                <img
                  src="https://ikj-storage-front-prod.oss-cn-beijing.aliyuncs.com/app/html-pc/alxq/bottom.png"
                  class="labe16"
                />
                <span>下一个案例： 大冲城市花园 139平米 北欧风</span>
              </div>
            </a>
          </div>
        </div>
      </div>
      <!-- 右边内容 -->
      <div class="right" style="position: static">
        <div class="box12">
          <!-- 第一张 -->
          <div class="main2">
            <div class="main2-1">
              <img :src="`${sjs.an_pic1}`" alt />
              <span class="word19">本案设计师:{{ sjs.an_name }}</span>
              <div class="layer1">
                <div class="textgroup1">
                  <span class="text8">289套</span>
                  <span class="info14">作品案例</span>
                </div>
                <div class="wrap"></div>
                <div class="textgroup2">
                  <span class="text8">2015年</span>
                  <span class="info14">从业年限</span>
                </div>
                <div class="wrap"></div>
                <div class="textgroup3">
                  <span class="text8">731次</span>
                  <span class="info14">互动次数</span>
                </div>
              </div>
              <div class="layer2">
                <span style="color: white; line-height: 44px">预约TA</span>
              </div>
            </div>
          </div>
          <div class="main4">
            <div class="outer2">
              <span class="info16">这样装修多少钱？</span>
              <div class="mod">
                <span class="word22">已有</span>
                <span class="text11">1901</span>
                <span class="word23">&nbsp;位业主获取了装修报价</span>
              </div>
              <div class="form">
                <div class="formitem">
                  <el-select style="border-radius: 6px" v-model="value" placeholder="请选择所在城市">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    ></el-option>
                  </el-select>
                </div>
                <div class="formitem">
                  <input type="text" placeholder="请输入房屋面积" />
                  <div>㎡</div>
                </div>
                <div class="formitem">
                  <input type="text" placeholder="请输入您的联系电话" />
                </div>
              </div>
              <div class="mod6">
                <span style="color: white">获取报价</span>
              </div>
            </div>
          </div>
          <div class="main6">
            <span class="text13">相关案例</span>
            <div class="main6-1">
              <a href>
                <img
                  src="https://ikj-public.oss-cn-beijing.aliyuncs.com/market/d10af457/daa1deed/54e2c36b/5f295e7e/Ml8yMDIyLTA5LTE3VDE3OjE1OjIzLjk1OA==.jpg"
                />
                <span>融创时代壹号139㎡四居室现代风装修案例</span>
              </a>
              <a href>
                <img
                  src="https://ikj-public.oss-cn-beijing.aliyuncs.com/market/d10af457/daa1deed/54e2c36b/5f295e7e/Ml8yMDIyLTA5LTE3VDE2OjU5OjU4LjQ0Mg==.jpg"
                />
                <span>碧桂园凤凰湾118㎡三居室现代简约风装修案例</span>
              </a>
              <a href>
                <img
                  src="https://ikj-public.oss-cn-beijing.aliyuncs.com/market/d10af457/daa1deed/54e2c36b/5f295e7e/Ml8yMDIyLTA5LTE3VDE2OjUxOjM0LjU3Mg==.jpg"
                />
                <span>东方丽城87㎡两居室现代简约风装修案例</span>
              </a>
              <a href>
                <img
                  src="https://ikj-public.oss-cn-beijing.aliyuncs.com/market/d10af457/daa1deed/54e2c36b/5f295e7e/Ml8yMDIyLTA5LTE0VDEzOjEwOjU0LjgxNQ==.jpg"
                />
                <span>橡树珑湾129㎡三居室现代简约风装修案例</span>
              </a>
              <a href>
                <img
                  src="https://ikj-public.oss-cn-beijing.aliyuncs.com/market/d10af457/daa1deed/54e2c36b/5f295e7e/Ml8yMDIyLTA5LTE0VDEzOjM2OjU5LjQ1NQ==.jpg"
                />
                <span>中海寰宇时代89㎡两居室现代简约风装修案例</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 底部内容 -->
    <div class="bd15">
      <div class="layer5">
        <div class="bd16">
          <span>人气案例推荐</span>
        </div>
        <!-- 人气案例卡片 -->
        <div class="bd17">
          <div class="card">
            <div class="house-case-cell">
              <div class="top">
                <img
                  src="https://ikj-public.oss-cn-beijing.aliyuncs.com/market/d10af457/daa1deed/54e2c36b/5f295e7e/5Zu-54mHMV8yMDIyLTA3LTIyVDExOjI1OjQwLjU3Mw==.png"
                  alt
                />
                <div class="active">
                  <img
                    src="https://ikj-storage-front-prod.oss-cn-beijing.aliyuncs.com/app/html-pc/yzal/eye.png"
                    alt
                  />
                  <span style="color: white">389</span>
                </div>
                <div class="active1">这样装多少钱?</div>
              </div>
              <!-- 下半部分 -->
              <div class="bottom">
                <img
                  src="https://ikj-public.oss-cn-beijing.aliyuncs.com/kylin/1921f4cf/f9347449/c3ffe071/457bed7d/ZGVzaWduZXJfLzgwMDMzMWFhNzkxZjEwMjJiNWFkMWUwYzljNzAzNGMxXzIwMjItMDYtMzBUMjI6MTk6MzguNDIw.jpg"
                  alt
                />
                <div>
                  <div class="title">
                    <router-link to="/"></router-link>
                  </div>
                  <div class="troduct">
                    <span>三居室</span> |
                    <span>ins风</span> |
                    <span>125㎡</span>
                  </div>
                  <div class="sheji">找他设计</div>
                </div>
              </div>
            </div>
            <div class="house-case-cell">
              <div class="top">
                <img
                  src="https://ikj-public.oss-cn-beijing.aliyuncs.com/market/d10af457/daa1deed/54e2c36b/5f295e7e/5Zu-54mHMV8yMDIyLTA2LTI4VDE2OjIyOjI5LjUzMQ==.png"
                  alt
                />
                <div class="active">
                  <img
                    src="https://ikj-storage-front-prod.oss-cn-beijing.aliyuncs.com/app/html-pc/yzal/eye.png"
                    alt
                  />
                  <span style="color: white">389</span>
                </div>
                <div class="active1">这样装多少钱?</div>
              </div>
              <!-- 下半部分 -->
              <div class="bottom">
                <img
                  src="https://ikj-public.oss-cn-beijing.aliyuncs.com/kylin/1921f4cf/f9347449/c3ffe071/457bed7d/ZGVzaWduZXJfLzYwYTRhOGY3ZGNhMDY5MjQ2OWZjNGQ0YzBkYmZiYjUxXzIwMjItMDYtMzBUMjI6MTk6MjIuNzI0.jpg"
                  alt
                />
                <div>
                  <div class="title">
                    <router-link to="/"></router-link>
                  </div>
                  <div class="troduct">
                    <span>三居室</span> |
                    <span>ins风</span> |
                    <span>120㎡</span>
                  </div>
                  <div class="sheji">找他设计</div>
                </div>
              </div>
            </div>
            <div class="house-case-cell">
              <div class="top">
                <img
                  src="https://ikj-public.oss-cn-beijing.aliyuncs.com/market/d10af457/daa1deed/54e2c36b/5f295e7e/5Zu-54mHMV8yMDIyLTA3LTA4VDE1OjQ3OjIwLjcyOQ==.png"
                  alt
                />
                <div class="active">
                  <img
                    src="https://ikj-storage-front-prod.oss-cn-beijing.aliyuncs.com/app/html-pc/yzal/eye.png"
                    alt
                  />
                  <span style="color: white">389</span>
                </div>
                <div class="active1">这样装多少钱?</div>
              </div>
              <!-- 下半部分 -->
              <div class="bottom">
                <img
                  src="https://ikj-public.oss-cn-beijing.aliyuncs.com/kylin/1921f4cf/f9347449/c3ffe071/457bed7d/ZGVzaWduZXJfLzc3ODI2NmMwMzdmN2YyMTNlODRlNTFkMjk2NjAzM2MwXzIwMjItMDYtMzBUMjI6MTk6NDIuMjc4.jpg"
                  alt
                />
                <div>
                  <div class="title">
                    <router-link to="/"></router-link>
                  </div>
                  <div class="troduct">
                    <span>三居室</span> |
                    <span>ins风</span> |
                    <span>125㎡</span>
                  </div>
                  <div class="sheji">找他设计</div>
                </div>
              </div>
            </div>
            <div class="house-case-cell">
              <div class="top">
                <img
                  src="https://ikj-public.oss-cn-beijing.aliyuncs.com/market/d10af457/daa1deed/54e2c36b/5f295e7e/5Zu-54mHMTlfMjAyMi0wNy0yNVQxMTowOTo1Ni45NTU=.jpg"
                  alt
                />
                <div class="active">
                  <img
                    src="https://ikj-storage-front-prod.oss-cn-beijing.aliyuncs.com/app/html-pc/yzal/eye.png"
                    alt
                  />
                  <span style="color: white">384</span>
                </div>
                <div class="active1">这样装多少钱?</div>
              </div>
              <!-- 下半部分 -->
              <div class="bottom">
                <img
                  src="https://ikj-public.oss-cn-beijing.aliyuncs.com/kylin/1921f4cf/f9347449/c3ffe071/457bed7d/ZGVzaWduZXJfLzMxNjFhNGJhMjlkYzgyYWU1Zjk3YTdjNjQzNzU1N2NjXzIwMjItMDYtMzBUMjI6MTk6MjQuNTk5.jpg"
                  alt
                />
                <div>
                  <div class="title">
                    <router-link to="/"></router-link>
                  </div>
                  <div class="troduct">
                    <span>三居室</span> |
                    <span>ins风</span> |
                    <span>100㎡</span>
                  </div>
                  <div class="sheji">找他设计</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="bd18">
          <img
            src="https://ikj-public.oss-cn-beijing.aliyuncs.com/market/249c8d5a/ce22c637/5187fcc4/ec445b2e/bDNjZmpwejFiYW5uZXJfMjAyMi0wNS0xOVQxMToxMjo1MC42MjI=.jpg"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/css/swiper.min.css";
export default {
  data() {
    return {
      desc: "",
      sjs: [],
      options: [
        {
          value: "选项1",
          label: "北京"
        },
        {
          value: "选项2",
          label: "成都"
        },
        {
          value: "选项3",
          label: "上海"
        },
        {
          value: "选项4",
          label: "广州"
        },
        {
          value: "选项5",
          label: "深圳"
        },
        {
          value: "选项6",
          label: "郑州"
        },
        {
          value: "选项7",
          label: "济南"
        },
        {
          value: "选项8",
          label: "南昌"
        },
        {
          value: "选项9",
          label: "武汉"
        }
      ],
      value: ""
    };
  },
  mounted() {
    let id = this.$route.query.anli_id;
    console.log("id", id);
    this.getData(id);
    this.getsjs(id);
    new Swiper(".swiper-container", {
      loop: true, // 循环模式选项
      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination"
      },
      autoplay: true,
      effect: "fade",
      // 如果需要前进后退按钮
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }
    });
  },
  methods: {
    getsjs(id) {
      this.axios
        .get(`http://127.0.0.1:3000/anli/anli_id?anli_id=${id}`)
        .then(res => {
          console.log("头像:", res);
          this.sjs = res.data.data[0];
          console.log(res.data.data);
        });
    },
    getData(id) {
      this.axios.get(`http://127.0.0.1:3000/anli/xqal/${id}`).then(res => {
        this.desc = res.data.data[0];
        console.log(res.data.data[0]);
      });
    }
  }
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  user-select: none;
  list-style: none;
  color: black;
  box-sizing: border-box;
}
.word11 {
  height: 14px;
  overflow-wrap: break-word;
  color: rgba(120, 120, 120, 1);
  font-size: 14px;
  text-align: left;
  white-space: nowrap;
  line-height: 14px;
}
.info6 {
  height: 14px;
  overflow-wrap: break-word;
  color: rgba(17, 17, 17, 1);
  font-size: 14px;
  text-align: left;
  white-space: nowrap;
  line-height: 14px;
}
.main {
  background-color: rgba(255, 255, 255, 1);
  width: 100%;
  display: flex;
  flex-direction: column;
  > .bread {
    height: 14px;
    line-height: 14px;
    font-size: 12px;
    display: flex;
    align-items: center;
    width: 1200px;
    margin: 20px auto;
    > a {
      color: #787878;
    }
  }
  > .contentMain {
    width: 1200px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    > .left {
      width: 896px;
      margin-right: 20px;
      font-size: 14px;
      color: #111;
      > .maintitle {
        display: flex;
        flex-direction: column;
        align-items: center;
        > .word10 {
          height: 29px;
          overflow-wrap: break-word;
          color: rgba(17, 17, 17, 1);
          font-size: 30px;
          text-align: center;
          white-space: nowrap;
          line-height: 30px;
          display: block;
          margin-top: 100px;
          font-weight: bold;
        }
        > .bd7 {
          height: 15px;
          margin-top: 19px;
          display: flex;
          justify-content: space-between;
          flex-direction: row;
          > .grounp4 {
            height: 14px;
            overflow-wrap: break-word;
            font-size: 0;
            text-align: left;
            white-space: nowrap;
            line-height: 14px;
            margin-top: 1px;
          }
          > .grounp5 {
            margin: 0 36px;
            height: 14px;
            overflow-wrap: break-word;
            font-size: 0;
            text-align: left;
            white-space: nowrap;
            line-height: 14px;
            margin-top: 1px;
          }
          > .grounp6 {
            height: 15px;
            overflow-wrap: break-word;
            font-size: 0;
            text-align: left;
            white-space: nowrap;
            line-height: 14px;
          }
        }
      }
      > .box2 {
        margin-top: 29px;
        display: flex;
        flex-direction: column;
        > .section1 {
          height: 141px;
          background: url(https://ikj-storage-front-prod.oss-cn-beijing.aliyuncs.com/app/html-pc/alxq/backwhite.png)
            no-repeat;
          width: 896px;
          padding: 33px 0;
          display: flex;
          flex-direction: column;
          > .group7 {
            width: 820px;
            height: 60px;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            margin: 0 auto;
            > .box3 {
              width: 163px;
              height: 47px;
              display: flex;
              flex-direction: column;
              align-items: center;
              margin-top: 6px;
            }
            > .box4 {
              background-color: #eeeeee;
              width: 1px;
              height: 60px;
              display: flex;
              flex-direction: column;
            }
          }
        }
        > .section2 {
          height: 460px;
          width: 800px;
          margin: 33px 0 0 48px;
          position: relative;
          border-radius: 10px;
        }
        > .section4 {
          width: 880px;
          min-height: 100%;
          margin: 40px 0 0 0;
          display: flex;
          flex-direction: column;
          > p {
            margin: 0 auto;
            min-height: 30px;
          }
          > .image-wrap {
            align-items: center;
            > img {
              margin: 0 auto;
              display: block;
              max-width: 100% !important;
            }
          }
        }
        > .bd14 {
          width: 880px;
          height: 18px;
          margin: 0 auto;
          margin-top: 38px;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          > a {
            color: #111;
            > .pagenav {
              display: flex;
              flex-direction: row;
              cursor: pointer;
              > .labe16 {
                width: 17px;
                height: 8px;
                margin-top: 6px;
              }
              > span {
                width: 385px;
                height: 18px;
                overflow-wrap: break-word;
                color: rgba(120, 120, 120, 1);
                font-size: 18px;
                text-align: left;
                white-space: nowrap;
                line-height: 18px;
                margin-left: 4px;
                display: block;
              }
            }
          }
        }
      }
    }
    > .right {
      width: 300px;
      margin-top: 188px;
    }
  }
}
// 底部
.bd15 {
  background-color: rgba(245, 246, 251, 1);
  height: 838px;
  width: 100%;
  position: relative;
  margin-top: 98px;
  padding-top: 88px;
  display: flex;
  flex-direction: column;
  > .layer5 {
    width: 1216px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    > .bd16 {
      width: 1200px;
      height: 40px;
      margin-left: 16px;
      font-weight: bold;
      display: flex;
      flex-direction: column;
    }
    > .bd17 {
      width: 1212px;
      flex-wrap: wrap;
      margin: 0 auto;
      > .card {
        width: 100%;
        display: flex;
      }
    }
    > .bd18 {
      flex-shrink: 0;
      height: 100%;
      position: relative;
      margin: 0 auto;
      > img {
        width: 1200px;
        height: 160px;
      }
    }
  }
}
// 轮播
.swiper-container {
  width: 800px;
  height: 460px;
  border-radius: 10px;
  --swiper-navigation-size: 15px;
  > .swiper-slide {
    position: relative;
  }
}
.word15 {
  display: block;
  position: absolute;
  bottom: 0;
  z-index: 99;
  padding: 40px 20px;
  width: 800px;
  background-color: rgba(11, 11, 11, 0.2);
  color: white;
}
.banner {
  height: 460px;
  width: 800px;
  max-width: 100%;
}
.swiper-button-prev,
.swiper-button-next {
  position: absolute;
  height: 44px;
  width: 44px;
  border-radius: 50%;
  cursor: pointer;
  color: white;
  padding: 10px;
  background-color: rgba(11, 11, 11, 0.2);
}
// 卡片
.house-case-cell {
  margin: 0 0 21px 10px;
  width: 290px;
  height: 329px;
  background: #fff;
  border: 1px solid #e5e5e5;
  border-radius: 6px;
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
// 右侧
.text8 {
  width: 29px;
  height: 14px;
  overflow-wrap: break-word;
  color: rgba(72, 72, 72, 1);
  font-size: 14px;
  text-align: center;
  white-space: nowrap;
  line-height: 14px;
  margin-left: 14px;
  display: block;
}
.info14 {
  width: 56px;
  height: 15px;
  overflow-wrap: break-word;
  color: rgba(72, 72, 72, 1);
  font-size: 14px;
  text-align: center;
  white-space: nowrap;
  line-height: 15px;
  margin-top: 6px;
  display: block;
}
.right {
  width: 300px;
  margin-top: 188px;
  > .box12 {
    width: 300px;
    height: 2026px;
    margin-top: 4px;
    display: flex;
    flex-direction: column;
    > .main2 {
      display: flex;
      flex-direction: column;
      justify-content: center;
      background-color: rgba(255, 255, 255, 1);
      border-radius: 6px;
      border: 1px solid rgba(229, 229, 229, 1);
      padding: 30px;
      padding-left: 18px;
      width: 300px;
      > .main2-1 {
        width: 261px;
        display: flex;
        flex-direction: column;
        > img {
          width: 156px;
          height: 156px;
          margin-left: 53px;
          border-radius: 50%;
        }
        > .word19 {
          height: 18px;
          overflow-wrap: break-word;
          color: rgba(30, 30, 30, 1);
          font-size: 18px;
          text-align: center;
          white-space: nowrap;
          line-height: 18px;
          display: block;
          font-weight: bold;
          margin-top: 28px;
        }
        > .layer1 {
          width: 261px;
          height: 35px;
          margin-top: 30px;
          display: flex;
          flex-direction: row;
          > .wrap {
            background-color: rgba(238, 238, 238, 1);
            width: 1px;
            height: 33px;
            margin: 1px 0 0 28px;
          }
          > .textgroup1 {
            height: 35px;
            width: 56px;
            display: flex;
            justify-content: space-between;
            flex-direction: column;
          }
          > .textgroup2 {
            height: 35px;
            width: 55px;
            margin-left: 19px;
            display: flex;
            justify-content: space-between;
            flex-direction: column;
          }
          > .textgroup3 {
            height: 35px;
            width: 55px;
            margin-left: 24px;
            display: flex;
            justify-content: space-between;
            flex-direction: column;
          }
        }
        > .layer2 {
          background-color: rgba(237, 98, 43, 1);
          border-radius: 4px;
          height: 44px;
          padding-left: 101px;
          width: 260px;
          margin: 14px 0 0 1px;
          cursor: pointer;
        }
      }
    }
    > .main4 {
      width: 300px;
      height: 378px;
      z-index: 0;
      background: rgb(255, 255, 255);
      position: static;
      top: 0px;
      border-radius: 6px;
      border: 1px solid rgba(229, 229, 229, 1);
      box-shadow: #787878;
      margin-top: 16px;
      padding-top: 45px;
      display: flex;
      align-items: center;
      > .outer2 {
        width: 260px;
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        > .info16 {
          height: 18px;
          overflow-wrap: break-word;
          color: rgba(30, 30, 30, 1);
          font-size: 18px;
          text-align: center;
          white-space: nowrap;
          line-height: 18px;
          font-weight: bold;
          display: block;
          margin: 0 auto;
        }
        > .mod {
          width: 210px;
          height: 15px;
          overflow-wrap: break-word;
          font-size: 0;
          font-family: MicrosoftYaHei;
          text-align: center;
          white-space: nowrap;
          line-height: 15px;
          margin: 20px 0 7px 24px;
          > .word22 {
            width: 210px;
            height: 15px;
            overflow-wrap: break-word;
            color: rgba(30, 30, 30, 1);
            font-size: 14px;
            font-family: MicrosoftYaHei;
            text-align: left;
            white-space: nowrap;
            line-height: 14px;
          }
          > .text11 {
            width: 210px;
            height: 15px;
            overflow-wrap: break-word;
            color: rgba(237, 98, 43, 1);
            font-size: 14px;
            text-align: left;
            white-space: nowrap;
            line-height: 14px;
          }
          > .word23 {
            width: 210px;
            height: 15px;
            overflow-wrap: break-word;
            color: rgba(30, 30, 30, 1);
            font-size: 14px;
            font-family: MicrosoftYaHei;
            text-align: left;
            white-space: nowrap;
            line-height: 14px;
          }
        }
        > .form {
          display: block;
          margin: 0 auto;
          > .formitem {
            width: 260px;
            height: 44px;
            border-radius: 6px;
            margin-top: 12px;
            padding: 16px 20px 15px 16px;
            display: flex;
            flex-direction: row;
            align-items: center;
            position: relative;
            > div {
              color: #787878;
            }
            > input {
              width: 100%;
              border: none;
              outline: none;
              background-color: #eee;
              padding: 10px;
            }
          }
        }
        > .mod6 {
          background-color: rgba(237, 98, 43, 1);
          border-radius: 4px;
          height: 44px;
          margin-top: 20px;
          width: 260px;
          cursor: pointer;
          > span {
            width: 71px;
            height: 44px;
            margin: 0 auto;
            color: rgba(255, 255, 255, 1);
            font-size: 18px;
            white-space: nowrap;
            line-height: 44px;
            display: block;
          }
        }
      }
    }
    > .main6 {
      background-color: rgba(255, 255, 255, 1);
      border-radius: 6px;
      border: 1px solid rgba(229, 229, 229, 1);
      margin-top: 16px;
      width: 300px;
      padding: 45px 0 0 19px;
      display: flex;
      flex-direction: column;
      > .text13 {
        overflow-wrap: break-word;
        color: rgba(30, 30, 30, 1);
        font-size: 18px;
        text-align: center;
        white-space: nowrap;
        display: block;
        font-weight: bold;
      }
      > .main6-1 {
        width: 100%;
        margin-top: 10px;
        > a {
          width: 90%;
          display: flex;
          margin-bottom: 20px;
          > img {
            width: 128px;
            height: 80px;
          }
          > span {
            margin-top: 10px;
            padding: 5px;
            width: 126px;
            height: 45px;
            color: rgba(72, 72, 72, 1);
            font-size: 14px;
            text-align: left;
            line-height: 22px;
            white-space: pre-wrap;
            overflow: hidden;
            text-overflow: ellipsis;
            line-clamp: 2;
          }
        }
      }
    }
  }
}
</style>
