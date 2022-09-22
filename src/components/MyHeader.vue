<template>
  <div class="my-header">
    <!-- 导航栏1 -->
    <div class="header">
      <div class="center">
        <div class="city">
          <i style="font-size:20px" class="el-icon-location-outline"></i>
          <span id="dw" style="margin-left:5px">正在定位中...</span>
          <!-- <span v-for="dws in result" :key="dws" id="dw" style="margin-left:5px">{{dws.city}}</span> -->
        </div>
        <div class="txt">
          <a style="border: none" href="#">注册</a>
          <a href="/login">登录</a>
        </div>
      </div>
    </div>

    <!-- 导航栏2 -->
    <nav class="head">
      <div class="center">
        <div class="left">
          <a href="/" titile="美墅装修公司官网">
            <img
              class="logo"
              src="../assets/img/logo.jpg"
              alt
              width="70%"
              height="70%"
              title="爱空间装饰装修公司官网"
              style="position: relative; top: -5px"
            />
          </a>
          <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
            <el-menu-item index="/">
              <router-link to="/">首页</router-link>
            </el-menu-item>
            <el-menu-item index="/combomeal">
              <router-link to="/combomeal">甄选套餐</router-link>
            </el-menu-item>
            <el-menu-item index="/houseCase">
              <router-link to="/houseCase">整屋案例</router-link>
            </el-menu-item>
            <el-menu-item index="/construct">
              <router-link to="/construct">省心施工</router-link>
            </el-menu-item>
            <el-menu-item index="/aboutus">
              <router-link to="/aboutus">关于我们</router-link>
            </el-menu-item>
            <el-submenu style="font-size:16px !important" index="6">
              <template slot="title">APP精选</template>
              <img src="../assets/icon/app.png" alt />
            </el-submenu>
          </el-menu>
        </div>
        <div class="right">
          <img src="../assets/icon/3.1电话.png" alt style="width: 30px; heigh: 30px" />
          <span>400-6531-556</span>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
// 引入amap加载器
import AMapLoader from "@amap/amap-jsapi-loader";

export default {
  data() {
    return {
      // 默认首页高亮
      activeIndex: this.$route.path,
      data: null
    };
  },

  mounted() {
    window._AMapSecurityConfig = {
      securityJsCode: "69a302d0ab5cf1a6898f48880e3a293d"
    };
    AMapLoader.load({
      key: "b68dd0d92290d1573809299c61e7c6a7", // 申请好的Web端开发者Key，首次调用 load 时必填
      version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
      plugins: ["AMap.CitySearch"] // 需要使用的的插件列表，如比例尺'AMap.Scale'等
    }).then(AMap => {
      let CitySearch = new AMap.CitySearch();
      CitySearch.getLocalCity(function(status, result) {
        console.log(status, result);
        let city = result.city;
        let dw = document.getElementById("dw");
        dw.innerHTML = `<span id="dw" style="margin-left:5px">${city}</span>`;
      });
    });
  },

  watch: {
    $route() {
      console.log(this.$route.path);
      this.activeIndex = this.$route.path;
    }
  }
};
</script>

<style lang="scss" scoped>
a {
  text-decoration: none !important;
}
</style>