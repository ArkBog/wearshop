import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  userIsLogged = false;
  loggedUser: any;

  isUserLoggedIn(){
    return this.userIsLogged
  }
}
