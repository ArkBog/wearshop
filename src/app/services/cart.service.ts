import { Injectable } from '@angular/core';
import { ProductInCart } from '../interfaces/product-in-cart';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  basket: ProductInCart[] = [];

  constructor() {}

  createProduct(choosenProduct: any, size: string, quantity: number){
    let product: ProductInCart = {
      id: choosenProduct.id,
      name: choosenProduct.name,
      price: choosenProduct.price,
      photo: choosenProduct.photos[0],
      quantity: quantity,
      size: size,
    };
    this.basket.push(product);
  }

  addToBasket(choosenProduct: any, size: string, quantity: number) {
    if (size === '') {
      alert('Choose size');
    } else {
      const existingProduct = this.basket.find((e) => e.id === choosenProduct.id && e.size === size);
      if(existingProduct){
        existingProduct.quantity += 1
      }else {
        this.createProduct(choosenProduct, size, quantity)
      }
    }
      
  }

}
