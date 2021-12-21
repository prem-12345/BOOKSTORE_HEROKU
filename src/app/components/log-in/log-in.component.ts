import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from '../services/user-service.service';
import { AuthenticationService } from '../services/authguardService/authentication.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  componentName = 'log-in';

  signupShown: boolean = true;
  
  loginForm !: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder,
    public router: Router,
    public userService:UserServiceService, 
    private authenticationService: AuthenticationService ,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {

    if(this.authenticationService.gettoken()){
      this.router.navigate(['dashboard'])
    }

    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      selectedvalue: ['', Validators.required]
  });

  
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {

    this.submitted = true;
    console.log(this.loginForm.value);
    
    if(this.loginForm.valid && this.loginForm.value.selectedvalue === "user"){
      let payload = {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password,
      }
  
      this.userService.login(payload).subscribe((response:any)=>{
        console.log("data is in login component",response);
        localStorage.setItem('token',response.result.accessToken)
        this.router.navigate(['dashboard/get-all-books']);
        this._snackBar.open('Login Successful', '', {
          duration: 2000,
        })
        
      })
    }else if(this.loginForm.valid && this.loginForm.value.selectedvalue === "admin"){
      let payload = {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password,
      }

      this.userService.adminLogin(payload).subscribe((response:any)=>{
        console.log(response);
        localStorage.setItem('token',response.result.accessToken)
        this.router.navigate(['/admin']);
        
      })
    }
   

    if (this.loginForm.invalid) {
        return;
    }
}


  login() {
    this.signupShown = true;
    this.router.navigateByUrl('log-in');
  }

  signup() {
    this.signupShown = false;
    this.router.navigateByUrl('sign-up');
  }

 

}
