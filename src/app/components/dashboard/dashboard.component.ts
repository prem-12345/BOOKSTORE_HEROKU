import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authguardService/authentication.service';
import { Router } from '@angular/router';
import { DataService } from '../services/data service/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  subscription: any;
  message: any;

  constructor(private authenticationService: AuthenticationService, private router:Router, private dataservice: DataService) { }

  ngOnInit(): void {

    this.subscription = this.dataservice.currentMessage.subscribe(message => {
      this.message = message;
      console.log(this.message);
      
  });

  }

  logOut(){
    this.authenticationService.logOut();
  }

  onCart(){
    this.router.navigateByUrl('/dashboard/my-cart');
  }

}
