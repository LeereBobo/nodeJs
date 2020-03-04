<template>
  <div id="app">
    <!-- 1.state && getters -->
    <!-- <p>调用count+1：{{count}}</p>
    <p>completed为true的todo：{{completedTodos}}</p>
    <p>completed为true的todo的个数：{{completedTodosCount}}</p>
    <p>根据传入的id值展示出对应的todo:{{getTodosById(3)}}</p> -->

    <!-- 2.mutations -->
    <!-- <button @click="decrementCount({amount:1})">-</button>
    <span>{{count}}</span>
    <button @click="incrementCount">+</button> -->

    <!-- 3.actions -->
    <button @click="decrementCountAsync({amount:1})">-</button>
    {{count}}
    <button @click="incrementCountAsync">+</button>
    <hr>
    <!-- fetchTodos -->
    <div>{{completedTodos}}</div>
    <button @click="fetchTodos">拉取数据</button>
  </div>
</template>

<script>
// 引入vuex,通过解构的形式拿到mapState
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
export default {
  name: 'App',
  components: {
    
  },
  // 4.action && mapActions
  /* methods:{
    increment(){
      this.$store.dispatch('incrementCountAsync');
    },
    decrement(m){
      this.$store.dispatch('decrementCountAsync',m);
    },
    fetchTodos(){
      this.$store.dispatch('fetchTodos');
    }
  }, */
  // 使用mapActions简写：
  methods:mapActions(['incrementCountAsync','decrementCountAsync','fetchTodos']),

  // 3.mutation && mapMutations
  /* methods:{
    incrementCount(){
      // 触发mutation里的方法
      this.$store.commit("incrementCount");
    },
    decrementCount(n){
      this.$store.commit("decrementCount",n);
    }
  }, */
  // 使用mapMutations简写：
  // methods:mapMutations(["incrementCount","decrementCount"]),


  // 2.Getter && mapGetters
  /* computed:{
    count(){
      return this.$store.getters.count;
    },
    completedTodos(){
      return this.$store.getters.completedTodos;
    },
    completedTodosCount(){
      return this.$store.getters.completedTodosCount;
    },
    getTodosById(){
      return this.$store.getters.getTodosById;
    }
  } */
  
  // 使用mapGetters简化写法：
  computed:mapGetters(['count','completedTodos','completedTodosCount','getTodosById']),


  // 1.state && mapState
  /* computed:{
    mycount(){
      return this.$store.state.count;
    },
    mytodos(){
      return this.$store.state.todos;
    }
  } */

  // mapState写法一：mapState是一个方法，包含对应的对象state
  // state,count,todos均为store-index.js中所定义
  /* computed:mapState({
    count:state => state.count,
    todos:state => state.todos
  }) */

  // mapState写法二：mapState是一个方法，包含对应的数组
  // count,todos均为store-index.js中所定义
  // computed:mapState(['count','todos'])

}
</script>

<style>

</style>
