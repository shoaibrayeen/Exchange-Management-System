import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ApproverGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router){}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if(this.authService.isLoggedIn() && !this.authService.accessStatus() ) {
      return true;
    }
    else if ( this.authService.isLoggedIn() && this.authService.accessStatus() ) {
      return this.router.parseUrl('/forex');
    }
    else {
      return this.router.parseUrl('/login');
    }
  }
  
}
