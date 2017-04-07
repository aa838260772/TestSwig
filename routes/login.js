var express = require('express');
var router = express.Router();
//登录接口
router.post('/', function(req, res, next){
		//    //用户名、密码、验证码
		var username = req.body.username;
		var password = req.body.password;

		//密码加密 md5(md5(password + '随机字符串'))
		//密码需要加密－> 可以写入JSON文件
		if(username === 'a1' && password === '123'){
		console.log("login succ!");
		//res.cookie('user',username);
		//return res.render('/',{});
		return res.send({
status: 1
});
		}

		return res.send({
status: 0,
info: '登录失败'
});
		});

module.exports = router;
