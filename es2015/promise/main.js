"use strict" //严格模式:在严格模式中，指向有所变化

// console.log(this);

/*function worthless(){
	console.log(this);
}
worthless();*/

// 实例化promise对象
let myPromise = new Promise((resolve,reject) => {//两个形参不会同时显示
	setTimeout(() => {
		resolve("成功时，会显示这句话！");
	},1000);

	setTimeout(() => {
		reject("error:网络连接失败！");
	},1500);
});


/*myPromise.then((data) => { //将resolve中的值传给data
	console.log(data);
},(err) => {
	console.log(err);
});*/


/*
myPromise.then((data) => {
	console.log(data);
})
.catch((err) => {
	console.log(err);
})
*/

// console.log(myPromise);//pending:等待中，或者进行中，表示还没有得到结果

let myPromise2 = new Promise((resolve,reject) => {
	setTimeout(() => {
		resolve("队列中的第二个成功时调用的数据！");
	},1500);
});
Promise.all([myPromise,myPromise2])
	   .then((data) => {
	   		console.log(data);
	   })
	   .catch((err) => {
	   		console.log(err);
	   })

/*
	Promise:可多个promise同时请求多条数据
	resolve,reject只能执行一个
	then():第一个回调函数在成功时触发，第二个回调函数在失败时触发
	catch():主要负责捕捉异常错误信息

*/

// 请求数据，作用同ajax
/*fetch("http://localhost:3000/users")
	.then((res) => {
		res.json().then((data) => {
			console.log(data);
		})
		
	})
	.catch((err) => {
		console.log("error:请求失败！");
	})*/

