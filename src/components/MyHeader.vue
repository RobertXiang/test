<template>
  <div class="my-header">
    <!-- 导航栏1 -->
    <div class="header">
      <div class="center">
        <div class="city">
          <i class="el-icon-location-outline"></i>
          <span>全国</span>
        </div>
        <div class="txt">
          <a style="border: none" href="#">注册</a>
          <a href="#">登录</a>
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
              width="60%"
              height="60%"
              title="爱空间装饰装修公司官网"
              style="position: relative; top: -5px; left: 20px"
            />
          </a>
          <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
            <el-menu-item index="1">
              <router-link to="/">首页</router-link>
            </el-menu-item>
            <el-menu-item index="2">
              <router-link to="/combomeal">甄选套餐</router-link>
            </el-menu-item>
            <el-menu-item index="3">
              <router-link to="/houseCase">整屋案例</router-link>
            </el-menu-item>
            <el-menu-item index="4">
              <router-link to="/construct">省心施工</router-link>
            </el-menu-item>
            <el-menu-item index="5">
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
          <button class="navoffer" style="color: ff6a00" round>精准标价</button>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 默认首页高亮
      activeIndex: "1"
    };
  }
};
</script>

<style lang="scss" scoped>
a {
  text-decoration: none !important;
}
</style>