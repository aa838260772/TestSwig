var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
		res.render('index', { title: 'Express' });
		});

router.get('/test', function(req, res, next) {
//		console.log(req);
		res.render('test', {title: 'help',
			people: [
			{ name: 'Paul', age: 28 },
			{ name: 'Jane', age: 26 },
			{ name: 'Jimmy', age: 45 }
			]});
		});

router.get('/frame',function(req, res,next) {
	res.render('frame', {title: 'iframe'}
	)	
});

router.get('/login', function(req, res, next) {
	res.render('login', {title: 'Big Dog'}
	)
});
module.exports = router;
