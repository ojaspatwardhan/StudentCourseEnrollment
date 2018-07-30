import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceClient } from '../services/user.service.client';
declare var jquery:any;
declare var $:any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router, private service: UserServiceClient) { }

  username;
  password;
  confirmPassword;
  errorMessage;
  validUser = true;

  onRegister(username, password, confirmPassword) {
    console.log("working");
    if(username == undefined || password == undefined || confirmPassword == undefined) {
      this.errorMessage = "Fields cannot be blank";
      $("#errorMessage").slideDown();
      return
    }
    else if(password != confirmPassword) {
      this.errorMessage = "Passwords do not match";
      $("#errorMessage").slideDown();
      return;
    }
    else {
      this.service.findAllUsers().then((users) => {
        users.map((user) => {
          if(user.username == username) {
            this.errorMessage = "Username already taken";
            this.validUser = false;
            $("#errorMessage").slideDown();
          }
        })
      }).then(() => {
        if(this.validUser) {
          this.service.createUser(username, password)
          .then(() => this.router.navigate(['profile']));
        }
      })
    }

    this.validUser = true;

    // this.service.createUser(username, password)
    // .then(() => this.router.navigate(['profile']));
  }

  ngOnInit() {
  }

}
