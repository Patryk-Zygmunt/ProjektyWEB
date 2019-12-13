import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {
  constructor() {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

   if(localStorage.getItem("token")) {
     let headers = {Authorization: `Bearer ${localStorage.getItem("token")}`};

     let req = request.clone({
       setHeaders: headers
     });
     return next.handle(req);
   }


  return next.handle(request);
}
}
