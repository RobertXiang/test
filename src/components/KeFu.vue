<template>
  <div class="ke-fu kf" id="chart-container">
    <!-- 客服 -->
    <div class="header">
      <img src="/logo.ico" alt="" />
      <div>
        客户咨询
      </div>
      <i id="i1" class="el-icon-minus"></i>
      <i class="el-icon-close" @click="talk"></i>
    </div>
    <div class="chart-main-area">
      <!-- 聊天区域 -->
      <div class="chart-list" id="chart-list">
        <div class="user-logined" id="user-logined"></div>
        <!-- 气泡 -->
        <div class="chart-item"  v-for="(item,index) in msg" :key="index">
          <div class="user-face">
            <img :src="`${item.avatar}`" alt="" />
          </div>
          <div class="user-xinxi">
            <div style="font-size: 12px; color: #333;text-align:start;">用户:{{item.name}}</div>
            <div class="user-message">{{item.val}}</div>
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
            maxlength="35"
          ></textarea>
        </div>
        <div>
          <input
            @click="send"
            type="button"
            id="send"
            class="chart-form-send"
            value="发送"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import io from "../../public/js/socket.io"
  var  socket=io("http://localhost:3030/")
export default {
  props: ["msg"],
  
  data() {
    return {
     
      val: "",
    };
  },
  computed:{
    liuyan(){
        return this.$store.state.close
    }
  },
  methods: {
    send() {
      let inp = document.querySelector("#message");
      let val = this.val.trim();
      if (val == "") {
        inp.focus();
        return;
      }
      socket.emit("textmsg", {
        name: this.$store.state.uname,
        val,
        avatar: "/logo.ico",
      });
      this.val = "";
      inp.focus();
    },
    talk(){
        this.$store.commit('updateClose')
        socket.close()
    }
  },
  mounted() {
      socket.on("textmsg", (data)=> {
        console.log(data);
        let chatlist = document.querySelector("#chart-list");
        if (data.name == this.$store.state.uname) {
          chatlist.innerHTML += `
            <div class="chart-item-me">
            <div class="me-body">
              <div style="font-size: 12px; color: #333;text-align: end;">管理员:${data.name}</div>
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
            <img src="/default.jpeg" alt="" />
          </div>
          <div class="user-xinxi">
            <div style="font-size: 12px; color: #333;text-align:start;">用户:${data.name}</div>
            <div class="user-message">${data.val}</div>
          </div>
        </div>
       `;
        }
        chatlist.scrollTop = chatlist.scrollHeight;
      });
  },
  watch:{
    liuyan(){
        if(this.liuyan == false){
            socket.close()
        }
    }
  }
};
</script>
<style src="@/assets/css/chart.css"></style>
<style scoped>
.kf {
  position: fixed;
  top: 80px;
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
  text-align: center;
  line-height: 40px;
  font-size: 20px;
  font-weight: 700;
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
  box-sizing: border-box;
}
.chart-form .chart-form-message {
box-sizing: border-box;
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