<template>
  <div id="show-blogs" v-theme:column="'wide'" class="container mt-4 bg-secondary">
    <div class="clearfix">
      <h1 class="float-left text-white pt-3">博客总览</h1>
      <input type="text" placeholder="搜索..." v-model="search" class="float-right mt-4">
    </div>

    <div v-for="blog in filteredBlogs" class="single-blog card my-4">
      <router-link v-bind:to="'/blog/' + blog.id" class="card-footer">
        <h2 v-rainbow class="text-dark">{{blog.title | to-uppercase}}</h2>
      </router-link>
      <!--| to-uppercase：管道|  过滤器-->

      <article class="card-body h3">{{blog.body | snippet}}</article>
    </div>
  </div>
</template>

<script>


  export default {
    name: 'show-blogs',
    data(){
      return{
        blogs:[],
        search:""
      }
    },
    created(){
      this.$http.get('https://jsonplaceholder.typicode.com/posts')
        .then(function(data){
//          console.log(data);
          this.blogs = data.body.slice(0,10);
//          console.log(this.blogs);

        })
    },
    computed:{
      filteredBlogs:function(){
        console.log(123456);
        return this.blogs.filter((blog)=>{
          return blog.title.match(this.search)
        })
      }
    },
    filters:{
      /*"to-uppercase":function(value){
        return value.toUpperCase();
      }*/

      toUppercase(value){
        return value.toUpperCase();
      }
    },
    directives:{
      'rainbow':{
        bind(el,binding,vnode){
          el.style.color = "#" + Math.random().toString(16).slice(2,8);
        }
      }
    }

  }
</script>

<style>

</style>
