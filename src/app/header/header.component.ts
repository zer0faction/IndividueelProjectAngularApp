import { Component, OnInit } from '@angular/core';
import {AuthService} from "../users/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onLogout(){
    this.authService.signoutUser();
  }

  isAuth(){
    if(this.authService.isAuthenticated() == true){
      return true;
    } else {
      return false;
    }

  }

}
