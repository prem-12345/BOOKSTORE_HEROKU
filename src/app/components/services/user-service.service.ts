import { Injectable } from '@angular/core';
import { HttpServiceService } from './http-service.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  token:any;

  constructor(private httpService: HttpServiceService) {
    this.token = localStorage.getItem('token');
   }


 signUp(reqPayLoad: any) {
    console.log("data is in user service",reqPayLoad);
    let options = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
      })
    }
    return this.httpService.postService('/bookstore_user/registration', reqPayLoad, false, options);

  }


  login(data: any) {
    console.log("data is in user service",data);
    let options = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
      })
    }
    return this.httpService.postService('/bookstore_user/login', data, false, options);
  }

  adminSignup(reqPayLoad: any) {
    console.log("data is in user service",reqPayLoad);
    let options = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
      })
    }
    return this.httpService.postService('/bookstore_user/admin/registration', reqPayLoad, false, options);

  }

  adminLogin(data: any) {
    console.log("data is in user service",data);
    let options = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
      })
    }
    return this.httpService.postService('/bookstore_user/admin/login', data, false, options);
  }





}



