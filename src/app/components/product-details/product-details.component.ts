import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  constructor(private productsService: ProductsService, private cartService: CartService) {}

  products = this.productsService.products;
  productId = this.productsService.product;

  product: any = '';

  count = 0;

  photoSrc = '';

  ngOnInit(): void {
    this.product = this.products.find((e) => e.id === this.productId);
    this.photoSrc = this.product.photos[this.count];
  }

  changeSlide(param: number) {
    this.count = this.count + param;
    if(this.count < 0 ){
      this.count = this.product.photos.length - 1
    }
    if(this.count > this.product.photos.length - 1){
      this.count = 0
    }
    this.photoSrc = this.product.photos[this.count];
  }
  paginationChangeSlide(param:number){
    this.count = param;
    this.photoSrc = this.product.photos[this.count];
  }
  addToCart(choosenProduct:any, size:string, quantity: number){
    this.cartService.addToBasket(choosenProduct, size, quantity);
    console.log(this.cartService.basket);
  }
}
