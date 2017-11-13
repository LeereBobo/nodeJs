// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

// 引入路由模块
import VueRouter from 'vue-router'
import App from './App'
import Routes from './routes'


Vue.config.productionTip = false

// 使用路由模块
Vue.use(VueRouter)

// 配置路由
const router = new VueRouter({
  routes:Routes,
  mode:"history" //干掉地址栏中的#
})


/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  template: '<App/>',
  components: { App }
})

