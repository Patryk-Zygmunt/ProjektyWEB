import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor( private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot) {
    if (localStorage.getItem("token") && localStorage.getItem("role") === 'ADMIN') {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
