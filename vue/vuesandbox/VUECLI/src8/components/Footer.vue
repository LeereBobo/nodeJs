<template>
  <footer>
    <h1>{{title1}}{{title}}</h1>
  </footer>
</template>

<script>


  export default {
    props: {
      title: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        title1: "Copyright 2017"
      }
    },
    methods: {}

  }
</script>


<style scoped>
  footer {
    background: lightgray;
    padding: 10px;
  }

  h1 {
    color: yellowgreen;
    text-align: center;
  }
</style>
