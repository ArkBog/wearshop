import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FavouritesService } from 'src/app/services/favourites.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-men-shirts',
  templateUrl: './men-shirts.component.html',
  styleUrls: ['./men-shirts.component.css']
})
export class MenShirtsComponent implements OnInit {
  constructor(
    private productsService: ProductsService,
    private router: Router,
    private favouritesService: FavouritesService
  ) {}

  products = this.productsService.products.filter((e) => e.sex === 'men' && e.type === 'Shirts');

  filteredProducts = this.products;

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
      const colorMatch =
        this.colorFilter === '' || product.color === this.colorFilter;
      const sizeMatch =
        this.sizeFilter === '' || product.size.includes(this.sizeFilter);

      return colorMatch && sizeMatch;
    });
  }
  sortProducts(param: any) {
    switch (param) {
      case 'priceDesc':
        this.products = this.filteredProducts.sort(
          (firstItem, secondItem) => secondItem.price - firstItem.price
        );
        break;
      case 'priceAsce':
        this.products = this.filteredProducts.sort(
          (firstItem, secondItem) => firstItem.price - secondItem.price
        );
        break;
      case 'nameDesc':
        this.products = this.filteredProducts.sort((a, b) => {
          {
            if (a.name < b.name) {
              return 1;
            }
            if (a.name > b.name) {
              return -1;
            }
          }
          return 0;
        });
      break;
      case 'nameAsce':
        this.products = this.filteredProducts.sort((a, b) => {
          {
            if (a.name < b.name) {
              return -1;
            }
            if (a.name > b.name) {
              return 1;
            }
          }
          return 0;
        });
      break;
    }
  }
}
