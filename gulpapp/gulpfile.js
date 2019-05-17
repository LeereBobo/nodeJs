// 这是基于gulp4.0的方法实例

const gulp = require('gulp');
const minImage = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
const webserver = require('gulp-webserver');

// 1.定义默认任务，终端运行gulp
gulp.task('default',()=>{
	console.log("hahhaha");
});

// 2.定义具体任务，终端运行gulp taskName
gulp.task("message",async()=>{
	await console.log("执行具体任务需要在终端运行 gulp message(任务名)");
});

// 3.定义拷贝任务
gulp.task("copyHtml",async()=>{
	await gulp.src('src/*.html')
	.pipe(gulp.dest('dist'));
	
});

// 4.定义图片压缩任务
gulp.task("imageMin",()=>{
	return new Promise((resolve,reject)=>{
		gulp.src('src/images/*')
		.pipe(minImage())
		.pipe(gulp.dest('dist/images'));
		resolve();
	});
});

// 5.定义压缩js代码任务
gulp.task("myUglify",(done)=>{
	gulp.src("src/src.js")
	.pipe(uglify())
	.pipe(gulp.dest("dist"));
	done();
});

// 6.定义sass转css任务
gulp.task("sass",async()=>{
	await gulp.src("src/sass/style.scss")
	.pipe(sass())
	.pipe(gulp.dest("dist/css"));
});

// 7.定义默认任务，gulp命令直接运行series中的多个任务
gulp.task('default',gulp.series('copyHtml','message','imageMin','myUglify','sass',function(done){
	console.log("按照顺序执行");
	done();
}));

// 8.监听任务
// gulp4.0  方法一
gulp.task("watch",()=>{
	gulp.watch("src/*.js",gulp.series('myUglify'));
	gulp.watch("src/images/*",gulp.series('imageMin'));
	gulp.watch("src/sass/*.scss",gulp.series('sass'));
	gulp.watch("src/*html",gulp.series('copyHtml'));
});

// gulp4.0 方法二 回调函数法
/*gulp.task("watch",()=>{
	gulp.watch('src/*.html',async()=>{
		gulp.src('src/*.html')
		.pipe(gulp.dest('dist'));
	})
});*/

// 9.webserver 实时监听页面内容的改变，保存即执行
gulp.task("webserver",()=>{
	return gulp.src('app')
				.pipe(webserver({
					port:4000,
					livereload:true,// 实时刷新，去掉f5刷新的痛点
					open:true// 服务器启动时自动打开网页
				}))
});




