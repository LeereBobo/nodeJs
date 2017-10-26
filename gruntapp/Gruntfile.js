module.exports = function(grunt){
	
	// 配置Grunt方法
	grunt.initConfig({
		pkg:grunt.file.readJSON("package.json"),//读取package文件
		cssmin:{ //此名可更改
			combine:{
				files:{
					"app/css/style.css":["app/css/background.css","app/css/fontsize.css"]//合并
				}	
			}
		},
		uglify:{
			dist:{
				files:{
					"app/js/main.min.js":["app/js/main.js"]//压缩
				}
			}
		}
	});

	grunt.loadNpmTasks("grunt-contrib-cssmin");//加载模块
	grunt.loadNpmTasks("grunt-contrib-uglify");

	grunt.registerTask("default",["cssmin","uglify"]);

	

	//创建任务列表
	/*grunt.registerTask("default","",function(){
		grunt.log.write("在终端运行Grunt命令，就会执行这句话！");//打印
	});*/
}