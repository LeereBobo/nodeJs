// 在Nodejs中经常使用函数表达式

// 正常函数
function sayHi1(){
	console.log("hello,huahua");
}

var sayHi2 = function(){
	console.log("hello,zhuzhu");
}
//sayHi();
// 函数表达式比正常函数执行速度要快 右左法则


function callFunction(foo){
	foo();
}
callFunction(sayHi2);