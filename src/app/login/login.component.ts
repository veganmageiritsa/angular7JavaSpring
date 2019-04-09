import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthService } from '../service/hardcoded-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username : string = 'Nikolas'
  password : string = '@ktm990#'
  invalidLogin : boolean = false;
  errorMessage : string = "Invalid Credentials"
  constructor (private router : Router ,
    private hardcodedAuthService : HardcodedAuthService) { }

  ngOnInit() {
  }

  handleLogin(){
    if(this.hardcodedAuthService.authenticate(this.username,this.password)){
      this.invalidLogin=false;
      this.router.navigate(['welcome' , this.username]);
    }
      else{
        this.invalidLogin=true;
      }
    }
  }

