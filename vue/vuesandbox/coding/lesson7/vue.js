new Vue({
  el:"#vue-app",
  data:{
    colors:["hotpink","red","green"],
    users:[
      {name:"尹子涛",age:11},
      {name:"张三",age:21},
      {name:"张三",age:33},
      {name:"张三",age:14}
    ]
  },
  methods:{

  },
  computed:{

  }
})
/*
v-for ：用于遍历数组和对象

in ：是变量和属性的分割线
变量：随便起名字，
属性：一定来自于data对象
数组：遍历数组时，默认传的值为数组元素，第二个值为下标
对象：遍历对象时，第一个值是val，第二个值是key
*/
// 作业
// 在页面中的图片和进度条 两个button 一个是从新开始 一个是减少进度条的内的颜色宽度(不是改变宽度) 减少到50%时换图片
