
import Vue from 'vue'
import App from './App'

// 阻止 vue 在启动时生成生产提示。
Vue.config.productionTip = false

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})

/*   
  1.new Vue：vue的实例化对象,包含el/tem/com

  2.template：模板,写html/调用其他组件

  3.<App/>：代表模板要执行的组件文件,跟App.vue中的name属性有关

  4.components：组件组,包含需要调用的组件名,例如上面模板调用了<App/>,
               那么组件组中就一定要包含App组件

  5.import：用于导入需要一类的文件,如上组件组中,想引入App组件,
           需先使用import引入该组件文件

  6.import...from...：import+自起名字，from+组件名字    
*/




