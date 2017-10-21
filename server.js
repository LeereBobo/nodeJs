
// 这是创建服务器代码

//超文本传输协议
var http = require("http");
// 建立客户端和服务器
var server = http.createServer(function(req,res){
  
  console.log("客户端和服务器已经建立服务器通讯"+req.url);
  
  //识别后台传输的数据
  res.writeHead(200,{"Content-type":"text/plain"});//响应头：状态码，识别文本类型
  
  //服务器返回客户端
  res.end("is over");

});

//监听
server.listen(3000,"127.0.0.1");//监听：端口号，主机地址/服务器地址
console.log("server is running...");

