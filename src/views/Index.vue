<template>
  <div class="index">
    <!-- 轮播图 -->
    <!-- <div class="banner">
      <el-carousel :interval="5000" arrow="always">
        <el-carousel-item v-for="item in imges" :key="item">
          <img width="100%" :src="item.url" alt height="600px" />
        </el-carousel-item>
      </el-carousel>
    </div>-->

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
            <img src="../assets/img/services-img1.jpg" alt style="margin-top: 15px" />
            <h4 style="font-size: 24px; color: #414141">33天装修日历</h4>
            <span
              style="font-size: 16px; margin: 0 0 15px; color: gray"
            >每一天的进度有迹可循，标准化工艺工序100%落地，工期一天不浪费。</span>
          </li>
          <li>
            <img src="../assets/img/services-img2.jpg" alt style="margin-top: 15px" />
            <h4 style="font-size: 24px; color: #414141">锁定工期 解放身心</h4>
            <span
              style="font-size: 16px; margin: 0 0 15px; color: gray"
            >自有产业工人，企业100%直管；集团战略直采，大牌产品工厂直达；16种标准化SOP，100%统一工序。</span>
          </li>
          <li>
            <img src="../assets/img/services-img3.jpg" alt style="margin-top: 15px" />
            <h4 style="font-size: 24px; color: #414141">标准化交付体系 改变工期不确定</h4>
            <span
              style="font-size: 16px; margin: 0 0 15px; color: gray"
            >准时工期的4大关键：直管产业工人、自建仓储物流、标准化施工工序、APP锁定工期。</span>
          </li>
          <li>
            <img src="../assets/img/services-img4.jpg" alt style="margin-top: 15px" />
            <h4 style="font-size: 24px; color: #414141">全球大牌厂家直发 工期提速30%</h4>
            <span
              style="font-size: 16px; margin: 0 0 15px; color: gray"
            >自建30000m²大仓+全国物流，供应链够强大，工期自然可控。</span>
          </li>
          <!-- <li>
            <img
              src="../assets/img/services-img5.jpg"
              alt=""
              style="margin-top: 15px"
            />
            <h4 style="font-size: 24px; color: #414141">
              流水线施工进度 16个工种依次进场
            </h4>
            <span style="font-size: 16px; margin: 0 0 15px; color: gray"
              >标准化施工SOP+产业工人模式，科学施工保证工期，6806位认证在册工人，企业100%直管到每一位工人。</span
            >
          </li>
          <li>
            <img
              src="../assets/img/services-img6.jpg"
              alt=""
              style="margin-top: 15px"
            />
            <h4 style="font-size: 24px; color: #414141">
              一站式超省心家装体验
            </h4>
            <span style="font-size: 16px; margin: 0 0 15px; color: gray"
              >“省心装修 从容生活” 选择您需要的专享服务。</span
            >
          </li>-->
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
    <v-back-top style="bottom: 150px"></v-back-top>

    <!-- 人工客服 -->
    <!-- <div class="rgfw">
      <v-icon @click.native="click" id="xx" type="message"></v-icon>
      <ke-fu v-show="show"></ke-fu>
    </div>-->
  </div>
</template>

<script>
import KeFu from "@/components/KeFu.vue";
export default {
  components: { KeFu },
  data() {
    return {
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
      now: 0,
      // 轮播图地址数组
      imges: [
        { url: require("../assets/img/banner1.jpg") },
        { url: require("../assets/img/banner2.jpg") },
        { url: require("../assets/img/banner3.jpg") },
        { url: require("../assets/img/banner4.jpg") },
        { url: require("../assets/img/banner5.jpg") },
        { url: require("../assets/img/banner6.jpg") }
      ]
    };
  },
  methods: {
    connected() {
      this.$socket.open(); // 开始连接socket
    },
    // 客服显示与隐藏
    click() {
      this.show = !this.show;
      if (this.show) {
        this.show = true;
      } else {
        this.show = false;
      }
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
    getValue() {
      let int = document.querySelector("#int");
      let mj = document.querySelector(".mj");
      // 获取输入框中的值
      if (this.now == 1) {
        ("老房");
      } else {
        ("新房");
      }

      let homeValue = this.now;
      let intValue = int.value;
      let mjValue = mj.value;
      let cityValue = this.options[this.value - 1].label;
      console.log(intValue);
      console.log(mjValue);
      console.log(cityValue);
      console.log(homeValue);
    }
  }
};
</script>

<style src="@/assets/Index.css"></style>
<style scoped></style>
