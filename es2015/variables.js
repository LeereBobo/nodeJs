// let name = "Henry";
// console.log(name);

// let & var 区别：let拥有域的概念

// var 函数
// function sayName(){
//   var name = "Herny";
// }
// sayName();
// console.log(name); //undefined
// 在js中，var的变量作用域仅限于函数中

// let函数 if for
// function sayName(){
//   let name = "Herny";
// }
// sayName();//undefined
// console.log(name);

// if(true){
//   let name = "Herny";
// }
// console.log(name);//无

// if(true){
//   var name = "Herny";
// }
// console.log(name);//Herny

// for(var i = 0; i < 10 ; i++){
//   console.log(i);
// }
// console.log("循环外",i);

// {
//   let name = "Herny";
// }
// console.log(name);

// let的作用域仅限于自身的{}内


//const:常量是在程序运行过程中不可以被改变的量
const API_KEY = "76876f786fsdf";
// API_KEY = "ihyifjsjf";
console.log(API_KEY);

// template模板语法
var firstName = "Huahua";
var lastName = "Guagua";
console.log("我的全名是："+firstName+lastName);
console.log(`我的全名是：${firstName} ${lastName}`);