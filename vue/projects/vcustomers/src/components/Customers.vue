<template>
  <div id="customers" class="container">
    <Alert v-bind:message="alert"></Alert>
    <h1 class="page-header">用户管理系统</h1>
    <br>
    <input type="text" class="form-control" placeholder="根据姓名搜索内容" v-model="filterInput">
    <br>
    <table class="table table-striped">
      <thead>
      <tr>
        <th>姓名</th>
        <th>电话</th>
        <th>邮箱</th>
        <th></th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="customer in filterCustomers(customers,filterInput)">
        <td>{{customer.name}}</td>
        <td>{{customer.phone}}</td>
        <td>{{customer.email}}</td>
        <td>
          <router-link v-bind:to="/customerDetail/+customer.id">详情</router-link>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import Alert from "./Alert"

  export default {
    name: 'customers',
    data(){
      return {
        customers:[],
        filterInput:"",
        alert:""
      }
    },
    methods:{
      fetchCustomers(){
        this.$http.get("http://localhost:3000/users")
          .then((res)=>{
//          console.log(res);
            this.customers = res.body;
          })
      },
      filterCustomers(customers,filterInput){
       return customers.filter(function(item){
//      console.log(item.name)
          return item.name.match(filterInput);//match()字符串匹配方法
        })
      }
    },
    created(){
      if(this.$route.query.alert){
        this.alert = this.$route.query.alert;
      }
      this.fetchCustomers();
    },
    components:{
      Alert
    }

  }
</script>

<style>

</style>
