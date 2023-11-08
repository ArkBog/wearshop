import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FavouritesService } from 'src/app/services/favourites.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-men-home',
  templateUrl: './men-home.component.html',
  styleUrls: ['./men-home.component.css']
})
export class MenHomeComponent implements OnInit {
  constructor(
    private productsService: ProductsService,
    private router: Router,
    private favouritesService: FavouritesService
  ) {}

  products = this.productsService.products.filter((e) => e.sex === 'men');

  filteredProducts = this.products;

  typeFilter: string = '';
  colorFilter: string = '';
  sizeFilter: string = '';

  favProd = this.favouritesService.favouritesProducts;

  ngOnInit() {
    console.log(this.products);
  }

  choosenProduct(param: any) {
    this.productsService.product = param;
    this.router.navigate(['/product-details']);
  }
  addToFavourites(product: any) {
    return this.favouritesService.addProductToFavourites(product);
  }

  filterProducts() {
    this.filteredProducts = this.products.filter((product) => {
      const typeMatch =
        this.typeFilter === '' || product.type === this.typeFilter;
      const colorMatch =
        this.colorFilter === '' || product.color === this.colorFilter;
      const sizeMatch =
        this.sizeFilter === '' || product.size.includes(this.sizeFilter);

      return typeMatch && colorMatch && sizeMatch;
    });
  }
}
