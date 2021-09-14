import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import * as env from './env';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private cookie: CookieService, private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.cookie.get('token') === env.token &&
      this.cookie.get('login') === env.login &&
      this.cookie.get('password') === env.password &&
      this.cookie.get('email') === env.email){
      return true;
    }
    else {
      this.router.navigate(['auth'])
      return false;
    }
  }
  
}
