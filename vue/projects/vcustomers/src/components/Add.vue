<template>
  <div id="add" class="container">
    <h1 class="text-muted">添加用户</h1>
    <br>
    <form v-on:submit="addCustomer">
      <div class="form-group">
        <label>姓名</label>
        <input type="text" class="form-control" placeholder="name" v-model="customer.name">
      </div>
      <div class="form-group">
        <label>电话</label>
        <input type="tel" class="form-control" placeholder="phone" v-model="customer.phone">
      </div>
      <div class="form-group">
        <label>邮箱</label>
        <input type="email" class="form-control" placeholder="email" v-model="customer.email">
      </div>
      <div class="form-group">
        <label>个人简历</label>
        <textarea rows="10" class="form-control" v-model="customer.profile"></textarea>
      </div>

      <button type="submit" class="btn btn-success btn-block mt-3">添加</button>

    </form>
  </div>
</template>

<script>


  export default {
    name: 'add',
    data(){
      return {
        customer:{

        }
      }
    },
    methods:{
      addCustomer:function (e) {
        if(!this.customer.name || !this.customer.phone || !this.customer.email){
          console.log("请输入对应的内容！");
        }else{
          let newCustomer = {
            name:this.customer.name,
            phone:this.customer.phone,
            email:this.customer.email,
            profile:this.customer.profile
          };

          this.$http.post("http://localhost:3000/users",newCustomer)
            .then((res)=>{
//              console.log(res);

//              路由跳转
              this.$router.push({path:"/",query:{alert:"用户添加成功"}});
              //$router:路由，跳转到某一页面
              //query:页面跳转时传送的信息
              e.preventDefault();
            })
        }
        e.preventDefault();
      }
    }

  }
</script>

<style>

</style>
