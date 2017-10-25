var express = require("express");//方法
var app = express();//app变为对象

/*app.get('/',function(req,res){

});*/

// 有多少page，写多少app.get
app.get('/',(req,res)=>{
	// console.log(req);
	res.send("This is Home Page!");

});//拿到浏览器里的url以便监听

app.get('/contact',(req,res)=>{
	res.send("This is Contact Page!");
});

// 路由参数大多以ID为主
app.get('/blogs/:sbqid',(req,res)=>{
	console.log(req);
	res.send("具体的路由参数为："+req.params.sbqid);
})
app.listen(3000);//第二个参数：默认当前主机IP地址
