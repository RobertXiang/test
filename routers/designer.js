// 设计师页面路由器

//引入express模块
const express=require('express');
//引入连接池模块
const pool=require('../pool.js');

//创建路由对象
const router=express.Router();


// 设计师详情页数据按照城市分类
// 接口地址：http://127.0.0.1:3000/designer/city?city=?
// 请求方式  get  
router.get('/city',(req,res,next)=>{
    let obj=req.query
    let sql='select * from desiger where city=?'
    pool.query(sql,[obj.city],(err,result)=>{
        if(err){
            next(err)
            return
        };
        if(result.length>0){
            res.send({code:200,msg:"查询成功",data:result})
        }else{
            res.send({code:201,msg:'数据查询不到'})
        }
    })
})

// 全部设计师数据接口
// 接口地址：http://127.0.0.1:3000/designer/all
// get  不需参数
router.get('/all',(req,res,next)=>{
    let obj=req.query
    let sql='select * from desiger'
    pool.query(sql,[obj],(err,result)=>{
        if(err){
            next(err)
            return
        }
        res.send({code:200, msg:result})
    })
})




//暴露路由器对象
module.exports=router 