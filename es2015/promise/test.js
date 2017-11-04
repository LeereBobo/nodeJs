"use strict"


/*
function want(){
	console.log("success!!!!");
}

let myPromise = new Promise((resolve,reject)=>{
	if (typeof want =='function') {
		resolve(want);
	} else {
		reject("TypeErr:+" + want + "不是一个函数");
	}
})
myPromise.then(function(want){
	want();
}).catch((err)=>{
	console.log(err);
})
*/

/*
function fn(num){
	return new Promise(function(resolve,reject){
		if (typeof num == 'number') {
			resolve();
		} else {
			reject();
		}
	}).then(function(){
		console.log("参数是一个number类型");
	},function(){
		console.log("参数不是一个number类型");
	});

}
*/

// then的链式写法
// then(null, function() {}) 就等同于catch(function() {})
/*
function fn(num){
	return new Promise((resolve,reject)=>{
		if (typeof num == 'number') {
			resolve();
		} else {
			reject();
		}
	}).then(function(){
		console.log("Yes!");
	}).then(null,function(){
		console.log("errors!!!");
	})
}
fn(123);
fn("hahahha");
*/