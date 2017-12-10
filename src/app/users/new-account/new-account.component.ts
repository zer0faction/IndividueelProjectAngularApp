import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {AuthService} from "../auth.service";
import {User} from "../users.model";
import {Movie} from "../../movies/movies.model";

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent implements OnInit {
  userForm: FormGroup;

  constructor(private authService: AuthService) {}

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

  onSignup(){
    this.authService.signupUser(this.userForm.value);
  }
}
