import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { LoginService } from '../login/login.service'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(
    private router: Router,
    private loginService: LoginService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = this.loginService.currentUserValue;
    const currentToken = this.loginService.currentTokenHolderValue;

    if(currentUser && currentToken) {
      // logged in so return true
      return true;
    }

    // not logged in so redirect to login page passing the returnUrl in GET params
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    // console.log('state.url : ' + state.url);
    return false;
  }
  
}
