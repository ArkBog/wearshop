import { Component } from '@angular/core';
import { FavouritesService } from 'src/app/services/favourites.service';
import { ProductsService } from 'src/app/services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent {

  constructor(private favouritesService: FavouritesService, private productsService: ProductsService, private router: Router) { }

  products = this.favouritesService.favouritesProducts;

  choosenProduct(param: any) {
    this.productsService.product = param;
    this.router.navigate(['/product-details']);
  }

  addToFavourites(product:any){
    return this.favouritesService.addProductToFavourites(product)
  }
  
}
