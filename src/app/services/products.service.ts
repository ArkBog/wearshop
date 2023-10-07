import { Injectable } from '@angular/core';
import women from '../database/products.json'
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  women = women

  constructor() { }
}
