<!--template:是我们需要用到的模板，模板中有且只有一个跟标签  -->
<template>
  <div id="app">
    <h1>Hello App</h1>
  	<users></users>
  </div>
</template>
<!-- 
  	script：标签中囊括的是所有的属性和方法
    export default{}：对外公开当前文件可被其他文件引入
    name：给当前组件起名，此名可在其他组件中以标签的形式调用
    conponents：承载所有当前组件需要依赖的其他组件
 -->
<script>
import Users from './components/Users'

export default {
  name: 'app',
  components:{
    "users":Users
  },
  data(){
  	return{
  		
  	}
  },
  methods:{
  	
  }
  
}
</script>
<!-- 
     组件嵌套：至少有两个组件(包括根组件)
     全局组件：需要在main.js中注册，注册后可以在任何有关联的组件中使用
     局部组件：哪个组件引入，就在哪个组件中使用

     嵌套流程：
        1.设计组件内容
        2.在引入组件中<app.vue>,script里import上方组件
        3.在引入组件中<app.vue>,export里components进行注册
        4.在引入组件template中<app.vue>，进行使用<users></users>
 -->
<style scoped>
  h1 {
    color: hotpink;
  }
</style>

<!-- scoped:域 -->
