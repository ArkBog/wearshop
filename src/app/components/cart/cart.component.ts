import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  constructor(
    private cartService: CartService,
    private ordersService: OrdersService,
    private authService: AuthService
  ) {}

  basket = this.cartService.basket;
 
  ordersArray: any;

  ngOnInit() {}

  sumTheProduct(price: any, quantity: any) {
    const sum = price * quantity;
    return sum;
  }
  removeProduct(index: number) {
    this.basket.splice(index, 1);
  }
  changeQuantity(index: number, arg: number) {
    this.basket[index].quantity = this.basket[index].quantity + arg;
    if (this.basket[index].quantity < 1) {
      this.removeProduct(index);
    }
  }
  sumCost() {
    return this.cartService.sumPrice();
  }
  makeOrder() {
    let userId = this.authService.loggedUser.id;
    let orderId = this.ordersService.data.length + 1;
      let order = {
        id: orderId,
        userId: userId,
        products: [{}],
        price: this.sumCost(),
        status: 'checking',
        date: Date(),
      };
      for(let i = 0; i < this.basket.length; i++){
        let product = {
          productId: this.basket[i].id,
          quantity: this.basket[i].quantity,
          productName: this.basket[i].name,
        }
        order.products.push(product)
      }
      order.products.shift()
      this.ordersService.currentOrders.push(order);
      console.log(this.ordersService.currentOrders)
  }
}
