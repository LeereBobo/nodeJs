// 箭头函数
// add = (a,b)->
//   a + b
// console.log(add(2,3));//其他语言示例


// let add = (a,b) => {
//   return a + b;
// }
// console.log(add(2,5));



// let numbers = [2,3,4,5];
// 将数组中的值进行翻倍

// for(var i = 0; i < numbers.length; i++){
//   console.log(numbers[i] * 2);
// }

// map():数组方法，相当于遍历
// let doubles = numbers.map(n => {
//   return n * 2;
// });
// console.log(doubles);


// let person = {
//   name:"Herny",
//   sayName:function(){
//     console.log(`Hello ${this.name}`);
//   }
// }


// 错误示例：
// ES6中，对象中的key值对应的value为函数时，不能用箭头函数
// let person = {
//   name:"Herny",
//   sayName:() => {
//     console.log(`Hello ${this.name}`);
//   }
// }


// 正确写法：实现打招呼
// let person = {
//   name:"Herny",
//   sayName(){
//     console.log(`Hello ${this.name}`);
//   }
// }

// 实现ES5数组遍历
// let person = {
//   name:"Herny",
//   hobbies:["打篮球","写代码","王者荣耀"],
//   showHobbies:function(){
//   	let self = this;
//   	this.hobbies.forEach(function(hobby){
//   		// console.log(this);//window
//   		console.log(`${self.name}的爱好是${hobby}`);
//   	})
//   }
  
// }

// 实现ES6数组遍历
// ES6中的箭头函数找不到this指向时，指向为上一级(最近指向)
let person = {
  name:"Herny",
  hobbies:["打篮球","写代码","王者荣耀"],
  showHobbies(){
  	this.hobbies.forEach((hobby) => {
  		// console.log(this);//window
  		console.log(`${this.name}的爱好是${hobby}`);
  	});
  }
  
}
person.showHobbies();

