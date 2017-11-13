<template>
  <div id="edit" class="container">
    <h1 class="text-muted">编辑用户</h1>
    <br>
    <form>
      <div class="form-group">
        <label>姓名</label>
        <input type="text" class="form-control" v-bind:value="customer.name" v-model="customer.name">
      </div>
      <div class="form-group">
        <label>电话</label>
        <input type="tel" class="form-control" v-bind:value="customer.phone" v-model="customer.phone">
      </div>
      <div class="form-group">
        <label>邮箱</label>
        <input type="email" class="form-control" v-bind:value="customer.email" v-model="customer.email">
      </div>
      <div class="form-group">
        <label>教育经历</label>
        <input type="text" class="form-control" v-bind:value="customer.education" v-model="customer.education">
      </div>
      <div class="form-group">
        <label>毕业学校</label>
        <input type="text" class="form-control" v-bind:value="customer.graduationSchool" v-model="customer.school">
      </div>
      <div class="form-group">
        <label>个人职位</label>
        <input type="text" class="form-control" v-bind:value="customer.profession" v-model="customer.profession">
      </div>
      <div class="form-group">
        <label>个人简历</label>
        <textarea rows="10" class="form-control" v-bind:value="customer.profile" v-model="customer.profile"></textarea>
      </div>

      <button type="submit" class="btn btn-success btn-block mt-3" @click.prevent="updateCustomer(customer.id)">更新</button>

    </form>
  </div>
</template>

<script>


  export default {
    name: 'edit',
    data(){
      return{
        customer:{},
      }
    },
    methods:{
      fetchData(id){
        this.$http.get("http://localhost:3000/users/"+id)
          .then((res)=>{
            console.log(res);
            this.customer = res.body;
          })
      },
      updateCustomer(id){
        console.log(id)
        this.$http.put("http://localhost:3000/users/"+id,this.customer) //更新为put
          .then((res)=>{
            this.$router.push({path:"/",query:{alert:"用户更新成功"}});
          })
      }
    },
    created(){
      this.fetchData(this.$route.params.id);
    }

  }
</script>

<style>

</style>
