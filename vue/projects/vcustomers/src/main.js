
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'//请求数据
import App from './App'
import Customers from './components/Customers'
import About from './components/About'
import Add from './components/Add'
import CustomerDetail from './components/CustomerDetail'
import Edit from './components/Edit'



Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueResource)


const router = new VueRouter({
  routes:[
    {path:"/",component:Customers},
    {path:"/about",component:About},
    {path:"/add",component:Add},
    {path:"/customerDetail/:id",component:CustomerDetail},//根据路由参数跳转到对应页面
    {path:"/edit/:id",component:Edit}
  ],
  mode:"history",
  base:__dirname
})

new Vue({
  router,
  el: '#app',
  template: '<App/>',
  components: { App }
})
