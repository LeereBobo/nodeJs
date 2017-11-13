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

two.title = "something...";


