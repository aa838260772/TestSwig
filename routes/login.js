var express = require('express');
var router = express.Router();
var mongooseModel = require('../modules/mongoseOpt')
//登录接口
router.post('/', function(req, res, next){
		//    //用户名、密码、验证码
		var username = req.body.username;
		var password = req.body.password;

		var findStr = {userid:username};
		mongooseModel.findOne(findStr,function(error, result){
			if(error) {
				return res.send({status:0,info:'登录失败'});
			}
			console.log(result);
			if(result.userid){
				return res.send({status:1,info:'登录成功'});
			}
			else{
				return res.send({status:0,info:'用户不存在'});
			}
			});
		});

module.exports = router;
