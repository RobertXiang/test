// 商品订单路由

//引入express模块
const express=require('express');
//引入连接池模块
const pool=require('../pool.js');

//创建路由对象
const router=express.Router();


// 添加商品订单数据
// 接口地址：http://127.0.0.1:3000/pro_order/reg
// post 参数传递
router.post('/reg',(req,res,next)=>{
	let obj=req.body;
	console.log(obj);
	//验证信息上传是否为空
	pool.query('insert into product_order set ?',[obj],(err,result)=>{
	if (err)
	{
		next(err)
		return;
	}
	res.send({code:200,msg:'插入成功',data:result});
	});
});




// 删除商品订单数据
// 接口地址：http://127.0.0.1:3000/pro_order/delete/1
// get 接口  传递参数
router.get('/delete/:orderid',(req,res,next)=>{
	let obj=req.params;
	console.log(obj);
		 pool.query('delete from product_order where orderid=?',[obj.orderid],(err,result)=>{
		 if (err)
		 {
			 next(err)
			 return
		 }
			 res.send({code:200,msg:'删除成功'})
		 });
});



// 查询商品订单数据
// 接口地址； http://127.0.0.1:3000/pro_order/allorder
//get 不传递参数
router.get('/allorder',(req,res,next)=>{
    let obj=req.query
    let sql='select * from product_order'
    pool.query(sql,[obj],(err,result)=>{
        if(err){
            next(err)
            return
        }
        res.send({code:200,msg:'查询成功',data:result})
    })
})


// 查询商品订单是否存在数据
//接口地址：http://127.0.0.1:3000/pro_order/exist/1
router.get('/exist/:product_id',(req,res,next)=>{
	let obj=req.params
	let sql='select * from product_order where product_id=?'
	pool.query(sql,[obj.product_id],(err,result)=>{
		if(err){
			next(err)
			return
		}
		if(result.length>0){
			res.send({code:200,msg:'商品已存在',data:result})
		}else{
			res.send({code:201,msg:'商品不存在',data:result})
		}
	})
})


//修改商品信息
// 接口参数 :product_id获取参数 ， num为老的num 加上新的
//接口地址：http://127.0.0.1:3000/pro_order/set?product_id=?&num=++
router.post('/set',(req,res,next)=>{
	let obj=req.body
	let sql='update product_order set num=? where product_id=?;'
	pool.query(sql,[obj.num,obj.product_id],(err,result)=>{
		if(err){
			next(err)
			return
		}else if(result.length==0){
			res.send({msg:'修改信息失败',code:201})
		}else{
			res.send({msg:'信息修改成功',code:200,result:result})
		}
	})
})



//暴露路由器对象
module.exports=router 