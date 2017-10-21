// console.log("hello,NodeJS!");

// setTimeout(function(){
// 	console.log("3 seconds have passed!");
// },3000);

var time = 0;
var timer = setInterval(function(){
	time+=2;
	
	if (time>5) {
		clearInterval(timer);
	}else{
		console.log(time+" seconds have passed!");
	}
	
},2000);

console.log(__dirname);//不包含当前文件的绝对路径
console.log(__filename);//包含当前文件的绝对路径