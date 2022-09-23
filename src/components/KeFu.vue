<template>
  <div class="ke-fu kf" id="chart-container" v-if="close">
    <!-- 客服 -->
    <div class="header">
      <img src="/logo.ico" alt />
      <div>
        <h5 style="color: white">美墅装修</h5>
        <span>装修怕麻烦，就选爱空间整装，超省心！</span>
      </div>
      <i id="i1" class="el-icon-minus"></i>
      <i class="el-icon-close" @click="talk"></i>
    </div>
    <div class="chart-main-area">
      <!-- 聊天区域 -->
      <div class="chart-list" id="chart-list">
        <div class="user-logined" id="user-logined"></div>
        <!-- 气泡 -->
        <div class="chart-item">
          <div class="user-face">
            <img src="/logo.ico" alt />
          </div>
          <div class="user-xinxi">
            <div style="font-size: 12px; color: #333">客服</div>
            <div class="user-message">这里是美墅装修客服,请问有什么可以为您服务?</div>
          </div>
        </div>
      </div>
      <!-- 发表区域 -->
      <div class="chart-form">
        <div>
          <textarea
            class="chart-form-message"
            id="message"
            v-model="val"
            placeholder="请您输入...一次最多35字"
            maxlength="35"
          ></textarea>
        </div>
        <div>
          <input @click="send" type="button" id="send" class="chart-form-send" value="发送" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["show"],
  data() {
    return {
      socket: io("http://localhost:3030/"),
      val: "",
      close: this.show,
      phone: window.sessionStorage.phone
    };
  },
  computed: {
    loginout() {
      return this.$store.state.phone;
    }
  },
  methods: {
    send() {
      if (window.sessionStorage.phone == undefined) {
        alert("抱歉，请您先登录");
        this.socket.close();
        this.val = "";
        this.$router.push("/login");
        return;
      }
      let inp = document.querySelector("#message");
      let val = this.val.trim();
      if (val == "") {
        inp.focus();
        return;
      }
      this.socket.emit("textmsg", {
        name: window.sessionStorage.phone,
        val,
        avatar: "/default.jpeg"
      });
      this.val = "";
      inp.focus();
    },
    talk() {
      this.socket.close();
      this.close = !close;
    }
  },

  watch: {
    loginout() {
      console.log("loginout:", this.loginout);
      if (this.loginout == "") {
        this.talk();
      }
    }
  },
  mounted() {
    // this.close=this.show
    // console.log(this.socket);
    this.socket.on("textmsg", function(data) {
      console.log(data);
      let chatlist = document.querySelector("#chart-list");
      if (data.name == window.sessionStorage.phone) {
        chatlist.innerHTML += `
            <div class="chart-item-me">
            <div class="me-body">
              <div style="font-size: 12px; color: #333;text-align: end;">用户${data.name}</div>
              <div class="user-message-me">${data.val}</div>
            </div>
            <div class="user-face-me">
               <img style="width:40px;height:40px;border-radius: 5px;" src="${data.avatar}" alt="" />
            </div>
          </div>
            `;
      } else {
        chatlist.innerHTML += `
            <div class="chart-item">
          <div class="user-face">
            <img src="${data.avatar}" alt="" />
          </div>
          <div class="user-xinxi">
            <div  style="font-size: 12px; color: #333;">${data.name}</div>
            <div class="user-message">${data.val}</div>
          </div>
        </div>
       `;
      }
      chatlist.scrollTop = chatlist.scrollHeight;
    });
  }
};
</script>
<style src="@/assets/css/chart.css"></style>
<style scoped>
.kf {
  position: fixed;
  bottom: 80px;
  margin-left: 74%;
  width: 450px;
  border-radius: 10px;
}
.kf .header {
  width: 100%;
  background-color: orange;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding: 10px;
  box-sizing: border-box;
  padding-right: 0;
  color: white;
  display: flex;
}
.kf .header > div {
  flex: 1;
}
.kf .header img {
  width: 40px;
  height: 40px;
  margin-right: 5px;
  border-radius: 50%;
}
.kf [class*=" el-icon-"],
[class^="el-icon-"] {
  margin: 0 2px;
  margin-right: 10px;
}
.kf .header div span {
  font-size: 14px;
}

/* 聊天区域 */
.kf .chart-main-area {
  float: left;
  width: 100%;
  height: 70%;
  background-color: #f5f5f5;
}
.kf .chart-list {
  position: relative;
  height: 300px;
  overflow-y: auto;
  overflow-x: hidden;
}
/* .kf .chart-list .user-logined {
  position: absolute;
  width: 200px;
  bottom: 10px;
  padding: 10px;
  text-align: center;
  background-color: #dadada;
  color: #000;
  left: 20%;
  transition: all 0.8s ease-in-out;
} */
.kf .chart-list .chart-item::after,
.kf .chart-list .chart-item::before {
  content: ".";
  display: block;
  height: 0;
  visibility: hidden;
  clear: both;
}
.chart-form {
  height: 100px;
  background: #fff;
  border-radius: 5px;
  border: 1px solid #dadada;
  border-top: none;
}
.chart-form .chart-form-message {
  width: 100%;
  padding: 5px 10px;
  height: 60px;
  line-height: 1.5;
  resize: none;
  border: none;
  outline: none;
}

.chart-form .chart-form-send {
  float: right;
  width: 70px;
  height: 24px;
  margin-right: 10px;
  background-color: orange;
  border-radius: 3px;
  border: none;
  color: white;
  cursor: pointer;
}
</style>