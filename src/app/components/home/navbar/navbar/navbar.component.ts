import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Menu } from 'src/app/interfaces/menu';
import { AuthService } from 'src/app/services/auth.service';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import users from '../../../../database/users.json';
import { CartService } from 'src/app/services/cart.service';

const data = users;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  menuOptions: Menu[] = [
    {
      name: 'Women',
      submenu: [
        { name: 'Dresses', path: 'dresses' },
        { name: 'Shirts', path: 'women-shirts' },
        { name: 'Sweatshirts', path: 'women-sweatshirts' },
        { name: 'Pants', path: 'women-pants' },
        { name: 'Shoes', path: 'women-shoes' },
      ],
    },
    {
      name: 'Men',
      submenu: [
        { name: 'Shirts', path: 'men-shirts' },
        { name: 'Sweatshirts', path: 'men-sweatshirts' },
        { name: 'Pants', path: 'men-pants' },
        { name: 'Shoes', path: 'men-shoes' },
      ],
    },
    { name: 'New in' },
    { name: 'Sale' },
  ];

  loginFormIsOpen = false;
  cartIsOpen = false;

  login: string = 'admin';
  password: string = 'admin123';

  menuIsOpen = '';

  constructor(
    private authService: AuthService,
    public breakpointObserver: BreakpointObserver,
    private cartService: CartService
  ) {}

  usersFounded: any;
  userLogged = false;
  userLogin: string = '';
  userId: string = '';
  userPhoto: string = '';
  userName: string = '';

  loginForm = new FormGroup({
    login: new FormControl(),
    password: new FormControl(),
  });

  basket:any[] = this.cartService.basket; 

  ngOnInit() {}

  onSubmitLogin() {
    for (let i = 0; i < data.users.length; i++) {
      if (
        data.users[i].login === this.loginForm.value.login &&
        data.users[i].password === this.loginForm.value.password
      ) {
        this.usersFounded = data.users[i];
        console.log(this.usersFounded);
        this.authService.userIsLogged = true;
        this.userLogged = true;
        this.userLogin = this.usersFounded.login;
        this.userPhoto = this.usersFounded.photo;
        this.userName = this.usersFounded.name;
        this.authService.loggedUser = this.usersFounded;
      }
    }
  }
  openLoginForm() {
    if (this.loginFormIsOpen === false) {
      this.loginFormIsOpen = true;
    } else {
      this.loginFormIsOpen = false;
    }
  }
  openCart() {
    if (this.cartIsOpen === false) {
      this.cartIsOpen = true;
    } else {
      this.cartIsOpen = false;
    }
  }
  openMenu(arg: string) {
    this.menuIsOpen = arg;
    this.breakpointObserver
      .observe(['(min-width: 1000px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.menuIsOpen = '';
        }
      });
  }
  closeMenu(){
    this.breakpointObserver
      .observe(['(max-width: 1000px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.menuIsOpen = 'none';
        }
      });
  }
  sumProducts():number {
    const numberOfProducts = this.basket.reduce((accumulator, element) => accumulator + element.quantity, 0);
    return numberOfProducts
  }
  cost(){
    return this.cartService.sumPrice();
  }
}
