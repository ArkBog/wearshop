import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-new-in',
  templateUrl: './new-in.component.html',
  styleUrls: ['./new-in.component.css']
})
export class NewInComponent implements OnInit {
  constructor(
    private productsService: ProductsService,
    private router: Router
  ) {}

  products = this.productsService.products.filter((e) => e.newIn === true);

  filteredProducts = this.products;

  sexFilter: string = '';
  colorFilter: string = '';
  sizeFilter: string = '';

  ngOnInit() {
    console.log(this.products);
  }

  choosenProduct(param: any) {
    this.productsService.product = param;
    this.router.navigate(['/product-details']);
  }
  addToFavourites(param: any) {
    console.log(param);
  }

  filterProducts() {
    this.filteredProducts = this.products.filter((product) => {
      const sexMatch =
        this.sexFilter === '' || product.sex === this.sexFilter;
      const colorMatch =
        this.colorFilter === '' || product.color === this.colorFilter;
      const sizeMatch =
        this.sizeFilter === '' || product.size.includes(this.sizeFilter);

      return sexMatch && colorMatch && sizeMatch;
    });
  }
}
