import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  constructor(private authService: AuthService, private ordersService: OrdersService){}

  yourOrders: any;
  
  userId = this.authService.loggedUser.id;

  ngOnInit() {
   this.yourOrders = this.ordersService.filteredOrders(this.userId)
  }


}
