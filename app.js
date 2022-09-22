//引入第三方模块
//加载express模块
const express=require('express');  //npm install express
//加载mysql模块
const mysql=require('mysql');  //npm install  mysql
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
  origin: ['http://localhost:8080', 'http://127.0.0.1:8080','http://127.0.0.1:8081','http://127.0.0.1:8082']
}));



//引入用户登录注册的路由器接口
const userRouter=require('./routers/user.js');
app.use('/user',userRouter)

// 引入设计师及详情路由器接口
const designerRouter=require('./routers/designer.js')
app.use('/designer',designerRouter)

// 设计师案例详情
const des_deilesRouter=require('./routers/des_deiles.js')
app.use('/des_deiles',des_deilesRouter)

//案例详情路由
const anliRouter=require('./routers/anli.js')
app.use('/anli',anliRouter)

//商场商品路由
const shoppingRouter=require('./routers/shopping.js')
app.use('/shop',shoppingRouter)


// 收货地址路由
const addressRouter=require('./routers/address.js')
app.use('/address',addressRouter)

// 用户订单路由
const orderRouter=require('./routers/order.js')
app.use('/order',orderRouter)


// 购物车路由
const cartRouter = require('./routers/cart.js');
app.use('/cart',cartRouter)


// 免费设计页面路由
const mfshejiRouter=require('./routers/mfsheji.js')
app.use('/mfsj',mfshejiRouter)

// 商品订单路由
const pro_orderRouter=require('./routers/productOrder.js')
app.use('/pro_order',pro_orderRouter)


//错误处理
app.use((err,req,res,next)=>{
    console.log(err)
    res.send({code:505,msg:'服务器端错误'})
})