import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-men-shirts',
  templateUrl: './men-shirts.component.html',
  styleUrls: ['./men-shirts.component.css']
})
export class MenShirtsComponent implements OnInit {
  constructor(
    private productsService: ProductsService,
    private router: Router
  ) {}

  products = this.productsService.products.filter((e) => e.sex === 'men' && e.type === 'Shirts');

  filteredProducts = this.products;

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
      const colorMatch =
        this.colorFilter === '' || product.color === this.colorFilter;
      const sizeMatch =
        this.sizeFilter === '' || product.size.includes(this.sizeFilter);

      return colorMatch && sizeMatch;
    });
  }
}
