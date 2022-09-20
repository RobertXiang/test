<template>
  <!-- 客服 -->
  <div class="kf">
    <!-- 头部 -->
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
          <span id="logined-user"></span>
          上线了
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
            @click="socketSendmsg"
            type="button"
            id="send"
            class="chart-form-send"
            value="发送"
          />
        </div>
      </div>
    </div>

    <div class="wrap">
      <button @click="connected">连接Socket</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    connected() {
      this.$socket.open() // 开始连接socket
    },
    socketSendmsg() {
      this.$socket.emit('my other event', { my: 'data' })
    },
  },
  sockets: {
    connecting() {
      console.log('正在连接')
    },
    disconnect() {
      console.log('Socket 断开')
    },
    connect_failed() {
      console.log('连接失败')
    },
    connect() {
      console.log('socket connected')
    },
    news(data) {
      console.log(data)
    },
    open(data) {
      console.log(data)
    },
  },
}
</script>

<style scoped>
.kf {
  margin: 1000px;
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
.kf [class*=' el-icon-'],
[class^='el-icon-'] {
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
  height: 350px;
  overflow-y: auto;
  overflow-x: hidden;
}
.kf .chart-list .user-logined {
  position: absolute;
  width: 200px;
  bottom: 10px;
  padding: 10px;
  text-align: center;
  background-color: #dadada;
  color: #000;
  left: 20%;
  transition: all 0.8s ease-in-out;
}
.kf .chart-list .chart-item::after,
.kf .chart-list .chart-item::before {
  content: '.';
  display: block;
  height: 0;
  visibility: hidden;
  clear: both;
}

.chart-list .chart-item {
  margin-top: 10px;
}
.chart-list .chart-item .user-face {
  float: left;
  margin: 0 15px;
}
.chart-list .chart-item .user-face img {
  width: 40px;
  height: 40px;
  border-radius: 5px;
}
.chart-list .chart-item .user-message {
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
  content: ' ';
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
  height: 134px;
  background: #fff;
  border-radius: 5px;
  border: 1px solid #dadada;
  border-top: none;
}
.chart-form .chart-form-message {
  width: 100%;
  padding: 5px 10px;
  height: 95px;
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
