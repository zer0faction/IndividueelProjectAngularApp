import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth.service";
import {User} from "../users.model";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  user: User = new User();

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.getUser()
      .then(res => this.user = res)
      .catch(error => console.log(error));
  }
}

