new Vue({
  el:"#vue-app",
  data:{
    changeColor:false,
    width:false
  },
  methods:{

  },
  computed:{
    compClass:function () {
      return{
        changeColor:this.changeColor,
        width:this.width,

      }
    }
  }
})
/*
 * 动态css样式
 * v-bind:用于绑定对应的样式对象(一定是对象)
 *class 对象值:有两个值分别是tureh和false
 *注意在对象中key值是样式value是属性
 *经常使用推荐使用compClass
*/
