<template>
  <el-container class="home-container">
    <!-- 头部区域 -->
    <el-header>
      <div>
        <img src="../assets/logo.jpg" style="width: 80px" alt="" />
        <span>美墅装修后台管理系统</span>
      </div>
      <div style="margin-right: 10px">
        <span
          style="
            margin-right: 10px;
            font-size: 20px;
            font-weight: 800;
            color: whitesmoke;
          "
          >欢迎：{{ this.$store.state.uname }}</span
        >
        <el-button
          type="info"
          @click="logout"
          style="font-size: 18px; padding: 12px"
          >退出</el-button
        >
      </div>
    </el-header>
    <!-- 页面主体区域 -->
    <el-container>
      <!-- 侧边栏 -->
      <el-aside width="250px">
        <!-- <div class="toggle-button" @click="toggleCollapse">|||</div> -->
        <!-- 侧边栏菜单区域 -->
        <!-- <div background-color="#fff" text-color="black" active-text-color="orange" unique-opened :collapse="isCollapse" :collapse-transition="false" router :default-active="activePath"> -->
        <!-- <el-submenu >


          </el-submenu> -->
        <!-- 一级菜单 -->
        <!-- <ul>
  <li v-for="(item,index) of menulist" :key="index" 
  :class="{active: isActive === index}"
  @click="changeClass(index)"> 
 

            <i :class="item.id"></i>
            <span>{{item.authName}}</span>
          
         
          </li>
          
</ul> -->
<el-menu
      default-active="1"
    
      background-color="#20283F"
      text-color="#fff"
      active-text-color="#ffd04b" style="border:none;">
     
      <el-menu-item index="1" @click="goHome" style="font-size:22px;margin-top:10px;text-align: center;">
        <i class="iconfont icon-baobiao"></i>
        <span slot="title" >首页统计</span>
      </el-menu-item>
      <el-menu-item index="2" @click="goUser" style="font-size:22px;margin-top:10px;text-align: center;">
        <i class="iconfont icon-user" ></i>
        <span slot="title">用户管理</span>
      </el-menu-item>
      <el-menu-item index="3" @click="goGood" style="font-size:22px;margin-top:10px;text-align: center;">
        <i class="iconfont icon-tijikongjian"></i>
        <span slot="title">商品管理</span>
      </el-menu-item>
      <el-menu-item index="4" @click="goOrder" style="font-size:22px;margin-top:10px;text-align: center;">
        <i class="iconfont icon-danju"></i>
        <span slot="title">订单管理</span>
      </el-menu-item>
      <el-menu-item index="5" @click="goOffer" style="font-size:22px;margin-top:10px;text-align: center;">
        <i class="el-icon-coin"></i>
        <span slot="title">报价管理</span>
      </el-menu-item>
      <el-menu-item index="6" @click="show" style="font-size:22px;margin-top:10px;text-align: center;">
        <i class="el-icon-service"></i>
        <span slot="title">客服咨询</span>
      </el-menu-item>
    </el-menu>

          <!-- <div @click="goHome" class="active">
            <i class="iconfont icon-baobiao"></i>
            <span>首页统计</span>
          </div>
           <div @click="goUser">
            <i class="iconfont icon-user"></i>
            <span>角色管理</span>
          </div>
           <div @click="goGood">
            <i class="iconfont icon-tijikongjian"></i>
            <span>商品管理</span>
          </div>
           <div @click="goOrder">
            <i class="iconfont icon-danju"></i>
            <span>订单管理</span>
          </div> -->
          <!-- <el-submenu :index="item.id + ''" v-for="item in menulist" :key="item.id" @click="saveNavState"> -->
            <!-- 一级菜单的模板区域 -->
            <!-- <template slot="title"> -->
              <!-- 图标 -->
              <!-- <i :class="iconsObj[item.id]"></i> -->
              <!-- 文本 -->
              <!-- <span>{{item.authName}}</span> -->
            <!-- </template> -->

        <!-- 二级菜单 -->
        <!-- <div-item :index="'/' + subItem.path" v-for="subItem in item.children" :key="subItem.id" @click="saveNavState('/' + subItem.path)"> -->
        <!-- <template slot="title"> -->
        <!-- 图标 -->
        <!-- <i class="el-icon-menu"></i> -->
        <!-- 文本 -->
        <!-- <span>{{subItem.authName}}</span> -->
        <!-- </template> -->
        <!-- </div-item> -->
        <!-- </el-submenu> -->
        <!-- </div> -->
      </el-aside>
      <!-- 右侧内容主体 -->
      <el-main>
        <!-- 路由占位符 -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["uname"]),
  },
  data() {
    return {
      // 左侧菜单数据
      menulist: [
        { authName: "首页", id: "145", path: "/home" },
        { authName: "角色管理", id: "125", path: "/user" },
        { authName: "商品管理", id: "101", path: "/good" },
        { authName: "订单管理", id: "102", path: "/order" },
        { authName: "报价处理", id: "108", path: "/offer" },
      ],
      iconsObj: {
        125: "iconfont icon-user",
        103: "iconfont icon-tijikongjian",
        101: "iconfont icon-shangpin",
        102: "iconfont icon-danju",
        145: "iconfont icon-baobiao",
        108: "iconfont icon-offer",
      },
      // 是否折叠
      isCollapse: false,
      // 被激活的链接地址
      activePath: "",

      isActive: 0,
    };
  },
  mounted() {
    window.addEventListener("unload", this.saveState);
  },
  created() {
    console.log(this.$store.state.uname);
    // this.getMenuList()
    // this.activePath = window.sessionStorage.getItem('activePath')
  },
  methods: {
    //保持vuex数据
    saveState() {
      sessionStorage.setItem("state", JSON.stringify(this.$store.state));
    },

    logout() {
      window.sessionStorage.clear();
      this.$router.push("/login");
    },
    // 获取所有的菜单
    // async getMenuList() {
    //   const { data: res } = await this.$http.get('menus')
    //   if (res.meta.status !== 200) return this.$message.error(res.meta.msg)
    //   this.menulist = res.data
    //   console.log(res)
    // },
    // 点击按钮，切换菜单的折叠与展开
    toggleCollapse() {
      this.isCollapse = !this.isCollapse;
    },
    // // 保存链接的激活状态
    // saveNavState(activePath) {
    //   // window.sessionStorage.setItem('activePath', activePath)
    //   this.activePath = activePath
    //   this.$router.push('/activePath')
    // },
    go(index) {
      this.isActive = index;
      this.$router.push("/" + item[index].path);
    },
    goHome() {
      this.$router.push("/home");
    },
    goUser() {
      this.$router.push("/users");
    },
    goGood() {
      this.$router.push("/good");
    },
    goOrder() {
      this.$router.push("/order");
    },
    goOffer() {
      this.$router.push("/offer");
    },
    show(){
      console.log(this.$store.close);
      if(this.$store.close==true){
        return
      }
      this.$store.commit('updateClose')
    }
  },
};
</script>

<style lang="less" scoped>
.home-container {
  height: 100%;
}
.el-header {
  background-color: #20283F;
  display: flex;
  justify-content: space-between;
  padding-left: 0;
  align-items: center;
  color: #eee;
  font-size: 30px;
  font-weight: 1000;
  > div {
    display: flex;
    align-items: center;
    span {
      margin-left: 15px;
    }
  }
}

.el-aside {
background-color: #20283F;
  font-size: 18px;
  width: 200px;

  
 div{
  text-align: center;
  margin-top: 18px;
    border-right: none;
    height: 50px;
    line-height: 50px;
    padding: 8px;
    color: #eee;
    border-bottom: #000d4d;
cursor: pointer;

// :hover{
//   color: orangered;
//   background-color: yellow;
// // }
// :active{
//   color: orange;
  
// }

    :hover {
      color: orangered;
    }
    :active {
      color: orange;
    }
  }
//   :hover{
//   color: rgb(71, 30, 148);
//   background-color: rgb(169, 231, 228);
// }
//   .active{
//     color: rgb(71, 30, 148);
//   background-color: rgb(169, 231, 228);
//   }
  
}

.el-main {
  background-color:#1A2036;
  color: #000d4d;
  font-size: 14px;
}

.iconfont {
  margin-right: 15px;
}

.toggle-button {
  background-color: #645257;
  font-size: 10px;
  line-height: 24px;
  color: #fff;
  text-align: center;
  letter-spacing: 0.2em;
  cursor: pointer;
}

</style>
