var data = {key:'value',hello:'World'};

var arr = [{key:'1'},{key:'2'}];

console.log(arr[1].key);
console.log(arr.size)
if(data.key){
	console.log(data.key);
}else{
	console.log("not exist");
}
console.log(JSON.stringify(data));
