<template>
  <div id="app">
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/test">Test</router-link></li>
      </ul>
      <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'app',
  
  data(){
  	return{
  		
  	}
  },
  methods:{
  	
  }
  
}
</script>

<style scoped>
  
</style>

