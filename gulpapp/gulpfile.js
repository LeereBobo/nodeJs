// 文件名不可更改

const gulp = require("gulp");
const gulpCopy = require("gulp-copy");
const minImage = require("gulp-imagemin");
const uglify = require("gulp-uglify");
const sass = require("gulp-sass");
const webserver = require("gulp-webserver");


/*
	--常用方法--
	gulp.task  --定义任务
	gulp.src   --输入文件路径
	gulp.dest  --输出文件路径
	gulp.watch --监听文件变化

	
	--node方法--
	pipe       --管道
*/




// 定义具体任务
gulp.task("message",()=>{
	console.log("执行具体任务需要在终端运行 gulp message(任务名)");
});

// 定义拷贝任务
gulp.task("copyHtml",()=>{
	// 找到需要拷贝文件的路径
	gulp.src('src/*.html')
		.pipe(gulp.dest('dist'));//*为所有文件

});

// 定义压缩图片任务
gulp.task("imageMin",()=>{
	gulp.src("src/images/*")
		.pipe(minImage())
		.pipe(gulp.dest("dist/images"));
});

// 定义压缩JS代码任务
// 1.下载模块 -- gulp-uglify
// 2.引入模块 -- require
// 3.定义任务 -- task
// 4.在src下创建一个js文件夹，并创建一个js文件，随便写一个函数
// 5.实现任务
gulp.task("myUglify",()=>{
	gulp.src("src/src.js")
	.pipe(uglify())
	.pipe(gulp.dest("dist"));
})

// 定义sass转css任务
gulp.task("sass",()=>{
	gulp.src("src/sass/*.scss")
		.pipe(sass())
		.pipe(gulp.dest("dist/css"))
});

// 定义默认任务
gulp.task('default',["message","copyHtml","imageMin","myUglify","sass"]);//gulp 同时执行

// 监听任务:改变src中的文件，dist中的同一文件也会做出相应改变
gulp.task("watch",function(){
	gulp.watch("src/*.js",["myUglify"]);
	gulp.watch("src/images/*",["imageMin"]);
	gulp.watch("src/sass/*.scss",["sass"]);
	gulp.watch("src/*.html",["copyHtml"]);
})

// webserver 实时监听页面内容的改变，保存即执行
gulp.task("webserver",()=>{
	return gulp.src("app")
			   .pipe(webserver({
			   		//key不可换
			   		port:4000,//服务器端口号
			   		livereload:true,//热更新
			   		open:true
			   }))

});









