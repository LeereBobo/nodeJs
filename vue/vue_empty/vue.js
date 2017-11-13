// 组件
Vue.component("greeting",{
	template:'<p>{{name}}: Hello component!<button v-on:click="changeName">changeName</button></p>',
	data:function(){
		return {
			name:"Huahua"
		}
	},
	methods:{
		changeName:function(){
			this.name = "Guagua";
		}
	}
});

new Vue({
  el:"#vue-app-one",
});

new Vue({
  el:"#vue-app-two",
});

/*
	component:组件的作用是抽离vue实例中的属性和方法
	vue-compo :包含 模板<html>  属性<data...>  方法<methods...>
	template  :模板中,有且只能有一个根标签



*/

