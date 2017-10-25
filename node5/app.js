
var http = require("http");
var fs = require("fs");

var server = http.createServer(function(req,res){
	
	/*if (req.url !== "/favicon.ico") {
		// console.log(req.url);

		if (req.url == "/" || req.url == "/home") {
			res.writeHead(200,{"Content-type":"text/plain"});
			res.end("这是Home主页");
		}else if(req.url == "/about") {
			res.writeHead(200,{"Content-type":"text/plain"});
			res.end("这是About页面");
		}else if(req.url == "/contact") {
			res.writeHead(200,{"Content-type":"text/plain"});
			res.end("这是联系我们页面");
		}else{
			res.writeHead(200,{"Content-type":"text/plain"});
			res.end("404:找不到您要的页面");
		}
		
	}*/

	// 路由：请求一次，全部加载，跳转不需再次加载
	if (req.url !== "/favicon.ico") {
		// console.log(req.url);

		if (req.url == "/" || req.url == "/home") {
			res.writeHead(200,{"Content-type":"text/html"});
			var myReadStream = fs.createReadStream(__dirname+"/home.html","utf8");
			myReadStream.pipe(res);
		}else if(req.url == "/about") {
			res.writeHead(200,{"Content-type":"text/html"});
			var myReadStream = fs.createReadStream(__dirname+"/about.html","utf8");
			myReadStream.pipe(res);
		}else if(req.url == "/contact") {
			res.writeHead(200,{"Content-type":"text/html"});
			var myReadStream = fs.createReadStream(__dirname+"/contact.html","utf8");
			myReadStream.pipe(res);
		}else{
			res.writeHead(200,{"Content-type":"text/html"});
			var myReadStream = fs.createReadStream(__dirname+"/notFound.html","utf8");
			myReadStream.pipe(res);
		}
		
	}

	
	// var myReadStream = fs.createReadStream(__dirname+"/index.html","utf8");
	// var myReadStream = fs.createReadStream(__dirname+"/users.json","utf8");
	// myReadStream.pipe(res)

});
server.listen(3000,"127.0.0.1");
console.log("server is running...");