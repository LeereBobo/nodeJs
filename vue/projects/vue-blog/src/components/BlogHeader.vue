<template>
  <nav>
    <ul class="list-group">
      <li class="list-group-item  bg-danger py-4">
        <router-link to="/" class="text-white px-4 h3">博客</router-link>
        <router-link to="/add" class="text-white h3">写博客</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
  export default{
    name:"blog-header"
  }
</script>
<style>

</style>
