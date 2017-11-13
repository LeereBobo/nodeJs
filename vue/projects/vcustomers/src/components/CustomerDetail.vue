<template>
  <div id="detail" class="container">
    <!--{{id}}-->
    <router-link class="btn btn-link" to="/">返回</router-link>
    <h1 class="display-4 text-muted">{{customer.name}}
        <span class="float-right">
          <router-link class="btn btn-info" v-bind:to="/Edit/+customer.id">编辑</router-link>
          <button class="btn btn-warning" v-on:click="deleteCustomer(customer.id)">删除</button>
        </span>
    </h1>
    <ul class="list-group">
      <li class="list-gruop-item" v-for="(val,key) in customer">
        <strong>{{key}}:</strong>{{val}}
      </li>
    </ul>

  </div>
</template>

<script>


  export default {
    name: 'detail',
    data(){
      return{
//        id:this.$route.params.id//第二个ID为路由参数中的ID $route:拿到浏览器里的参数
        customer:{}
      }
    },
    methods:{
      fetchCustomer(id){
        this.$http.get("http://localhost:3000/users/"+id)
          .then((res)=>{
//            console.log(res);
            this.customer = res.body;
          })
      },
      deleteCustomer(id){
        this.$http.delete("http://localhost:3000/users/"+id) //更新为put
          .then((res)=>{
              this.$router.push({path:"/",query:{alert:"用户删除成功"}});
          })
      }
    },
    created(){
      this.fetchCustomer(this.$route.params.id);
    }
  }
</script>

<style>

</style>
