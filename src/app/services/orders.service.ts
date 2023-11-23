import { Injectable } from '@angular/core';
import orders from '../database/orders.json'

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  data = orders.orders

  yourOrders: any[] = [];
  currentOrders: any = [];

  constructor() { }

  filteredOrders(userId: string){
    this.yourOrders =  this.data.filter((e) => 
      e.userId === userId)
  }
}
