import { AngularFireAuth } from 'angularfire2/auth';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {Injectable} from "@angular/core";
import {User} from "../model/user";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {log} from "util";
import {map} from "rxjs/operators";

@Injectable({providedIn: 'root'})
export class AuthService {


  private readonly URL = environment.server_url
  userSource = new Subject<User>();
  user$ = this.userSource.asObservable();

  constructor(private http:HttpClient) {}


 auth(login, password):Observable<User|null>{
    return this.login(login,password)
      .pipe(
        map(u=>{

          console.log(u)
        localStorage.setItem("token",u.token)
        localStorage.setItem("user_id",u._doc._id)
        localStorage.setItem("role",u._doc.role)
        this.userSource.next(u._doc)
        return u._doc;
      }))
 }

 login(login, password):Observable<any> {
    return this.http.post<any>(this.URL+ 'auth',{login:login, password:password})
  }

  register(user) {
    return this.http.post(this.URL+ 'signup',user)
  }

  logout() {
    localStorage.clear();
    this.userSource.next(null)
  }
}
