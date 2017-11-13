<template>
  <div id="add-blog" class="container">
    <div class="card mt-4  bg-secondary text-white">
      <h2 class="py-2 pl-2 card-title bg-">添加博客</h2>
      <form v-if="!submmited" class="card-body">
        <div class="form-group">
          <label for="">博客标题</label>
          <input type="text" v-model="blog.title" required class="form-control">
        </div>

        <div class="form-group">
          <label for="">博客内容</label>
          <textarea v-model="blog.content" rows="10" class="form-control"></textarea>
        </div>



        <div id="checkboxes" class="my-4">博客分类
          <div class="d-flex justify-content-between">
            <div>
              <label>Vue.js</label>
              <input type="checkbox" value="Vue.js" v-model="blog.categories">
            </div>
            <div>
              <label>Node.js</label>
              <input type="checkbox" value="Node.js" v-model="blog.categories">
            </div>
            <div>
              <label>React.js</label>
              <input type="checkbox" value="React.js" v-model="blog.categories">
            </div>
            <div>
              <label>Angular.js</label>
              <input type="checkbox" value="Angular.js" v-model="blog.categories">
            </div>
          </div>

        </div>
        <div class="my-4">
          <label for="">作者:</label>
          <select v-model="blog.author">
            <option v-for="author in authors">
              {{author}}
            </option>
          </select>
        </div>

        <button v-on:click.prevent="post1" class="btn btn-danger">添加博客</button>
      </form>

    </div>

    <div v-if="submmited">
      <h3>您的博客发布成功！</h3>
    </div>


    <div id="preview" class="card mt-4 bg-secondary text-white">
      <h3 class="card-title pl-3 pt-3">博客总览</h3>
      <div class="card-body">
        <p>博客标题:{{blog.title}}</p>
        <p>博客内容:</p>
        <p>{{blog.content}}</p>
        <p>博客分类：</p>
        <ul>
          <li v-for="category in blog.categories">
            {{category}}
          </li>
        </ul>
        <p>作者:{{blog.author}}</p>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'add-blog',
    data () {
      return {
        blog:{
          title:"",
          content:"",
          categories:[],//与checkbox类型绑定
          author:""
        },
        authors:["Hemiah","Herny","Bucky"],
        submmited:false
      }
    },
    methods:{
      post1:function(){
        console.log(this.$http);
        this.$http.post('https://jsonplaceholder.typicode.com/posts',{
          title:this.blog.title,
          body:this.blog.content,
          userId:1
        })
          .then(function(data){
            console.log(data);
            this.submmited = true;
          });
      }
    }


  }
</script>


<style scoped>

</style>
