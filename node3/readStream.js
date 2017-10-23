var http = require("http");

var fs = require("fs");

// 读取数据流
// var myReadStream = fs.createReadStream(__dirname+"/readMe.txt","utf8");
// console.log(myReadStream);

// 写入数据流
// var myWriteStream = fs.createWriteStream(__dirname+"/writeMe.txt");

// 管道 将左边数据放至右边
// myReadStream.pipe(myWriteStream);

/*
myReadStream.on("data",function(chunk){
	// console.log("================接收chunk===============")
	// console.log(chunk);

	myWriteStream.write(chunk);
});//data不能改写

*/

// 创建服务器
var server = http.createServer(function(req,res){
	res.writeHead(200,{"Content-type":"text/plain"});
	var myReadStream = fs.createReadStream(__dirname+"/readMe.txt","utf8");
	myReadStream.pipe(res);
});
server.listen(3000,"127.0.0.1");//localhost:3000查看
console.log("server is running...");