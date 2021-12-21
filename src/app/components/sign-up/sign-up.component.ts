import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from '../services/user-service.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  signupShown: boolean = true;
  componentName = 'sign-up'
  signupForm !: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,public router: Router, private userService:UserServiceService ,private _snackBar:MatSnackBar) { }

  ngOnInit() {
      this.signupForm = this.formBuilder.group({
          service: ['advance', [Validators.required]],
          fullName: ['', Validators.required],
          email: ['', [Validators.required, Validators.email]],
          password: ['', [Validators.required, Validators.minLength(6)]],
          phone: ['', [Validators.required, Validators.minLength(10)]],
          selectedvalue: ['', Validators.required]
      });
      
  }

  get f() { return this.signupForm.controls; }



  onSubmit() {

    this.submitted = true;
    console.log(this.signupForm.value);

    if (this.signupForm.valid && this.signupForm.value.selectedvalue === "user"){
      let payload = {
        fullName: this.signupForm.value.fullName,
        email: this.signupForm.value.email,
        password: this.signupForm.value.password,
        phone: this.signupForm.value.phone,
        service: this.signupForm.value.service
      }
      
      this.userService.signUp(payload).subscribe((response:any)=>{
        console.log("data is in sign-up component",response);
        this.router.navigate(['/log-in'])
        this._snackBar.open('Registration Successful', '',{
          duration:2000,
        })
      })
  
    }else if(this.signupForm.valid && this.signupForm.value.selectedvalue === "admin"){
      let payload = {
        fullName: this.signupForm.value.fullName,
        email: this.signupForm.value.email,
        password: this.signupForm.value.password,
        phone: this.signupForm.value.phone,
        service: this.signupForm.value.service
      }

      this.userService.adminSignup(payload).subscribe((response:any)=>{
        console.log(response);
        
      })



    }
   
    

}

login() {
  this.signupShown = false;
  this.router.navigateByUrl('log-in');
}

signup() {
  this.signupShown = true;
  this.router.navigateByUrl('sign-up');
}

}