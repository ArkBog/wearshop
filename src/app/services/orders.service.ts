import { Injectable } from '@angular/core';
import orders from '../database/orders.json'

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  data = orders.orders

  yourOrders: any[] = []

  constructor() { }

  filteredOrders(userId: string){
    return this.data.filter((e) => 
      e.userId === userId)
  }
}
