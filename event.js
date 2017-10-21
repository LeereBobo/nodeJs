var event = require("events");//自写模块需路径，系统提供不需路径

// 实例化事件对象
var myEmitter = new event.EventEmitter();

// 注册事件
myEmitter.on("sbqEvent",function(){
	console.log("sbqEvent事件被触发");
});

// 激活事件
myEmitter.emit("sbqEvent");
