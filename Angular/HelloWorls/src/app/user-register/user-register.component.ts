import { Component, OnInit } from '@angular/core';
import {AuthService} from "../services/auth.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private authService:AuthService,private router: Router) { }

  signForm :FormGroup


  ngOnInit() {
    this.signForm = this.formBuilder.group({
      login: ['', [ Validators.required, Validators.minLength(3)]],
      email: ['', [ Validators.required, Validators.email]],
       password: ['', [ Validators.required, Validators.minLength(3)]],
       confirmPassword: ['', [ Validators.required, Validators.minLength(3)]]
    })
  }

  signup(){
    this.authService.register({...this.signForm.value,role:"USER"})
      .subscribe(()=>this.router.navigate(["/"]));
  }


}
