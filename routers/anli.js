//案例及详情页面路由

//引入express模块
const express=require('express');
//引入连接池模块
const pool=require('../pool.js');

//创建路由对象
const router=express.Router();


//接口地址：http://127.0.0.1:3000/anli/all
// get  不需要传参

router.get('/all',(req,res,next)=>{
    let obj=req.query
    let sql=`select * from yzal`
    pool.query(sql,[obj],(err,result)=>{
        if(err){
            next(err)
            return
        }
        // console.log(result);
        res.send({code:200, msg:'请求成功',data:result})  
    })
})


// 风格不同的接口
//接口地址：http://127.0.0.1:3000/anli/fenge/现代简约
// get  不需要传参
router.get('/fenge/:fenge',(req,res,next)=>{
    let obj=req.params
    let sql='select * from yzal where fenge=?'
    pool.query(sql,[obj.fenge],(err,result)=>{
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

// 传递参数yzal 表的id到 详情页面
// 接口地址:http://127.0.0.1:3000/anli/xqal/1
//get请求  传递参数 id值
router.get('/xqal/:xqid',(req,res,next)=>{
    let obj=req.params
    let sql='select * from alxq where xqid=?'
    pool.query(sql,[obj.xqid],(err,result)=>{
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