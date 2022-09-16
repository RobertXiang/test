// 设计师案例及详情页面接口

//引入express模块
const express=require('express');
//引入连接池模块
const pool=require('../pool.js');

//创建路由对象
const router=express.Router();

// 路由接口
// 接口地址：http://127.0.0.1:3000/des_deiles/details?des_id=
// get 接口  传递设计师页的id
router.get('/details',(req,res,next)=>{
    let obj=req.query
    let sql='select * from deg_deiles where des_id=?'
    pool.query(sql,[obj.des_id],(err,result)=>{
        if(err){
            next(err)
            return
        }
        res.send({code:200, msg:'请求成功',data:result})
    })
});

//通过id传参将进入到案例表中查询
// 接口地址：http://127.0.0.1:3000/des_deiles/details/2
// 接口 get   传递参数为designer 的id值
router.get('/details/:did',(req,res,next)=>{
    let obj=req.params
    let sql=`select * from anli where did=?`
    pool.query(sql,[obj.did],(err,result)=>{
        if(err){
            next(err) 
            return
        }
        if(result.length>0){
            res.send({code:200,msg:"查询成功",data:result})
        }else{
            res.send({code:201,msg:'数据查询不到'})
        }
    })

})


//暴露路由器对象
module.exports=router