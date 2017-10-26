// const path = require("path");

module.exports = {
	// 配置入口文件
	entry:"./src/js/app.js",

	// 配置出口文件
	output:{
		path:__dirname+"/dist",
		// path:path.resolve(__dirname),
		filename:"bundle.js"
	},
	module:{ //配置模块信息
		loaders:[
			{
				test:/\.css$/,
				loader:"style-loader!css-loader"
				//与文件结合前后两边都需！
				// 加载所有的css文件
			},{
				test:/\.js$/, //$:所有的
				loader:"babel-loader",
				exclude:/node_modules/,//不包含
				query:{
					presets:["es2015"]
				}
			}
		]

	}

}