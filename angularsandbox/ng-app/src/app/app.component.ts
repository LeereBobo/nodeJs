import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Henry';
}
/* ts的构成:
 * 
 *  - 引入需要用的模块 <import>
 *  - 声明组件信息    <@Component>
 *  - 创建或引入类    <属性 / 方法>
 *
 *  - @Component
 *  selector: 指令,供其他地方使用
 *  template: 模板,具体的html结构
 *  templateUrl: 模板Url,执行的html文件
 *  styleUrls: 样式,执行的css文件
 */