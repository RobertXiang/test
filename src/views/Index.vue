<template>
  <div class="index">
    <!-- 轮播图 -->
    <div class="banner">
      <el-carousel trigger="click" :interval="4000" arrow="always">
        <el-carousel-item>
          <img src="../assets/img/banner1.jpg" alt />
        </el-carousel-item>
        <el-carousel-item>
          <img src="../assets/img/banner2.jpg" alt />
        </el-carousel-item>
        <el-carousel-item>
          <img src="../assets/img/banner3.jpg" alt />
        </el-carousel-item>
        <el-carousel-item>
          <img src="../assets/img/banner4.jpg" alt />
        </el-carousel-item>
        <el-carousel-item>
          <img src="../assets/img/banner5.jpg" alt />
        </el-carousel-item>
        <el-carousel-item>
          <img src="../assets/img/banner6.jpg" alt />
        </el-carousel-item>
      </el-carousel>
    </div>

    <!-- 轮播图下方小图标 -->
    <div class="column">
      <div class="center">
        <ul>
          <li>
            <div>
              <p>零元设计</p>
              <span>量房、出方案、做预算</span>
            </div>
            <img src="../assets/icon/存款.png" alt />
          </li>
          <li>
            <div>
              <p>在线报价</p>
              <span>10秒估算装修报价</span>
            </div>
            <img src="../assets/icon/在线报价.png" alt />
          </li>
          <li>
            <div>
              <p>智选公司</p>
              <span>大数据智选3家公司</span>
            </div>
            <img src="../assets/icon/智选公司.png" alt />
          </li>
          <li>
            <div>
              <p>免费招标</p>
              <span>推荐适合您的装修公司</span>
            </div>
            <img src="../assets/icon/免费招标.png" alt />
          </li>
          <li>
            <div>
              <p>免费验房</p>
              <span>提供优质免费验房服务</span>
            </div>
            <img src="../assets/icon/免费验房.png" alt />
          </li>
        </ul>
      </div>
    </div>

    <!-- 省心施工 -->
    <div class="cost">
      <div class="center">
        <div class="cost1">
          <h1>美墅装修 装修从未如此省心</h1>
          <span>标准化家装首创者，解放一代年轻人</span>
        </div>
        <div class="cost2">
          <ul>
            <li>
              <h2>一站式整装</h2>
              <h2>标准化品质</h2>
            </li>
            <li>
              <a href="/construct?activeIndex=4">
                <img
                  src="https://ikj-storage-front-prod.oss-cn-beijing.aliyuncs.com/app/html-pc/index/canyegongren12.png"
                  alt
                />
              </a>
              <span>100%直管产业工人</span>
            </li>
            <li>
              <a href="/construct">
                <img
                  src="https://ikj-storage-front-prod.oss-cn-beijing.aliyuncs.com/app/html-pc/index/guanjia12.png"
                  alt
                />
              </a>
              <span>1V1专属管家</span>
            </li>
            <li>
              <a href="/construct">
                <img
                  src="https://ikj-storage-front-prod.oss-cn-beijing.aliyuncs.com/app/html-pc/index/33tianxiao.png"
                  alt
                />
              </a>
              <span>33天标准工期</span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- 甄选套餐 -->
    <div class="cmeal">
      <div class="center">
        <div class="cm1">
          <h1>一站式全屋整装 闭着眼睛选 件件好品质</h1>
          <span>整装套餐-从施工到主材一站式全搞定</span>
        </div>
        <div class="cm2">
          <ul>
            <li>
              <img
                src="https://ikj-storage-front-prod.oss-cn-beijing.aliyuncs.com/app/html-pc/index/xiefang.png"
                alt
              />
              <p>精准量房</p>
            </li>
            <li>
              <img
                src="https://ikj-storage-front-prod.oss-cn-beijing.aliyuncs.com/app/html-pc/index/bi.png"
                alt
              />
              <p>大师设计</p>
            </li>
            <li>
              <img
                src="https://ikj-storage-front-prod.oss-cn-beijing.aliyuncs.com/app/html-pc/index/anquanmao.png"
                alt
              />
              <p>品质施工</p>
            </li>
            <li>
              <img
                src="https://ikj-storage-front-prod.oss-cn-beijing.aliyuncs.com/app/html-pc/index/chuguidianxiang.png"
                alt
              />
              <p>整体厨房</p>
            </li>
            <li>
              <img
                src="https://ikj-storage-front-prod.oss-cn-beijing.aliyuncs.com/app/html-pc/index/fangshuitucheng.png"
                alt
              />
              <p>打牌建材</p>
            </li>
            <li>
              <img
                src="https://ikj-storage-front-prod.oss-cn-beijing.aliyuncs.com/app/html-pc/index/renjilingdai.png"
                alt
              />
              <p>全程托管</p>
            </li>
          </ul>
        </div>
        <div class="cm3">
          <div style="display:block" class="cm3-left cl1">
            <span>Home套餐</span>
            <span>新中产优选</span>
            <p>高端配置 细节完胜</p>
            <button>
              <router-link to="/combomeal">了解详情</router-link>
            </button>
          </div>
          <div style="display:none" class="cm3-left cl2">
            <span>Magic套餐</span>
            <span>性价比之光</span>
            <p>功能强大 面面俱到</p>
            <button>
              <router-link to="/combomeal">了解详情</router-link>
            </button>
          </div>
          <div class="cm3-right">
            <a href="/combomeal">
              <img
                style="display:block"
                class="imgb"
                src="https://ikj-public.oss-cn-beijing.aliyuncs.com/market/7d148183/c2e5a508/ccb98d2a/ce528054/bDI0M2t3aHnlrpjnvZFob21lXzIwMjItMDQtMThUMTA6Mjg6MjYuODcx.png"
                alt
              />
            </a>
            <a href="/combomeal">
              <img
                style="display:none"
                class="imgi"
                src="https://ikj-public.oss-cn-beijing.aliyuncs.com/market/7d148183/c2e5a508/ccb98d2a/ce528054/bDI0MnlrbDflrpjnvZFtYWdpY18yMDIyLTA0LTE4VDEwOjE3OjUzLjEzNQ==.png"
                alt
              />
            </a>
            <i @click="taca" class="el-icon-back"></i>
            <i @click="taca" class="el-icon-right btn"></i>
          </div>
        </div>
      </div>
    </div>

    <!-- 效果图 -->
    <div class="fw">
      <div class="center">
        <div class="zi">
          <h1>装修效果图</h1>
          <p style="font-size: 18px; color: #414141; margin-top: 30px">
            全流程好服务 一站式省心交付 / 从施工到验收 高品质省心装 /
            装修从此信息化 告别一切麻烦事
          </p>
        </div>
        <ul>
          <li>
            <a href="/houseCase">
              <img src="../assets/img/services-img1.jpg" alt style="margin-top: 15px" />
            </a>
            <h4 style="font-size: 24px; color: #414141">新中式</h4>
            <span style="font-size: 16px; margin: 0 0 15px; color: gray">现代人的东方美学情怀</span>
          </li>
          <li>
            <a href="/houseCase">
              <img src="../assets/img/services-img2.jpg" alt style="margin-top: 15px" />
            </a>
            <h4 style="font-size: 24px; color: #414141">法式轻奢</h4>
            <span style="font-size: 16px; margin: 0 0 15px; color: gray">花漾私宅 过仪式感的日子</span>
          </li>
          <li>
            <a href="/houseCase">
              <img src="../assets/img/services-img3.jpg" alt style="margin-top: 15px" />
            </a>
            <h4 style="font-size: 24px; color: #414141">美式</h4>
            <span style="font-size: 16px; margin: 0 0 15px; color: gray">造一座秘密花园</span>
          </li>
          <li>
            <a href="/houseCase">
              <img src="../assets/img/services-img4.jpg" alt style="margin-top: 15px" />
            </a>
            <h4 style="font-size: 24px; color: #414141">现代简约</h4>
            <span style="font-size: 16px; margin: 0 0 15px; color: gray">工作与工作的简约序曲</span>
          </li>
        </ul>
      </div>
    </div>

    <!-- 设计师 -->
    <div class="designer">
      <!-- 版心 -->
      <div class="center">
        <!-- 文字描述 -->
        <div class="cent">
          <span>____创意团队</span>
          <h1>明星设计师 1对1专属服务</h1>
          <span>从业资历10年以上，上百套服务经验</span>
        </div>
        <!-- 设计师卡片 -->
        <div class="card">
          <ul>
            <li>
              <img src="/designer/d1.jpg" alt />
              <div class="item">
                <h3>杜晓娟</h3>
                <span>12年从业经验</span>
                <span>擅长风格：复古风 、日式 、新中式</span>
              </div>
            </li>
            <li>
              <img src="/designer/d2.jpg" alt />
              <div class="item">
                <h3>杜晓娟</h3>
                <span>12年从业经验</span>
                <span>擅长风格：复古风 、日式 、新中式</span>
              </div>
            </li>
            <li>
              <img src="/designer/d3.jpg" alt />
              <div class="item">
                <h3>杜晓娟</h3>
                <span>12年从业经验</span>
                <span>擅长风格：复古风 、日式 、新中式</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- 展示数据
    <div class="footData">
      <div class="center">
        <div class="data1">
          <h1>美墅设计</h1>
          <h1>让家的美好，简单实现</h1>
        </div>
        <div class="data2">
          <ul>
            <li>
              <h2>No.1</h2>
              <span>标准化家装开创者</span>
            </li>
            <li>
              <h2>70000+</h2>
              <span>家庭信赖首选</span>
            </li>
            <li>
              <h2>72.7%</h2>
              <span>NPS净推荐值</span>
            </li>
          </ul>
          <ul>
            <li>
              <h2>15 家</h2>
              <span>直营分公司</span>
            </li>
            <li>
              <h2>一线</h2>
              <span>品质环保建材</span>
            </li>
            <li>
              <h2>10 年</h2>
              <span>水电防水质保</span>
            </li>
          </ul>
        </div>
      </div>
    </div>-->

    <!-- 吸底组件 -->
    <div class="footer" v-show="Gbshow">
      <!-- 版心 -->
      <div class="center">
        <div class="f1" style="display: flex">
          <img src="@/assets/icon/xdzj.png" alt />
          <div style="margin-left: 150px; margin-top: 15px">
            <h2 style="font-weight: 600; color: white; white-space: nowrap">我家装修多少钱？</h2>
            <span style="font-size: 14px">已为50000个家庭提供服务</span>
          </div>
        </div>
        <div class="f2">
          <h1>160275</h1>
          <span>元</span>
        </div>
        <div class="f3">
          <span
            v-for="(nav, i) in navs"
            :key="i"
            @click="now=i"
            :class="{active:now==i}"
            style="padding: 15px"
          >{{nav}}</span>
        </div>
        <div class="f4">
          <div class="lx">
            <el-select v-model="value" placeholder="城市">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
            <input class="mj" type="text" placeholder="面积" />
          </div>
          <input id="int" type="text" placeholder="联系方式" />
          <button @click="getValue">立即预约</button>
          <i @click="clickGb" id="ix" class="el-icon-close"></i>
        </div>
      </div>
    </div>

    <!-- 回到顶部 -->
    <!-- <v-back-top style="bottom: 150px"></v-back-top> -->

    <!-- 人工客服 -->
    <div class="rgfw">
      <v-icon @click.native="click" id="xx" type="message"></v-icon>
      <ke-fu v-if="show" :show="show"></ke-fu>
    </div>
  </div>
</template>

<script>
import KeFu from "@/components/KeFu.vue";
export default {
  components: { KeFu },
  data() {
    return {
      taocan: 0,
      // 客服隐藏
      show: false,
      // 吸底组件显示
      Gbshow: true,
      // 吸底组件的城市选择
      options: [
        {
          value: "1",
          label: "北京"
        },
        {
          value: "2",
          label: "上海"
        },
        {
          value: "3",
          label: "成都"
        },
        {
          value: "4",
          label: "重庆"
        },
        {
          value: "5",
          label: "大连"
        }
      ],
      value: "",
      // 新老房切换
      navs: ["新房", "老房"],
      now: 0
    };
  },
  methods: {
    connected() {
      this.$socket.open(); // 开始连接socket
    },
    // 客服显示与隐藏
    click() {
      this.show = !this.show;
    },
    // 关闭吸底组件
    clickGb() {
      if (this.Gbshow) {
        this.Gbshow = false;
        setInterval(() => {
          // 滑动展开
          $(".footer").slideDown(2000);
        }, 2000);
      }
    },
    // 获取吸底组件的预约信息
    getValue() {
      let int = document.querySelector("#int");
      let mj = document.querySelector(".mj");
      // 获取输入框中的值
      let homeValue = "新房";
      if (this.now == 1) {
        homeValue = "老房";
      } else {
        homeValue = "新房";
      }
      let intValue = int.value;
      let mjValue = mj.value;
      let cityValue = this.options[this.value - 1].label;
      let url = `http://127.0.0.1:3000/mfsj/set`;
      let params = `city=${cityValue}&asea=${mjValue}&phone=${intValue}&newandold=${homeValue}`;
      this.axios.post(url, params).then(res => {
        console.log(res);
      });
    },
    // 套餐点击切换
    taca() {
      let imgb = document.querySelector(".imgb");
      let imgi = document.querySelector(".imgi");
      let cl1 = document.querySelector(".cl1");
      let cl2 = document.querySelector(".cl2");
      if (imgb.style.display == "block" && cl1.style.display == "block") {
        imgb.style.display = "none";
        imgi.style.display = "block";
        cl1.style.display = "none";
        cl2.style.display = "block";
      } else {
        imgb.style.display = "block";
        imgi.style.display = "none";
        cl1.style.display = "block";
        cl2.style.display = "none";
      }
    }
  }
};
</script>
<style src="../assets/index.css"></style>