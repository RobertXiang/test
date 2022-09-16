// 订单路由

//引入express模块
const express=require('express');
//引入连接池模块
const pool=require('../pool.js');

//创建路由对象
const router=express.Router();

//添加用户订单
// 访问地址 http://127.0.0.1:3000/order/reg
// 请求方式：post
router.post('/reg', (req, res, next) => {
	let obj = req.body;
	console.log(obj);
	pool.query('insert into mszx_order set ?', [obj], (err, result) => {
		if (err) {
			next(err)
			return
		}
		res.send({ code: 200, msg: '插入成功', data:result});
	});
});


//删除用户订单
// 访问地址 http://127.0.0.1:8081/order/delete/:oid
// 请求方式：DELETE
router.delete('/delete/:user_id', (req, res, next) => {
	let obj = req.params;
	console.log(obj);
		pool.query('delete from mszx_order where user_id=?', [obj.user_id], (err, result) => {
			if (err) {
				next(err)
				return
			}
			else {
				res.send({ code: 200, msg: '删除成功' });
			}
		
	});
});


//查询用户订单
// 访问地址 http://127.0.0.1:8081/order/:user_id
// 请求方式：get
router.get('/:user_id', (req, res, next) => {
	let obj = req.params;
	console.log(obj);
	pool.query('select * from mszx_order where user_id=?', [obj.user_id], (err, result) => {
		if (err) {
			next(err)
			return
		}
		if (result.length == 0) {
			res.send({ code: 201, msg: '' });
			console.log(result);
		} else {
			res.send({ code: 200, msg: '查询成功', data: result });
			console.log(result);
		}
	});
});











//暴露路由器对象
module.exports=router 