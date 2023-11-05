import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(
    private cartService: CartService
  ){}

  basket = this.cartService.basket;

  ngOnInit() {
  }

  sumTheProduct(price:any, quantity: any){
    const sum = price * quantity;
    return sum
  }
  removeProduct(index: number){
    this.basket.splice(index, 1);
  }
  changeQuantity(index: number, arg:number){
    this.basket[index].quantity = this.basket[index].quantity + arg;
    if(this.basket[index].quantity < 1){
      this.removeProduct(index)
    }
  }
  sumCost(){
    return this.cartService.sumPrice()
  }

}
