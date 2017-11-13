new Vue({
  el:"#vue-app",
  data:{
    a:0,
    b:0,
    age:20
  },
  methods:{
    // addToA:function () {
    //   console.log("这是methodsA");
    // },
    // addToB:function () {
    //   return this.b+this.age
    // }
  },
  computed:{
    addToA:function () {
      console.log("这是A");
      return this.a+this.age
    },
    addToB:function () {
      console.log("这是B");
      return this.b+this.age
    }
  }
})
//computed 使用场景
// computed :计算属性和方法methods使用方法相似,
// 使用场景：处理频繁调用方法的时候<搜索》建议使用计算属性
// 使用规则：即使属性在调用的时候不能加方法()
