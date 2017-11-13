<template>
  <div id="app">
    <!-- $event:固定值，传参用 -->
    <app-header v-on:titleChange="updateTitle($event)" v-bind:title="title"></app-header>
    <app-users v-bind:users="users"></app-users>
    <!-- 拿到具体数据必须绑定v-bind，否则拿到的只是字符串 -->
    <app-footer v-bind:title="title"></app-footer>
  </div>
</template>

<script>
import Header from './components/Header'
import Users from './components/Users'
import Footer from './components/Footer'

export default {
  name: 'app',
  components:{
  	"app-header":Header,
  	"app-users":Users,
  	"app-footer":Footer
  	
  },
  data(){
  	return{
  		users:[
        {name:"Herny",position:"程序猿",show:false},
        {name:"Mary",position:"程序媛",show:false},
        {name:"Bucky",position:"程序猿",show:false},
        {name:"Lisa",position:"程序猿",show:false},
        {name:"Emily",position:"程序猿",show:false},
        {name:"Leere",position:"程序猿",show:false}
      ],
      title:"AngularJS"
  	}
  },
  methods:{
  	updateTitle:function(title){
      this.title = title;
    }
  }
  
}
</script>

<style scoped>
  
</style>

