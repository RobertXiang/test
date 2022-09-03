//引入第三方模块
//加载express模块
const express=require('express');
//加载mysql模块
const mysql=require('mysql');
//加载cors模块
const cors=require('cors');


//创建服务器
const app=express();
//定义端口并进行监听
const port=3000;
app.listen(port,(req,res)=>{
	console.log('已成功监听端口:'+port)
});

//应用中间件 处理post 传参
app.use(express.urlencoded({
	extended:false
}));

//静态托管
app.use(express.static('./public'));

// 使用CORS中间件,解决跨域问题,添加白名单
app.use(cors({
  origin: ['http://localhost:8080', 'http://127.0.0.1:8080']
}));



//引入路由器接口
const userRouter=require('./routers/user.js');
app.use('/user',userRouter)








//错误处理
app.use((err,req,res,next)=>{
    console.log(err)
    res.send({code:505,msg:'服务器端错误'})
})