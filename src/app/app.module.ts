import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/home/navbar/navbar/navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar'
import { HomeComponent } from './components/home/home.component';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import {MatBadgeModule} from '@angular/material/badge';
import { SliderComponent } from './components/home/slider/slider.component';
import { LookbookComponent } from './components/home/lookbook/lookbook.component';
import { NewsletterComponent } from './components/home/newsletter/newsletter.component';
import { FooterComponent } from './components/home/footer/footer.component';
import { DressesComponent } from './components/women/dresses/dresses.component';
import { WomenShirtsComponent } from './components/women/women-shirts/women-shirts.component';
import { WomenSweatshirtsComponent } from './components/women/women-sweatshirts/women-sweatshirts.component';
import { WomenPantsComponent } from './components/women/women-pants/women-pants.component';
import { WomenShoesComponent } from './components/women/women-shoes/women-shoes.component';
import { MenShirtsComponent } from './components/men/men-shirts/men-shirts.component';
import { MenSweatshirtsComponent } from './components/men/men-sweatshirts/men-sweatshirts.component';
import { MenPantsComponent } from './components/men/men-pants/men-pants.component';
import { MenShoesComponent } from './components/men/men-shoes/men-shoes.component';
import { NewInComponent } from './components/new in/new-in/new-in.component';
import { SaleComponent } from './components/sale/sale.component';
import { WomenHomeComponent } from './components/women/women-home/women-home.component';
import { MenHomeComponent } from './components/men/men-home/men-home.component';
import { MenLookbookComponent } from './components/men/men-lookbook/men-lookbook.component';
import { WomenLookbookComponent } from './components/women/women-lookbook/women-lookbook.component';
import { PrivacyPolicyComponent } from './components/home/footer/privacy-policy/privacy-policy.component';
import { ShippingComponent } from './components/home/footer/shipping/shipping.component';
import { ContainsComponent } from './components/home/footer/contains/contains.component';
import { LookbookWomenComponent } from './components/home/lookbook/lookbook-women/lookbook-women.component';
import { LookbookMenComponent } from './components/home/lookbook/lookbook-men/lookbook-men.component';
import { ProductsService } from './services/products.service';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CartComponent } from './components/cart/cart.component';
import { PaymentComponent } from './components/payment/payment.component';
import { FavouritesComponent } from './components/profile/favourites/favourites.component';
import { OrdersComponent } from './components/profile/orders/orders.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SliderComponent,
    LookbookComponent,
    NewsletterComponent,
    FooterComponent,
    DressesComponent,
    WomenShirtsComponent,
    WomenSweatshirtsComponent,
    WomenPantsComponent,
    WomenShoesComponent,
    MenShirtsComponent,
    MenSweatshirtsComponent,
    MenPantsComponent,
    MenShoesComponent,
    NewInComponent,
    SaleComponent,
    WomenHomeComponent,
    MenHomeComponent,
    MenLookbookComponent,
    WomenLookbookComponent,
    PrivacyPolicyComponent,
    ShippingComponent,
    ContainsComponent,
    LookbookWomenComponent,
    LookbookMenComponent,
    ProductDetailsComponent,
    CartComponent,
    PaymentComponent,
    FavouritesComponent,
    OrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatBadgeModule
    
  ],
  providers: [AuthService, ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
