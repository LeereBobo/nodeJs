var one = new Vue({
  el:"#vue-app-one",
  data:{
    title:"this is vue-app-one"
  },
  methods:{
    

  },
  computed:{
    greet:function(){
      return "Hello App One!"
    }
  }

});

// 实例化多个Vue对象时，可以在当前实例化对象里改变另一个实例化对象的内容；
var two = new Vue({
  el:"#vue-app-two",
  data:{
    title:"this is vue-app-two"
  },
  methods:{
      changeTitle:function(){
        one.title = "anything...";
      }
    

  },
  computed:{
    greet:function(){
        return "Hello App Two!"
      }
  }

});

// 也可在外部更改实例化对象的内容
two.title = "something...";


