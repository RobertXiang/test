//引入express模块
const express=require('express');
//引入连接池模块
const pool=require('../pool.js');

//创建路由对象
const router=express.Router();

//测试接口
router.get('/show',(req,res)=>{
	res.send('hello')
});


//用户注册接口
router.post('/register',(req,res,next)=>{
	//获取用户名和密码信息
	let obj=req.body
	let sql='insert into user set ?'
	pool.query(sql,[obj],(err,result)=>{
		if(err){
			return next(err)
		}
		if(result.affectedRows===0){
			res.send({code:404,msg:'添加失败'})
		}else{
			res.send({code:201,msg:'添加成功'})
		}
	})	
})






//暴露路由器对象
module.exports=router