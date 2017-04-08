var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://127.0.0.1:27017/test', function (err) {
    if (err) {
        console.error('[数据库链接错误]connect to %s error', err.message);
        process.exit(1);
    }
});

exports.mongoose = mongoose;


/*
var db       = mongoose.createConnection('mongodb://127.0.0.1:27017/test'); 
db.on('error', function(error){
	console.log(error);
});

var userScheMa = new mongoose.Schema({
	userid: String,
	password: String
}); //  定义了一个新的模型，但是此模式还未和users集合有关联

var mongooseModel = db.model('users', userScheMa,'users');

module.exports = mongooseModel;
*/