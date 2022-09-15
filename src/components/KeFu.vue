<template>
  <div class="ke-fu kf">
    <!-- 客服 -->
    <div class="header">
      <img src="../assets/icon/tx.jpg" alt="" />
      <div>
        <h5 style="color: white">小刘</h5>
        <span>装修怕麻烦，就选爱空间整装，超省心！</span>
      </div>
      <i id="i1" class="el-icon-minus"></i>
      <i class="el-icon-close"></i>
    </div>
    <div class="chart-main-area">
      <!-- 聊天区域 -->
      <div class="chart-list" id="chart-list">
        <div class="user-logined" id="user-logined">
          <!-- <span id="logined-user"></span>上线了 -->
        </div>
        <!-- 气泡 -->
        <div class="chart-item">
          <div class="user-face">
            <img src="../assets/icon/tx.jpg" alt="" />
          </div>
          <div class="user-message">111</div>
        </div>
      </div>
      <!-- 发表区域 -->
      <div class="chart-form">
        <div>
          <textarea class="chart-form-message" id="message"></textarea>
        </div>
        <div>
          <input
            @click="click"
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
export default {
  data() {
    let socket = io("http://localhost:3000/");
    console.log(socket);
    return {};
  },
  methods: {
    click() {
      let socket = io("http://localhost:3000/");

      // 2.获取文本框中得值
      let val = message.value;
      // trim() 去除字符串连段的空格
      if (val.trim().length > 0 && val.trim().length < 50) {
        // 发消息给服务端
        socket.emit("textmsg", {
          val: val,
        });
        // 清空文本框
        message.value = "";

        // 3.监听服务端发回来的消息
        socket.on("textmsg", function (data) {
          console.log(data.val);
          // 把消息显示在消息列表中
          let chatlist = document.getElementById("chart-list");
          chatlist.innerHTML += `
              <div style="margin-top: 10px;" class="chart-item">
                  <div style="float: left;margin: 0 15px;" class="user-face">
                    <img style="width: 40px;height: 40px;border-radius: 5px;" src="/designer/tx.jpg" alt="">
                  </div>
                  <div style="float: left;position: relative;padding: 10px;min-width: 100px;max-width: 520px;background: #fff;font-size: 12px;border-radius: 3px;" class="user-message">${data.val}</div>
              </div>`;
          // 让chatlist的滚动条持续在底部
          chatlist.scrollTop = chatlist.scrollHeight;
        });
      }
    },
  },
};
</script>

<style scoped>
.kf {
  position: fixed;
  bottom: 80px;
  margin-left: 74%;
  width: 350px;
  border-radius: 10px;
}
.kf .header {
  background-color: orange;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding: 10px;
  padding-right: 0;
  color: white;
  display: flex;
}
.kf .header img {
  width: 40px;
  margin-right: 5px;
  border-radius: 50%;
}
.kf [class*=" el-icon-"],
[class^="el-icon-"] {
  margin: 0 2px;
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

.kf .chart-main-area .chart-list .chart-item {
  margin-top: 10px;
}
.kf .chart-main-area .chart-list .chart-item .user-face {
  float: left;
  margin: 0 15px;
}
.kf .chart-main-area .chart-list .chart-item .user-face img {
  width: 40px;
  height: 40px;
  border-radius: 5px;
}
.kf .chart-main-area .chart-list .chart-item .user-message {
  position: relative;
  float: left;
  padding: 10px;
  min-width: 100px;
  max-width: 520px;
  background: #fff;
  font-size: 12px;
  border-radius: 3px;
}
.chart-list .chart-item .user-message::before {
  content: " ";
  position: absolute;
  width: 10px;
  height: 10px;
  background: #fff;
  top: 10px;
  left: -5px;
  z-index: 222;
  transform: rotate(45deg);
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