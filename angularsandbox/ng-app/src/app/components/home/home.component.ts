import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DataService } from '../../services/data.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  users:any;

  user:any = {
    name:"",
    email:"",
    phone:""
  };

  isEdit:boolean = false;

  constructor(
  	public dataService:DataService
  ) { 
  	// console.log(this.dataService.users);
  	// this.users = this.dataService.users;
  	// this.users = this.dataService.getUsers();
  	this.dataService.getUsers().subscribe(res => this.users = res);
  }

  /*
   * 添加数据
   * 实现方法
   * 定义属性
   * 链接服务
   * 数组添加
   */

   onSubmit(isEdit){
     if (isEdit) {
        // 编辑
        this.dataService.updateUser(this.user)
            .subscribe(user => {
              // 删除当前数据
            for(let i = 0; i < this.users.length;i++){
              if (this.users[i].id == this.user.id) {
                this.users.splice(i,1);
              }
            }
              // 添加得到的user
              this.users.unshift(user);
        });
     }else{
       // 添加
       this.dataService.addUser(this.user)
         .subscribe(user => {
           this.users.unshift(user);
       })
     }
   }


   /* 删除数据
    * 实现方法
    * 连接服务
    * 数组删除
    * 定义属性
    */

    onDelete(id){
      this.dataService.deleteUser(id)
          .subscribe(user => {
            for(let i = 0; i < this.users.length;i++){
              if (this.users[i].id == id) {
                this.users.splice(i,1);
              }
            }  
      });
    }

    /* 编辑数据
     * 实现方法
     * 连接服务
     * 删除当前数据
     * 更新现有数据
     */

    onEdit(user){
      this.isEdit = true;
      this.user = user;
    }


  ngOnInit() {
    
  }

}
