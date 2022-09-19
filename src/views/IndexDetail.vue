<template>
  <!-- 案例详情 -->
  <div id="main">
    <!-- 顶部导航栏 -->
    <div class="pic1" v-if="data">
      <div v-for="i in data.data" :key="i.xqid">
        <img :src="i.xqpic" alt="" />
        <van-nav-bar
          left-text=""
          left-arrow
          @click-left="goAnli()"
        ></van-nav-bar>
      </div>
    </div>
    <div v-if="data">
      <div class="text" v-for="p in data.data" :key="p.xqid">
        <p class="ziti">{{ p.xqtitle }}</p>
        <button class="button disabled">生活灵感</button>
        <button class="button disabled">软装指南</button>
        <button class="button disabled">色彩搭配</button>
        <table>
          <tr>
            <th>户型</th>
            <th>面积</th>
            <th>地区</th>
            <th>风格</th>
          </tr>
          <tr>
            <td>{{ p.xqfx }}</td>
            <td>{{ p.area }}</td>
            <td>{{ p.city }}</td>
            <td>{{ p.xqfg }}</td>
          </tr>
        </table>

        <div class="item">
          <h3>* 设计理念</h3>
          <p>
            业主夫妇也算半个行业人，从事设计相关的工作，加上平时喜欢收藏好物，对配色有一定要求，设计师根据业主需求，以“个性简雅”为设计理念，打造出符合业主需求的居住场所。全屋以中性色作为空间配色，家具的选择从简约时尚的角度出发，抛却繁复的装饰，打造出惬意温馨的家居生活。
          </p>
        </div>
        <div class="item">
          <h3>* 设计风格</h3>
          <p>
            这套房子的面积为98平米，平时只有我们两人佳，设计师根据我和@大宇的需求和生活马惯，选择了暖色调的北欧风格，对空间进行重新规划，加入硬朗的线条、活泼的时尚色彩，以及温馨的原木和通透的玻璃材质，并且在屋内放上绿植～打造了个舒适而又生机勃勃的家。
          </p>
        </div>
        <div>
          <h3>设计后户型图</h3>
          <img
            src="https://ikj-public.oss-cn-beijing.aliyuncs.com/market/10bf05ec/9534d895/e282f33d/96fe71b8/dW5kZWZpbmVkMV8yMDIyLTA0LTA3VDE2OjQ1OjI3LjExMg==.jpg"
            alt=""
            style="width: 100%"
          />
          <div style="margin-top: 10px; color: rgb(99, 97, 97)">
            <p>
              1、将餐厅与多功能区之问的墙体改为折着门作为隔断，不破坏整体性；
            </p>
            <p>2、阳台一分为二，生活和休闲，功能分区更明确；</p>
            <p>3、将主卧阳台并入，让卧至面积更完敞。</p>
          </div>
        </div>

        <div class="tu">
          <img :src="p.xqpic1" alt="" />
          <p>{{ p.xqtext1 }}</p>
        </div>
        <div class="tu">
          <img :src="p.xqpic2" alt="" />
          <p>{{ p.xqtext2 }}</p>
        </div>
        <div class="tu">
          <img :src="p.xqpic3" alt="" />
          <p>{{ p.xqtext3 }}</p>
        </div>
        <div class="tu">
          <img :src="p.xqpic4" alt="" />
          <p>{{ p.xqtext4 }}</p>
        </div>
        <div class="tu">
          <img :src="p.xqpic5" alt="" />
          <p>{{ p.xqtext5 }}</p>
        </div>
      </div>
    </div>

    <div class="sjx">
      <div class="top">
        <van-image
          style="margin-left: -30px"
          round
          width="4rem"
          height="4rem"
          src="https://ikj-public.oss-cn-beijing.aliyuncs.com/kylin/1921f4cf/f9347449/c3ffe071/457bed7d/ZGVzaWduZXJfLzViNTkxZmJlOWNiZTRmNjkzMWMyZmM5OTYyZDg1ODU5XzIwMjItMDYtMzBUMjI6MjA6NDguODM5.jpg"
        />
        <div class="q2" style="margin-left: -40px">
          <h6 style="font-size: 18px">今日设计顾问小宁</h6>
          <p style="font-size: 14px; color: orange">轻奢风-现代简约-新古典</p>
        </div>
        <button class="button button1">在线咨询</button>
      </div>
      <div class="bot">
        <span>找他/她问问</span>
        <button class="button button2">小型户</button>
        <button class="button button2">老房拆改</button>
        <button class="button button2">我也想装</button>
      </div>
    </div>

    <div class="al" style="padding: 10px">
      <h3>其他案例</h3>
      <ul>
        <li>
          <img
            src="https://ikj-public.oss-cn-beijing.aliyuncs.com/market/d10af457/daa1deed/54e2c36b/5f295e7e/bDFvdGx2Z2EzXzIwMjItMDQtMDdUMTc6NTQ6MjUuMDA2.jpg"
            alt=""
            style="margin-top: 15px"
          />
          <span>锦绣天伦平米三居室现代简约风装修案例</span>
          <del style="float: left">北欧风·98m²</del>
          <del style="float: right">北京</del>
          <br />
          <button class="button disabled1">生活灵感</button>
          <button class="button disabled2">户型改造</button>
        </li>
        <li>
          <img
            src="https://ikj-public.oss-cn-beijing.aliyuncs.com/market/d10af457/daa1deed/54e2c36b/5f295e7e/bDFvdGx2Z20yXzIwMjItMDQtMDdUMTg6MDA6MDQuNDg0.jpg"
            alt=""
            style="margin-top: 15px"
          />
          <span>骏景花园95平米三居室现代简约风装修案例</span>
          <del style="float: left">北欧风·98m²</del>
          <del style="float: right">北京</del>
          <br />
          <button class="button disabled1">生活灵感</button>
          <button class="button disabled2">软装指南</button>
        </li>
        <li>
          <img
            src="https://ikj-public.oss-cn-beijing.aliyuncs.com/market/d10af457/daa1deed/54e2c36b/5f295e7e/bDFvdGx2Z2EzXzIwMjItMDQtMDdUMTc6NTQ6MjUuMDA2.jpg"
            alt=""
            style="margin-top: 15px"
          />
          <span>锦绣天伦平米三居室现代简约风装修案例</span>
          <del style="float: left">北欧风·98m²</del>
          <del style="float: right">北京</del>
          <br />
          <button class="button disabled1">生活灵感</button>
          <button class="button disabled2">户型改造</button>
        </li>

        <li>
          <img
            src="https://ikj-public.oss-cn-beijing.aliyuncs.com/market/d10af457/daa1deed/54e2c36b/5f295e7e/bDFvdGx2Z20yXzIwMjItMDQtMDdUMTg6MDA6MDQuNDg0.jpg"
            alt=""
            style="margin-top: 15px"
          />
          <span>骏景花园95平米三居室现代简约风装修案例</span>
          <del style="float: left">北欧风·98m²</del>
          <del style="float: right">北京</del>
          <br />
          <button class="button disabled1">生活灵感</button>
          <button class="button disabled2">软装指南</button>
        </li>
      </ul>
    </div>

    <div id="footer">
      <div class="dh">
        <img src="/img/Snipaste_2022-09-06_01-02-12.png" alt="" />
        400直拨
      </div>
      <span>在线问专家</span>
      <span>预约设计</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: null,
    }
  },
  methods: {
    getData() {
      let id = this.$route.query.index
      console.log(id)
      let url = `/anli/xqal/${id}`
      this.axios(url).then(res => {
        console.log(res)
        this.data = res.data
      })
    },
    goAnli() {
      this.$router.push('/')
    },
  },
  mounted() {
    this.getData()
  },
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.pic1 img {
  width: 100%;
  height: 32vh;
}
.van-nav-bar {
  line-height: 0;
}
::v-deep .van-nav-bar .van-icon {
  font-size: 20px;
  color: white;
  position: absolute;
  left: 20px;
  top: -250px;
}
::v-deep .van-nav-bar__content {
  padding-top: 0;
  height: 0;
  top: -4vw;
  height: 0;
}
.text {
  padding: 10px;
}
.text .ziti {
  font-size: 1.1rem;
  color: #111;
}
.text button {
  border: none;
  color: #dd772e;
  font-size: 12px;
  margin: 10px 10px;
  padding: 6px;
  border-radius: 3px;
}
.text button:nth-child(2) {
  margin-left: 4px;
}
.text table {
  border-collapse: collapse;
  width: 100%;
  border: 1px solid #eee;
  background-color: rgb(248, 249, 249);
  margin-bottom: 10px;
}
.text th,
td {
  padding: 8px;
  text-align: left;
}
h3 {
  padding: 6px;
}
.item p {
  padding: 6px;
  color: rgb(99, 97, 97);
  font-weight: 300;
  line-height: 1.8rem;
}

.tu img {
  width: 100%;
  margin: 6px;
  border-radius: 3px;
}
.tu p {
  padding: 6px;
  line-height: 1.7rem;
  font-size: 18px;
  color: rgb(99 97 97);
}
.sjx {
  border: 1px solid #aaa;
  border-radius: 5px;
  margin: 0 12px;
}
.top {
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
  background-color: rgb(246, 246, 246);
}
.top button {
  background-color: rgb(255, 105, 0);
  color: #fff;
  border: none;
  border-radius: 3px;
  padding: 8px;
  width: 20vw;
  font-size: 10px;
  margin-left: -14px;
}
.bot {
  display: flex;
  justify-content: space-around;
  padding: 10px;
  align-items: center;
}
.bot button {
  border-radius: 30px;
  padding: 2px;
  width: 18vw;
  font-size: 13px;
  border: none;
  background-color: rgb(255, 105, 0);
  color: #fff;
  height: 25px;
  align-items: center;
}
.al {
  padding: 10px;
  margin-bottom: 3vh;
}
.al ul {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.al ul li {
  background-color: white;
  width: 45vw;
  height: 30vh;
  border-radius: 5px;
  margin-bottom: 10px;
  justify-content: space-between;
}
.al ul li img {
  width: 100%;
  height: 15vh;
  border-radius: 5px;
  /* margin-bottom: 10px; */
  display: inline;
}
.al ul li span {
  font-size: 13px;
  display: block;
  margin: 2px 2px;
  overflow: hidden;
  height: 40px;
}

.al ul li del {
  justify-content: space-between;
  margin-left: 5px;
  display: inline-block;
  font-size: 10px;
  color: rgb(145, 140, 140);
}
.al .disabled {
  display: inline-block;

  cursor: not-allowed;
}
.al .disabled1 {
  background-color: rgb(160, 155, 155);
  color: white;
  border: none;
  border-radius: 3px;
  font-size: 10px;
  margin: 2px 1px;
  padding: 1px 3px;
  cursor: not-allowed;
}
.al .disabled2 {
  background-color: #dd772e;
  color: white;
  border: none;
  border-radius: 3px;
  font-size: 10px;
  margin: 2px 1px;
  padding: 1px 3px;
  cursor: not-allowed;
}

.footer {
  display: flex;
  justify-content: space-between;
  padding: 0 10px 15px 10px;
}
.footer .van-grid-item__content {
  width: 14vw;
}
.footer button {
  margin: 0 5px;
  padding: 12px;
  border-radius: 5px;
  border: none;
  font-size: 16px;
  width: 137px;
}
.btn button:last-child {
  background-color: #000;
  color: #fff;
}
#footer .dh {
  display: flex;
  flex-direction: column;
  width: 14%;
  font-size: 12px;
}
#footer {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: fixed;
  bottom: -2px;
  padding: 6px;
  background-color: #fff;
  width: 100%;
  box-sizing: border-box;
}
#footer img {
  width: 30px;
}
#footer span {
  width: 34%;
  height: 45px;
  border-radius: 6px;
  font-size: 16px;
  text-align: center;
  line-height: 45px;
  align-items: center;
}
#footer span:nth-child(2) {
  border: 1px solid black;
}
#footer span:last-child {
  background-color: rgb(51, 51, 51);
  color: #fff;
}
</style>
