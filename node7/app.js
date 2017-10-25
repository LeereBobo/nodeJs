var express = require("express");
var app = express();

app.set("view engine","ejs");//设置ejs引擎

app.use("/assets",express.static(__dirname+'/assets'));//路径、文件名
// express无法访问静态资源，用上方法即可

app.get('/',(req,res)=>{
	// res.sendFile(__dirname+"/views/index.ejs");
	res.render("index");//专门识别ejs文件
});

app.get('/contact',(req,res)=>{
	// res.sendFile(__dirname+"/views/contact.ejs");//send相当于end,只传送纯文本
	res.render("contact");
});

// 路由参数
app.get('/blogs/:sbqid',(req,res)=>{
	var sbqdata = [

		{title:"博客1",author:"Henry",body:"this is first blog!"},
		{title:"博客2",author:"Bucky",body:"this is second blog!"},
		{title:"博客3",author:"Emily",body:"this is third blog!"}
	];
	
	res.render("blog",{id:req.params.sbqid,data:sbqdata});
})
app.listen(3000);
