var express = require('express');
var router = express.Router();
 var fs = require('fs');


router.get('/', function(req, res, next) {
	res.render('upload', {title: 'UpLoad'})
});


router.post('/',function(req, res) {
	  	console.log(req.files);
        fs.rename(req.files[0].path, req.files[0].destination+'/'+req.files[0].originalname, function(err) {
          if(err){
           console.log('rename error: ' + err);
          } else {
           console.log('rename ok');
          }
        });


	return res.send({status:1,info:'上传成功'});
});

module.exports = router;
