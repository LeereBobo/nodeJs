var fs = require("fs");

// 同步 读取&写入
var readMe = fs.readFileSync("readMe.txt","utf8");
console.log(readMe);

// fs.writeFileSync("writeMe.txt","Hello,world");//同步写入文件

// 异步 读取&写入
/*fs.readFile("readMe.txt","utf8",function(err,data){
	if (err) throw err;//抛出异常
	console.log(data);
});

console.log(123);*/

/*fs.writeFile("writeMe.txt","i like huahua",function(){
	if (err) throw err;//抛出异常
	console.log(data);
})
*/
// 异步读取文件，并将异步读取的文件写入writeMe.txt中
/*fs.readFile("readMe.txt","utf8",function(err,data){
	if (err) throw err;
	fs.writeFile("writeMe.txt",data);
});*/

/*fs.unlink("readMe.txt",function(err,result){
	if (err) throw err;
	console.log(result);
});//删除文件*/

// fs.mkdir("stuff");//创建文件夹
// fs.rmdir("stuff");//删除文件夹