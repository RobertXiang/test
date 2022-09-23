const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});


io.on("connection", (socket) => {
  console.log("有客户端连进来了:" + socket.id);
  socket.on("textmsg", function (data) {
    console.log(data);
    io.emit("textmsg", data);
  });
});

server.listen(3030, () => {
  console.log("websocket服务已启动，正在监听 *:3030");
});
