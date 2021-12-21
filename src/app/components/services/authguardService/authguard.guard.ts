import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {
  constructor(private router: Router, private authenticationService:AuthenticationService) {}
  canActivate(): boolean {  
    if (!this.authenticationService.gettoken()) {  
        this.router.navigate(['log-in']);
        return false;
    }  
    return this.authenticationService.gettoken();  
}  
  
}
