// 购物车路由

//引入express模块
const express=require('express');
//引入连接池模块
const pool=require('../pool.js');

//创建路由对象
const router=express.Router();



// 添加用户地址
// 访问地址 http://127.0.0.1:3000/address/reg
// 请求方式：post
router.post('/reg',(req,res,next)=>{
	let obj=req.body;
	console.log(obj);
	//验证信息上传是否为空
	pool.query('insert into mszx_receiver_address set ?',[obj],(err,result)=>{
	if (err)
	{
		next(err)
		return;
	}
	res.send({code:200,msg:'插入成功',data:result});
	});
});



//删除用户地址
// 访问地址 http://127.0.0.1:3000/address/delete/:aid
// 请求方式：DELETE
router.delete('/delete/:aid',(req,res,next)=>{
	let obj=req.query;
	console.log(obj);
		 pool.query('delete from mszx_receiver_address where aid=?',[obj.aid],(err,result)=>{
		 if (err)
		 {
			 next(err)
			 return
		 }
		 
			 res.send({code:200,msg:'删除成功'});
		 
		 });
});


//查询用户地址
// 访问地址 http://127.0.0.1:3000/order/
// 请求方式：get
router.get('/:user_id',(req,res,next)=>{
	let obj=req.params;
	console.log(obj);
	pool.query('select * from mszx_receiver_address where user_id=?',[obj.user_id],(err,result)=>{
		if(err){
		next(err)
		return
		}
		if(result.length===0){
			res.send({code:201,msg:''});
		}else{
			res.send({code:200,msg:'查询成功',data:result});
			// console.log(result);
		}
	});
});

//查询用户地址
// 访问地址 http://127.0.0.1:8081/order/
// 请求方式：get 
router.get('/',(req,res,next)=>{
	let obj=req.query;
	console.log(obj);
	pool.query('select * from mszx_receiver_address where aid=?',[obj.aid],(err,result)=>{
		if(err){
		next(err)
		return
		}
		if(result.length===0){
			res.send({code:201,msg:''});
		}else{
			res.send({code:200,msg:'查询成功',data:result});
			// console.log(result);
		}
	});
});
 
//3.用户修改(post /setupwd)
router.put('/',(req,res,next)=>{
	//2.1获取传递的数据
	let obj=req.body;
	console.log(obj);
	//2.2执行sql命令
	pool.query('update mszx_receiver_address set ? where aid=?',[obj,obj.aid],(err,result)=>{
		if(err){
			next(err)
			return
		}
		// console.log(result);
		//结果是对象，如果对象下的属性affectedRows为0说明修改失败
		if(result.affectedRows===0){
			res.send({code:201,msg:'修改失败'});
		}else{
			res.send({code:200,msg:'修改成功'});
		}
	});
});


//暴露路由器对象
module.exports=router 