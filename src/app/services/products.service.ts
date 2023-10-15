import { Injectable } from '@angular/core';
import products from '../database/products.json'
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products = products.products;

  product:any = '';

  constructor() { }
}
