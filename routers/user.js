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


//移动端用户注册接口
// 接口地址http://127.0.0.1:3000/user/register
router.post('/register',(req,res,next)=>{
	//获取post传递参数
	let obj=req.body
	// 验证手机号的格式
	if(!/^1[3-9]\d{9}$/.test( obj.phone ) ){
		res.send({code:401,msg:'手机号码格式错误'})
	}else{
		//定义sql语句
	let sql='select uid from user where phone = ? and uname=?;'
	//执行sql语句
	pool.query(sql,[obj.phone,obj.uname],(err,results)=>{
		if(err) {
			next (err)
			return
		};
		if(results.length!= 0){
			res.send({msg:'用户已存在',code:401});
		}else{
			// 将用户的相关信息插入到用户数据表中
			sql = 'insert into user set ?;'
			pool.query(sql,[obj],(err,results)=>{
			 if(err)throw err;
			 res.send({msg:'注册成功！',code:200,result:results});
			})
		}
	})
	}
})

// PC端用户注册接口
//接口地址：http://127.0.0.1:3000/user/pcreg
//post  传递参数：phone    upwd
router.post('/pcreg',(req,res,next)=>{
	let obj=req.body
	// 验证手机号的格式
	if(!/^1[3-9]\d{9}$/.test( obj.phone ) ){
		res.send({code:401,msg:'手机号码格式错误'})
	}else{
		//定义sql语句
	let sql='select uid from user where phone = ?'
	//执行sql语句
	pool.query(sql,[obj.phone],(err,results)=>{
		if(err) {
			next (err)
			return
		};
		if(results.length!= 0){
			res.send({msg:'用户已存在',code:401});
		}else{
			// 将用户的相关信息插入到用户数据表中
			sql = 'insert into user set ?;'
			pool.query(sql,[obj],(err,results)=>{
			 if(err)throw err;
			 res.send({msg:'注册成功！',code:200,result:results});
			})
		}
	})
	}
})








//用户验证接口
// 接口地址：http://127.0.0.1:3000/user/reg/exist
// get 
router.get("/reg/exist",(req,res,next)=>{
	let uname=req.query.uname
	if(!uname){
		res.send({code:401,msg:"用户名不能为空"});
		return;
   };
   var sql='SELECT * FROM user WHERE uname=?'
   pool.query(sql,[uname],(err,result)=>{
	if(err){
	    return next(err)
	}
	if(result.length>0){
		res.send({code:400,msg:"用户名已存在"})
	}else{
		res.send({code:200,msg:"用户名可用"})
	}
   })
})

/**查询所有用户信息接口**/
// 接口地址：http://127.0.0.1:3000/user/all
router.get('/all',(req,res,next)=>{
	let obj=req.query
	let sql='select * from user'
	pool.query(sql,[obj],(err,result)=>{
		if(err){
			next(err)
			return
		}
		res.send({code:200,msg:"查询成功",data:result})
	})
})
/****通过用户id查询用户信息*****/
// http://127.0.0.1:3000/user/1
// get 接口  传递参数 uid
router.get('/:uid',(req,res,next)=>{
	let obj=req.params
	let sql='select * from user where uid=?'
	pool.query(sql,[obj.uid],(err,result)=>{
		if(err){
			next(err)
			return
		}
		res.send({code:200,msg:"查询成功",data:result})
	})
})



/**用户登录接口**/
// 登录接口地址：http://127.0.0.1:3000/user/login/uname
router.post("/login/uname",(req,res,next)=>{
	var uname  = req.body.uname;
	var upwd = req.body.upwd;
   if(!uname){
		 res.send({code:401,msg:"用户名不能为空!"});
		 return;
	};
	if(!upwd){
		 res.send({code:402,msg:"密码不能为空！"});
		 return;
	};
	var sql = "SELECT * FROM user WHERE uname=? AND upwd=?"
	pool.query(sql,[uname,upwd],(err,result)=>{
		 if(err){
			return next(err)
		 };
		 if(result.length > 0){
			  res.send({code:200,msg:"登录成功",data:result[0]});
		 }else{
			  res.send({code:300,msg:"用户名或密码错误"});
		 }
	});
});

// 邮箱密码登录接口
// 登录接口地址：http://127.0.0.1:3000/user/login/email
//post接口 传递参数 email  upwd
router.post("/login/email",(req,res,next)=>{
	var email  = req.body.email;
	var upwd = req.body.upwd;
   if(!email){
		 res.send({code:401,msg:"用户名不能为空!"});
		 return;
	};
	if(!upwd){
		 res.send({code:402,msg:"密码不能为空!"});
		 return;
	};
	var sql = "SELECT * FROM user WHERE email=? AND upwd=?"
	pool.query(sql,[email,upwd],(err,result)=>{
		 if(err){
			return next(err)
		 };
		 if(result.length > 0){
			  res.send({code:200,msg:"登录成功",data:result[0]})
		 }else{
			  res.send({code:300,msg:"用户名或密码错误"});
		 }
	});
});

// 电话登录接口
// 登录接口地址：http://127.0.0.1:3000/user/login/phone
router.post("/login/phone",(req,res)=>{
	var phone  = req.body.phone;
	var upwd = req.body.upwd;
   if(!phone){
		 res.send({code:401,msg:"用户名不能为空!"});
		 return;
	};
	if(!upwd){
		 res.send({code:402,msg:"密码不能为空！"});
		 return;
	};
	var sql = "SELECT * FROM user WHERE phone=? AND upwd=?"
	pool.query(sql,[phone,upwd],(err,result)=>{
		 if(err) throw err;
		 if(result.length > 0){
			  res.send({code:200,msg:"登录成功",data:result[0]});
		 }else{
			  res.send({code:300,msg:"用户名或密码错误"});
		 }
	});
});



//用户修改信息并上传
// post /set
//测试地址：http://127.0.0.1:3000/user/set
router.post('/set',(req,res,next)=>{
	console.log(req.body);
	let obj = req.body
	let sql='update user set uname=?,upwd=?,phone=?,avater=?,birthday=? where uid=?;'
	pool.query(sql,[obj.uname,obj.upwd,obj.phone,obj.avater,obj.birthday,obj.uid],(err,results)=>{
		if(err){
			next(err)
			return
		}else if(results.length==0){
			res.send({msg:'修改信息失败',code:201})
		}else{
			res.send({msg:'信息修改成功',code:200,result:results})
		}
	})
})

//删除用户信息
//get  
// 接口地址：http://127.0.0.1:3000/user/delete
router.get('/delete/:uid',(req,res,next)=>{
	let obj=req.params
	let sql='delete from user where uid=?'
	pool.query(sql,[obj.uid],(err,result)=>{
		if(err){
			next(err)
			return
		}
		if(result.affectedRows==0){
			res.send({code:400,msg:'删除错误',data:result[0]})
			return
		}
		res.send({code:200,msg:'删除成功',data:result[0]})
	})})



//暴露路由器对象
module.exports=router 