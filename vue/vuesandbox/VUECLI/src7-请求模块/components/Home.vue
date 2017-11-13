<template>
  <div id="home">
    <!-- $event:固定值，传参用 -->
    <app-header v-on:titleChange="updateTitle($event)" v-bind:title="title"></app-header>
    <app-users v-bind:users="users"></app-users>
    <!-- 拿到具体数据必须绑定v-bind，否则拿到的只是字符串 -->
    <app-footer v-bind:title="title"></app-footer>
  </div>
</template>

<script>
import Header from './Header'
import Users from './Users'
import Footer from './Footer'

export default {
  name: 'home',
  components:{
  	"app-header":Header,
  	"app-users":Users,
  	"app-footer":Footer
  	
  },
  data(){
  	return{
  		users:[
        
      ],
      title:"AngularJS"
  	}
  },
  methods:{
  	updateTitle:function(title){
      this.title = title;
    }
  },
  created(){
    this.$http.get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        // console.log(res);
        this.users = res.body;
      })
  }
  
}
</script>

<style scoped>
  
</style>

