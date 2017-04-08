var express = require('express');
var router = express.Router();
var dbo = require('../modules/mongoseOpt').mongoose;
var Schema = dbo.Schema;


var userSchema = Schema({userid:String, password:String});
var Users = dbo.model('users', userSchema, 'users');
//登录接口
router.post('/', function(req, res, next){
		//    //用户名、密码、验证码
		var username = req.body.username;
		var password = req.body.password;

		var findStr = {userid:username};
		Users.findOne(findStr,function(error, result){
			if(error) {
				return res.send({status:0,info:'登录失败'});
			}
			//console.log(result);
			if(!result){
				console.log('用户名不存在!');
				return res.send({status:0,info:'用户不存在'});
			}
			else{
				console.log('用户名存在!');
				if(!result.password || result.password !== password){

					console.log('密码错误！');
					return res.send({status:1,info:'密码错误'});
				}
				console.log('密码验证成功');
				return res.send({status:1,info:'登录成功'});
			}
			});
		});

module.exports = router;
