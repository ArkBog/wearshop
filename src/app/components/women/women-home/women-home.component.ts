import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-women-home',
  templateUrl: './women-home.component.html',
  styleUrls: ['./women-home.component.css']
})
export class WomenHomeComponent implements OnInit {

  constructor(
    private productsService: ProductsService,
  ) {}

  products = this.productsService.women.women;

  ngOnInit() {
    console.log(this.products);
  }
}

