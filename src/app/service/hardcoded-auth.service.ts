import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthService {

  constructor() { }

  authenticate(username: string, password: string) {

    if (username === "Nikolas" && password === "@ktm990#") {
      sessionStorage.setItem('authenticatedUser',username);
      return true;
    }
  }

  isUserLoggedIn(){
    let user=sessionStorage.getItem('authenticatedUser');
    return !(user==null);
  }

  logout(){
    sessionStorage.removeItem('authenticatedUser');
  }
}
