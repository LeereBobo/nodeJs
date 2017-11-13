new Vue({
  el:"#vue-app",
  data:{
    sbqage:18,
    x:0,
    y:0
  },
  methods:{
    addsbqage:function (inc) {
      // console.log("加一岁");
      this.sbqage +=inc;
    },
    subsbqage:function (inc) {
      // console.log("减一岁");
      this.sbqage -=inc;
    },
    moveXY:function (ev) {
      // console.log("鼠标正在移动");
      this.x=ev.offsetX;
      this.y=ev.offsetY;
    },
    stopPropagation:function (ev) {
      ev.stopPropagation;
    },
    alert:function () {
      alert("hello")
    },
    logName:function () {
      console.log("名字");
    },
    logAge:function () {
      console.log("年龄");
    }
  }


})
//事件是按钮触发时的处理逻辑的方法
//v-on 给某个事件<click>绑定的到某个元素上
//@: 语法糖 和v-on的效果一样

//事件值:可以带上具体的方法也可以是具体的属性
//优先级:首先找到方法，如果没有方法找到属性

//事件修饰符
//stop:阻止默认冒泡事件
//once: 只执行一次
//prevent:阻止默认事件
