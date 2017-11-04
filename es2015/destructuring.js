// 学习分布操作符 解构 argument参数

/*
let sum = function(){
	console.log(arguments);
	//argument:没有形参,也可拿到实参,返回值为对象
}
sum(2,3,4,5);
*/

// ES5:不支持arguments.reduce
/*
arguments.reduce():调用实参
let sum = function(){
	return arguments.reduce(function(prev,curr){
		return prev + curr;
	});
}
*/


// ES5
/*
let sum = function(){
	return Array.prototype.reduce.call(arguments,function(prev,curr){
		return prev + curr;
	});
}
console.log(sum(2,3,4,5));
*/


// ES6
/*
let sum = function(...args){ //用分布操作符接受外部传入的数据
	console.log(args);
}
sum(2,3,4,5);
*/


/*
let sum = function(...args){ //用分布操作符接受外部传入的数据
	return args.reduce((prev,curr) => {
		return prev + curr;
	});
}
console.log(sum(2,3,4,5));
*/

/*
let numbers = [4,6,3,8];
let array = [1,2,...numbers,5,7];
console.log(array);//[ 1, 2, 4, 6, 3, 8, 5, 7 ]
*/

// ES5求最大值
// let max = Math.max(4,3,7,9);
// console.log(max);

// ES5求最大值，传数组
/*
let numbers = [4,3,7,9];
// let max = Math.max(numbers);//错误示例
let max = Math.max.apply(null,numbers);
console.log(max);
*/

// ES6求最大值，传数组
/*
let numbers = [4,3,7,12];
let max = Math.max(...numbers);
console.log(max);
*/



// call / apply / bind

/*
call方法的作用:
	1.为方法增加对象函数(以参数的形式回传数据) 
	2.改变函数内this的指向
    //call的第二个参数可以为数字，也可以为数组
*/

/*
var obj = {num:2};
var addToThis = function(a){
	return this.num + a;
}
console.log(addToThis.call(obj,3));
*/

/*
var obj = {num:2};
var addToThis = function(a){
	return this.num + a[0] + a[1] + a[2];
}
var arr = [1,2,3];
console.log(addToThis.call(obj,arr));
*/


// apply:第二个参数必须为数组

/*
var obj = {num:2};
var addToThis = function(a,b,c){
	return this.num + a + b + c;
}
var arr = [1,2,3];
console.log(addToThis.apply(obj,arr));
*/


// bind:先定义方法，再调用传参

/*
var obj = {num:2};
var addToThis = function(a,b,c){
	return this.num + a + b + c;
}
let method = addToThis.bind(obj);
console.log(method(1,2,3));

*/
