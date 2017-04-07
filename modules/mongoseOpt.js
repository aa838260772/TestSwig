

var mongoose = require('mongoose');
mongoose.Promise = global.Promise; 
var db       = mongoose.createConnection('mongodb://127.0.0.1:27017/test'); 
db.on('error', function(error){
	console.log(error);
});

var userScheMa = new mongoose.Schema({
	title: String,
	content: String
}); //  定义了一个新的模型，但是此模式还未和users集合有关联

var mongooseModel = db.model('wenzhang', new mongoose.Schema(),'wenzhang');
// 基于静态方法的查询
//mongooseModel.create({userid:'1jj', password:'letme', group:13});
//mongooseModel.create({title:'C',content:'C content'});

mongooseModel.find(function(error, result){
    if(error) {
        console.log(error);
    } else {
        console.log(result);
    }
    //关闭数据库链接
    db.close();
});
