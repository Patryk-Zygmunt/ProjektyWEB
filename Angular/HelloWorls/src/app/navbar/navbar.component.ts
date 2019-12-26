import { Component, OnInit } from '@angular/core';
import {AuthService} from "../services/auth.service";
import {User} from "../model/user";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user:User;
  constructor(private auth:AuthService,private router: Router) { }

  ngOnInit() {
    this.auth.user$.subscribe(v=>this.user=v)
  }

}
