import { Component, OnInit } from '@angular/core';
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
  login: any;
  password: any;
  logEr: any;

  constructor(private authService:AuthService,private router: Router) { }

  ngOnInit() {
  }

  loginUser() {
    this.authService
      .auth(this.login,this.password).subscribe(
        r=>this.router.navigate(["/"]),
          err=>this.logEr=true
    )

  }

}
