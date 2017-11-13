new Vue({
  el:"#vue-app",
  data:{
    sbqname:"Henry",
    sbqjob:"web开发",
    sbqwebsite:"https://user.qzone.qq.com/389152218/infocenter",
    sbqsiteTag:"<a href='https://www.4399.com'>点击一下,你就知道</a>",
    sbqsiteTag2:"<input value='this.sbqname'>"
  },
  methods:{
    sbqgreet:function (sbqtime) {
        console.log(this);
        return "Good "+sbqtime+" "+this.sbqname+"!";

    }

  }


})
//el:element 需要控制的标签元素
// data:用于存储各种类型的数据 (array,object,string,number)
// methods 用于存储各种方法
// v-bind :用于绑定某个属性<指令>
// v-html 用于某个标签绑定值为标签的属性
// : 是v-bind的语法糖
