import { Component, OnInit } from '@angular/core';
import {AuthService} from "../services/auth.service";
import {User} from "../model/user";
import {Router} from "@angular/router";
import {WebsocketService} from "../services/web-socket.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user:User;
  show = false;
  saleId=""
  constructor(private auth:AuthService,private router: Router,private sale:WebsocketService) { }

  ngOnInit() {
    this.auth.user$.subscribe(v=>this.user=v)
    this.sale.sale.subscribe(s=>{
      this.saleId = s._id
      this.show = true;
      setTimeout(() => this.show = false, 5000);
    })
  }



}
