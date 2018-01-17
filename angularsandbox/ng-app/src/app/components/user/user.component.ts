import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UserComponent implements OnInit {
  // 属性
  title = "BJH170705";

  name:string;
  age:number;
  email:string;
  hobbies:string[];
  address:Address;
  isEdit:boolean;
  
  constructor() { 
  	console.log("construtor run.....");
  }

  ngOnInit() {
  	// console.log("ngOnInit run.....");
  	this.name = "Henry";
  	this.age = 30;
  	this.email = "henry@gmail.com";
  	this.hobbies = ["赵云","阿轲","王昭君"];
  	this.address = {
  		city:"北京",
  		state:"昌平区",
  		street:"定泗路"
  	};
    this.isEdit = false;
  }

  onClick(name){
  	// this.name = name;
  	this.hobbies.push(name);
  }

  addHobby(hobby){
  	// console.log(hobby);
  	this.hobbies.unshift(hobby);
  	return false;
  }

  deleteHobby(i){
    this.hobbies.splice(i,1);
  }
}

interface Address{
	city:string,
	state:string,
	street:string
}
