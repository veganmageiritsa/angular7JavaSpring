import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthService {

  constructor() {
  }

  static authenticate(username: string, password: string) {

    if (username === 'Nikolas' && password === '@ktm990#') {
      sessionStorage.setItem('authenticatedUser', username);
      return true;
    }
  }

  isUserLoggedIn() {
    const user = sessionStorage.getItem('authenticatedUser');
    return !(user == null);
  }

  static logout() {
    sessionStorage.removeItem('authenticatedUser');
  }
}
