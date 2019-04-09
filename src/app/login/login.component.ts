import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  constructor (private router : Router) { }

  ngOnInit() {
  }

  handleLogin(){
    if(this.username==="Nikolas" && this.password==="@ktm990#"){
      this.invalidLogin=false;
      this.router.navigate(['welcome' , this.username]);
    }
      else{
        this.invalidLogin=true;
      }
    }
  }

