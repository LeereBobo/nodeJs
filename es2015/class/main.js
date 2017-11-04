// ES5 类
/*
function Plane(){
	this.wings = 2;
	this.speed = 100;
	this.altitude = 0;
}

const myPlane = new Plane();

// 为Plane这个类扩展方法
Plane.prototype.fly = function(){
	this.altitude = 3000;
}
myPlane.fly();

// 创建另外一个类
function FighterPlane(){
	this.speed = 1000;
}
FighterPlane.prototype = new Plane();
var fighterplane = new FighterPlane();
fighterplane.fly();
console.log(fighterplane.altitude);
*/


// ES6 类
class Person{
	constructor(name,age,weight){
		this.name = name;
		this.age = age;
		this.weight = weight;
	}

	displayWeight(){
		console.log(this.weight);//打印需定义函数
	}
}

let person1 = new Person("Herny",30,90);
// person1.displayWeight();
// console.log(person1.name);

// Class 可以通过`extends`关键字实现继承，这比 ES5 的通过修改原型链实现继承，要清晰和方便很多。
class Programmer extends Person{
	constructor(name,age,weight,language){
		super(name,age,weight);//相当于parent
		this.language = language;
	}
	displayWeight(){
		console.log(this.weight + "kg");
	}
}

let gaochao = new Programmer("Chao",18,"70","go");
gaochao.displayWeight();
console.log(gaochao.language);
