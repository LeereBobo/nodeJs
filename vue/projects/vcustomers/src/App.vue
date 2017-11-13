<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-success">
      <div class="container">
        <a class="navbar-brand" href="/">用户管理系统</a>
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <router-link class="nav-link text-white" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link text-white" to="/about">About</router-link>
            </li>
          </ul>
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <router-link class="nav-link text-white" to="/add">Add</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <br>
    <router-view></router-view>
  </div>

</template>

<script>


export default {
  name: 'app',

}
</script>

<style>

</style>
