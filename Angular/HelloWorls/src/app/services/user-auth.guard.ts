import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAuthGuard implements CanActivate  {

  constructor( private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot) {
    if (localStorage.getItem("token")) {
      return true;
    } else {
      this.router.navigate(['/login']).then(()=>{});
      return false;
    }
  }

}
