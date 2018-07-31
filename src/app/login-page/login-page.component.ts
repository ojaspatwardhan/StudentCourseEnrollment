import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceClient } from '../services/user.service.client';
import { CookieService } from 'ngx-cookie-service';
declare var jquery:any;
declare var $:any;

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private router: Router, private service: UserServiceClient, private cookieService: CookieService) { }

  username;
  password;
  errorMessage;
  cookieValue = "";

  ngOnInit() {
  }

  login(username, password) {
    if(username != undefined && password != undefined) {
      this.service.login(username, password).then((user) => {
        if(user != null) {
          this.cookieService.set("username", username);
          this.cookieValue = this.cookieService.get("username");
          console.log(this.cookieValue)
          this.router.navigate(['profile']);
        }
        else {
          console.log("Unsuccessful");
          this.errorMessage = "Please check username/ password";
          $("#errorMessage").slideDown();
          $("#username").val("");
          $("#password").val("");
          return;
        }
      });
    }
    else {
      this.errorMessage = "Username and/ or password cannot be blank";
      $("#errorMessage").slideDown();
      return;
    }
  }

}
