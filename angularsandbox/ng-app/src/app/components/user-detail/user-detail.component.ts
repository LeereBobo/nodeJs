import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router";
import { DataService } from '../../services/data.service';
@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UserDetailComponent implements OnInit {
  id:number;
  user:object = {};
  constructor(
  		private router: Router,
  		private route:ActivatedRoute,
      public dataService:DataService 
  	) { 
  	// console.log(this.route.params._value.id);
  	this.route.params
  		.subscribe((params:Params) => {
  			// console.log(params.id);
        this.id = params.id;
  	})
  }

  ngOnInit() {
    this.dataService.getSingleUser(this.id)
        .subscribe(user => {
          this.user = user;
          console.log(this.user);
    })
  }

}
