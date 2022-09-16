// 免费设计页面路由
//引入express模块
const express=require('express');
//引入连接池模块
const pool=require('../pool.js');

//创建路由对象
const router=express.Router();

// 用户选择的方案数据上传数据库接口
// 插入数据接口：http://127.0.0.1:3000/mfsj/set
// post 接口 
router.post('/set',(req,res,next)=>{
let obj=req.body
let sql='select mid from mfsj where yhphone=?'
pool.query(sql,[obj.yhphone],(err,result)=>{
    if(err){
        next(err)
        return
    }
    if(result.length!=0){
        res.send({code:401,msg:'该用户已经提交方案'})
    }else{
        // 将用户选择的方案插入到mfsj表中
        sql='insert into mfsj set ?'
        pool.query(sql,[obj],(err,result)=>{
            if(err)throw err;
            res.send({code:200,msg:'上传成功',data:result})
        })
    }
})
})

// 查询用户设计方案选择的接口
// 接口地址：http://127.0.0.1:3000/mfsj/all
// get 不需要传参
router.get('/all',(req,res,next)=>{
    let obj=req.query
    let sql='select * from mfsj'
    pool.query(sql,[obj],(err,result)=>{
        if(err){
            next(err)
            return
        }
        res.send({code:200,msg:'查询成功',data:result})
    })
})

// 删除用户方案接口
// http://127.0.0.1:3000/mfsj/delete/1
// get接口  传递参数 mid
router.get('/delete/:mid',(req,res,next)=>{
	let obj=req.params
	let sql='delete from mfsj where mid=?'
	pool.query(sql,[obj.mid],(err,result)=>{
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