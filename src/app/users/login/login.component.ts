import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth.service";
import {User} from "../users.model";
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userForm: FormGroup;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.onInit();
  }

  onInit(){
    let newUser = new User();

    this.userForm = new FormGroup({
      'username': new FormControl('',Validators.required),
      'password': new FormControl('',Validators.required),
      'moviesWatched': new FormArray([])
    })
  }

  onSignin(){
      this.authService.signinUser(this.userForm.value)
  }
}
