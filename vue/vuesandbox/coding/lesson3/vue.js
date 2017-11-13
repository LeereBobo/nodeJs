new Vue({
  el:"#vue-app",
  data:{
    age:18,
    name:"张三"
  },
  methods:{
    logName:function () {
      console.log(this.$refs.name.value);
      // console.log("名字");
      this.name=this.$refs.name.value
    },
    logAge:function () {
      this.age=this.$refs.sbqnames.value
    }
  }
})
// 双向数据绑定
// v-model 双向数据绑定 应用于input/textarea/select
// ref:用于设置元素位移标识 $refs获取属性值
// v-for ：用于遍历数组和对象
//
// in ：是变量和属性的分割线
// 变量：随便起名字，
// 属性：一定来自于data对象
// 数组：遍历数组时，默认传的值为数组元素，第二个值为下标
// 对象：遍历对象时，第一个值是val，第二个值是key
