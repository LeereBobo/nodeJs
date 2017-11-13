<!--template:是我们需要用到的模板，模板中有且只有一个跟标签  -->
<template>
  <div id="app">
  	<h1>{{title}}</h1>
   	<p>{{greeting()}}</p>
  </div>
</template>
<!-- 
  	script：标签中囊括的是所有的属性和方法
    export default{}：对外公开当前文件可被其他文件引入
    name：给当前组件起名，此名可在其他组件中以标签的形式调用
    conponents：承载所有当前组件需要依赖的其他组件
 -->
<script>


export default {
  name: 'app',
  data(){
  	return{
  		title:"This is our first cli project"
  	}
  },
  methods:{
  	greeting:function(){
  		return "Hello vue.js!"
  	}
  }
  
}
</script>
<!-- 
     style:
 -->
<style>
 
</style>
