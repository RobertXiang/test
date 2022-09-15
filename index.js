const { on } = require('events');
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
  cors:{
    origin: '*'
  }
});

// 保存客户端的人数
let count=0
// io.on() 用于监听websocket事件   connection为连接建立成功事件
// 一旦客户端向服务端发送请求建立连接，连接建立成功后将触发该事件，
// 将立即执行第二个参数：回调方法
io.on('connection', (socket) => {
  console.log('有客户端连进来了:'+socket.id);

  count++
  io.emit('countmsg',count)  //通知所有客户端人数变了
  // 监听连接的断开
  socket.on('disconnect',function(){
    count--
    io.emit('countmsg',count)  //通知所有客户端人数变了
  })

  socket.on('textmsg', function(data){
    // 接收到某客户端发的消息后，给所有人群发一遍即可
    io.emit('textmsg', data)
    io.emit('textmsg','我是爱空间整装的线上顾问聪聪，真人在线的，您想了解装修的哪些方面呢？')
    // io.emit('textmsg','整个装修过程无非就是对比几个方面，设计师水平高低，材料品质是否环保，施工工艺的好坏都决定着您家能否顺利达到您的预期效果')
    // io.emit('textmsg','而我们拥有专业设计团队来为您进行1+N的专属设计服务，包括主案，木作，硬装，软装设计师，针对您家不同区域互相配合做整体设计方案，可满足您多样需求')
    // io.emit('textmsg','您计划装修的房子在哪所【城市】呢？您可以留个【电话】我马上为您介绍我们的详细报价和现在的活动优惠')
    // io.emit('textmsg','如果不方便留电咱们可以先加个微信，我发您一些装修案例和套餐明细，您先了解着，也方便您对比参考哦~')
  })
});

server.listen(3000, () => {
  console.log('websocket服务已启动，正在监听 *:3000');
});