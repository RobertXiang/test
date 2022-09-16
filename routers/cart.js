// 购物车路由

//引入express模块
const express=require('express');
//引入连接池模块
const pool=require('../pool.js');

//创建路由对象
const router=express.Router();

//插入购物车商品
// 接口地址： http://127.0.0.1:3000/cart/reg
// post 传递参数
router.post('/reg',(req,res,next)=>{
	let obj=req.body;
	console.log(obj);
	pool.query('insert into mszx_shoppingcart_item set ?',[obj],(err,result)=>{
	if (err)
	{
		next(err)
		return
	}
	res.send({code:200,msg:'插入成功'});
	});
});


//删除购物车内商品
// 访问地址 http://127.0.0.1:3000/cart/delete/:iid
// 请求方式：DELETE
// 路由地址：/delete传参方式注意！
// 接收参数：/:sid->req.params
router.delete('/delete/:user_id',(req,res,next)=>{
	let obj=req.params;
	console.log(obj);
	pool.query('delete  from mszx_shoppingcart_item where user_id=?',[obj.user_id],(err,result)=>{
		 if (err)
		 {
			 next(err)
			 return
		 }
		 else{
			 res.send({code:200,msg:'删除成功'});
		 }
		 });
});




//修改购物车内商品信息
//修改商品详情信息
// 访问地址 http://127.0.0.1:3000/cart/updata
// 请求方式：put
router.put('/updata',(req,res,next)=>{
	let obj=req.body;
	pool.query('update mszx_shoppingcart_item set ? where product_id=?',[obj,obj.product_id],(err,result)=>{
	if(err){
		next(err)
        return
	}
	if(result.changedRows>0){
	res.send({code:200,msg:'修改成功'});
	}
	else{
	res.send({code:201,msg:'修改失败'});
	}
	});
});



//购物车列表
//商品列表
//访问地址  http://127.0.0.1:8080/cart
router.get('/:user_id',(req,res,next)=>{
	let obj=req.params;
	console.log(obj);
	//res.send('查询成功');
	pool.query('select * from mszx_shoppingcart_item where user_id=?',[obj.user_id],(err,result)=>{
	if (err){
		next(err)
		return
	}
	//res.send({code:200,msg:'查询成功',data:result});
	console.log(result);
	if(result.length===0){
		res.send({code:201,msg:'uid查询失败'});
	}else{
		res.send({code:200,msg:'uid查询成功',data:result});
	}
	});
});


router.get('/signal/:product_id',(req,res,next)=>{
	let obj=req.params;
	console.log(obj);
	//res.send('查询成功');
	pool.query('select * from mszx_shoppingcart_item where product_id=?',[obj.product_id],(err,result)=>{
	if (err){
		next(err)
		return
	}
	//res.send({code:200,msg:'查询成功',data:result});
	console.log(result);
	if(result.length===0){
		res.send({code:201,msg:'lid查询失败'});
	}else{
		res.send({code:200,msg:'lid查询成功',data:result});
	}
	});
});


//暴露路由器对象
module.exports=router 