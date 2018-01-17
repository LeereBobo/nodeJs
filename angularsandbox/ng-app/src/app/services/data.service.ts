import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class DataService{
    // users:any;
	constructor(
		public http:Http
	){
		// this.users = ["张然","游洲","王津柳","李梦月"];
	}

	getUsers(){
		// return this.users;
		return this.http.get("https://jsonplaceholder.typicode.com/users")
				   .map(res => res.json());
	}

	/*
	 * 添加数据
	 * post 接口一样 参数要有
	 */
	addUser(user){
		return this.http.post("https://jsonplaceholder.typicode.com/users",user)
				   .map(res => res.json());
	}

	// 删除数据
	deleteUser(id){
		return this.http.delete("https://jsonplaceholder.typicode.com/users/"+id)
				   .map(res => res.json());
	}

	// 更新数据
	updateUser(user){
		return this.http.put("https://jsonplaceholder.typicode.com/users/"+user.id,user)
				   .map(res => res.json());
	}

	// 详情
	getSingleUser(id){
		return this.http.get("https://jsonplaceholder.typicode.com/users/"+id)
				   .map(res => res.json());
	}
}