import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class FavouritesService {

  favouritesProducts: any[] = [];


  constructor(private authService: AuthService) { }


  addProductToFavourites(product:any){
    if(this.authService.userIsLogged === true){
      if(this.favouritesProducts.find((e) => e.id === product.id)){
        const productIndex =  this.favouritesProducts.findIndex((e) => e.id === product.id);
        this.favouritesProducts.splice(productIndex, 1);
      }
      else {
        this.favouritesProducts.push(product);
        alert("Added to favourites");
      }
    }
    else{
      alert("You have to log in first")
    }
    
  }

}
