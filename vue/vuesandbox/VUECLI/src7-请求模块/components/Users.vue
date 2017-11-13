<template>
  <div id="users">
    <ul>
      <li v-for="user in users">
        <h2>{{user.name}}</h2>
        <h3 >{{user.email}}</h3>
      </li>
    </ul>
    <button v-on:click="deleteUser">删除用户</button>
  </div>
</template>

<script>


export default {
  // props:["users"], //属性传值，简便写法

  // 正规写法，需指定当前数据类型
  props:{
    users:{
      type:Array,
      required:true
    }
  },
  data(){
  	return{
      
  	}
  },
  methods:{
    deleteUser:function(){
      this.users.pop();
    }
  }
  
}

/*
  属性传值：从父组件传值到子组件
    1.属性绑定<v-bind>  
    2.自定义属性<users>  
    3.props
  
  传值 & 传引用
  引用：Object Array
  传值：String,Number,Boolean...
  
  事件传值：从子组件传值到父组件
    1.注册事件<$emit>
    2.绑定事件<v-on:自定义事件>
    3.实现方法及逻辑
*/
</script>


<style scoped>
  #users {
    width: 100%;
    max-width: 1200px;
    margin-bottom: 40px auto;
    padding: 0 20px;
    box-sizing: border-box;
    color: #000;
    
  }
  ul{
    display: flex;
    flex-wrap:wrap;
    list-style: none;
    padding: 0;
  }
  li {
    flex-grow: 1;
    flex-basis:300px;
    text-align: center;
    padding: 30px;
    border: 1px solid #222;
    margin:10px;
  }

  
</style>
