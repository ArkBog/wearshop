import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Menu } from 'src/app/interfaces/menu';
import { AuthService } from 'src/app/services/auth.service';
import users from "../../../../database/users.json";


const data = users

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  menuOptions: Menu[] = [
    {
      name: 'Women',
      submenu: ['Dresses', 'Shirts', 'Sweatshirts', 'Pants', 'Shoes'],
    },
    { name: 'Men',
      submenu: ['Shirts', 'Sweatshirts', 'Pants', 'Shoes'] 
    },
    {name:'New in'},
    {name: 'Sale'},
  ];

  loginFormIsOpen = false;

  login:string = "admin";
  password:string = "admin123";

  menuIsOpen = "";

  constructor(private authService:AuthService) {}

  usersFounded:any;
  userLogged = false;
  userLogin:string = "";
  userId:string = "";
  userPhoto: string = "";
  userName: string = ""

  loginForm = new FormGroup({
    login: new FormControl,
    password: new FormControl,
  })

  onSubmitLogin(){
    for(let i = 0; i < data.users.length; i++){
      if(data.users[i].login === this.loginForm.value.login && data.users[i].password === this.loginForm.value.password){
        this.usersFounded = data.users[i];
        console.log(this.usersFounded);
        this.authService.userIsLogged = true;
        this.userLogged = true;
        this.userLogin = this.usersFounded.login;
        this.userPhoto = this.usersFounded.photo;
        this.userName = this.usersFounded.name;
      }
    }
  }
  openLoginForm(){
    if(this.loginFormIsOpen === false){
      this.loginFormIsOpen = true;
      console.log(this.loginFormIsOpen)
    }
    else {
      this.loginFormIsOpen = false;
      console.log(this.loginFormIsOpen)
    }
  }
  openMenu(arg: string){
    this.menuIsOpen = arg;
  }
}
