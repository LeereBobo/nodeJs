<template>
  <footer>
    <h1>{{title}}</h1>
  </footer>
</template>

<script>


export default {
  
  data(){
  	return{
  		title:"Copyright 2017 Vue.js"
  	}
  },
  methods:{
  	
  }
  
}
</script>


<style scoped>
  footer {
    background:lightblue;
    padding: 10px;
  }
  h1 {
    color: #eee;
    text-align: center;
  }
</style>
