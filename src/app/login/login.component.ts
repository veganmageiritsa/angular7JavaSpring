import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username : String = 'Nikolas'
  password : String = '@ktm990#'
  invalidLogin : boolean = false;
  errorMessage : String = "Invalid Credentials"
  constructor() { }

  ngOnInit() {
  }

  handleLogin(){
    if(this.username==="Nikolas" && this.password==="@ktm990#"){
      this.invalidLogin=false;
    }
      else{
        this.invalidLogin=true;
      }
    }
  }

