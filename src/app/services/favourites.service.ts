import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavouritesService {

  favouritesProducts: any[] = [];

  constructor() { }

  addProductToFavourites(product:any){
    if(this.favouritesProducts.find((e) => e.id === product.id)){
      const productIndex =  this.favouritesProducts.findIndex((e) => e.id === product.id);
      this.favouritesProducts.splice(productIndex, 1);
    }
    else {
      this.favouritesProducts.push(product);
      alert("Added to favourites");
    }
    console.log(this.favouritesProducts);
  }

}
