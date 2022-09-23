<template>
  <div id="app">
    <router-view />
    <ke-fu v-if="$store.state.close" :msg="khMsg"></ke-fu>
    <div class="kf-msg" v-if="show">消息+{{khMsg.length}}</div>
  </div>
</template>
<script scr="../public/js/socket.io.js"></script>

<script>
import KeFu from "./components/KeFu.vue";
import io from "../public/js/socket.io.js"
var socket= io("http://localhost:3030/")
export default {
  components: { KeFu },
  data() {
    return {
    
      khMsg: [],
      show: false,
    };
  },
  computed: {
    liuyan() {
      return this.$store.state.close;
    },
  },
  mounted() {
    socket.on("textmsg", (data) => {
      this.show = true;
      if (data.name != this.$store.state.uname) {
        this.khMsg.push(data);
      }
    });
  },
  watch: {
    liuyan() {
      if (this.liuyan == true) {
        console.log("对话打开,显示消息");
        socket.close();
      } else {
        this.show = false;
        console.log("对话关闭:监听消息");
        this.khMsg=[]
        socket.open();
      }
    },
  },
};
</script>

<style lang="scss">
.kf-msg {
  width: 50px;
  height: 20px;
  font-size: 12px;
  position: fixed;
  top: 513px;
  left: 173px;
  background-color: orange;
  border-radius: 4px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
