import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { FavouritesService } from 'src/app/services/favourites.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-women-home',
  templateUrl: './women-home.component.html',
  styleUrls: ['./women-home.component.css'],
})
export class WomenHomeComponent implements OnInit {
  constructor(
    private productsService: ProductsService,
    private router: Router,
    private favouritesService: FavouritesService
  ) {}

  products = this.productsService.products.filter((e) => e.sex === 'women');

  filteredProducts = this.products;

  typeFilter: string = '';
  colorFilter: string = '';
  sizeFilter: string = '';
  
  favProd = this.favouritesService.favouritesProducts;

  ngOnInit() {

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
