

const goods = require("./data/goods.json");
const rating = require("./data/rating.json");
const seller = require("./data/seller.json");

module.exports = {
	publicPath:'/', // 根路径
	outputDir:'dist', // 构建输出目录
	assetsDir:'assets', // 静态资源目录(js,css,img,fonts)
	lintOnSave:false, // 是否开启eslint保存检测，有效值：true || false || 'error'
	devServer:{
		open:false, //npm run serve后不会自动弹出网页
		host:"localhost", //与127.0.0.0--同为本机主机域名  0.0.0.0--真机测试的域名
        port:8081, //默认8080，可按需修改
        https:false, //该值默认为http,true--https，浏览器弹出警告
        hotOnly:false, //webpack的热更新
        proxy:{
        	// 配置跨域：协议头，域名，端口号有一个不一样，即为跨域--同源策略
        	// 请求后端接口
        	'/api':{
        		target:'http//localhost:5000', //设置跨域地址
        		ws:true, //websockets，是否跨域
        		changeOrigin:true, //本地会虚拟一个服务端接收你的请求并代你发送该请求
        		pathRewrite:{
        			'^/api':''  //正则表达式，这里理解成用‘/api’代替target里面的地址，
        			            //后面组件中我们掉接口时直接用api代替,
        			// 比如调用'http://localhost:5000/users'，直接写‘/api/users’即可
        		}
        	}
        },
        before(app){
        	//数据请求地址：http://localhost:8081/api/goods
        	app.get("/api/goods",(req,res)=>{
        		res.json(goods);
        	});

        	app.get("/api/rating",(req,res)=>{
        		res.json(rating);
        	});
        	app.get("/api/seller",(req,res)=>{
        		res.json(seller);
        	})
        }
	}
}





