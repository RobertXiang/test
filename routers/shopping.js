// 商城订单路由

//引入express模块
const express=require('express');
//引入连接池模块
const pool=require('../pool.js');

//创建路由对象
const router=express.Router();

// 查询所有商品的接口
// 接口地址:http://127.0.0.1:3000/shop/all
// get 接口
router.get('/all',(req,res,next)=>{
    let obj=req.query
    let sql='select * from shopping'
    pool.query(sql,[obj],(err,result)=>{
        if(err){
            next(err)
            return
        }
        res.send({code:200,msg:'查询成功',data:result})
    })
})

/****通过商品id查询用户信息*****/
// http://127.0.0.1:3000/shopping/1
// get 接口  传递参数 sid
router.get('/:sid',(req,res,next)=>{
	let obj=req.params
	let sql='select * from shopping where sid=?'
	pool.query(sql,[obj.sid],(err,result)=>{
		if(err){
			next(err)
			return
		}
		res.send({code:200,msg:"查询成功",data:result})
	})
})

// 插入数据接口
// 接口地址：http://127.0.0.1:3000/shop/set
//  post 传递参数: sid title pic dpiric squan piric store
router.post('/set',(req,res,next)=>{
    let obj=req.body
    let sql='select sid from shopping where sid=?'
    pool.query(sql,[obj.sid],(err,result)=>{
        if(err) {
			next (err)
			return
		};
        if(result.length!= 0){
			res.send({msg:'商品已存在',code:401});
		}else{
			// 将商品的相关信息插入到用户数据表中
			sql = 'insert into shopping set ?;'
			pool.query(sql,[obj],(err,result)=>{
			 if(err)throw err;
			 res.send({msg:'添加成功！',code:200,data:result});
			})
		}
    })
})
// 删除接口
// 接口地址:http://127.0.0.1:3000/shop/delete/59
router.get('/delete/:sid',(req,res,next)=>{
	let obj=req.params
	let sql='delete from shopping where sid=?'
	pool.query(sql,[obj.sid],(err,result)=>{
		if(err){
			next(err)
			return
		}
		if(result.affectedRows==0){
			res.send({code:400,msg:'删除错误',data:result[0]})
			return
		}
		res.send({code:200,msg:'删除成功',data:result[0]})
	})
})



//暴露路由器对象
module.exports=router
