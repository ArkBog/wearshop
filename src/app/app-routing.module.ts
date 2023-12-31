import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { WomenHomeComponent } from './components/women/women-home/women-home.component';
import { MenShoesComponent } from './components/men/men-shoes/men-shoes.component';
import { DressesComponent } from './components/women/dresses/dresses.component';
import { WomenShirtsComponent } from './components/women/women-shirts/women-shirts.component';
import { WomenSweatshirtsComponent } from './components/women/women-sweatshirts/women-sweatshirts.component';
import { WomenPantsComponent } from './components/women/women-pants/women-pants.component';
import { WomenShoesComponent } from './components/women/women-shoes/women-shoes.component';
import { MenShirtsComponent } from './components/men/men-shirts/men-shirts.component';
import { MenSweatshirtsComponent } from './components/men/men-sweatshirts/men-sweatshirts.component';
import { MenPantsComponent } from './components/men/men-pants/men-pants.component';
import { NewInComponent } from './components/new in/new-in/new-in.component';
import { MenHomeComponent } from './components/men/men-home/men-home.component';
import { SaleComponent } from './components/sale/sale.component';
import { LookbookWomenComponent } from './components/home/lookbook/lookbook-women/lookbook-women.component';
import { LookbookMenComponent } from './components/home/lookbook/lookbook-men/lookbook-men.component';
import { PrivacyPolicyComponent } from './components/home/footer/privacy-policy/privacy-policy.component';
import { ShippingComponent } from './components/home/footer/shipping/shipping.component';
import { ContainsComponent } from './components/home/footer/contains/contains.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CartComponent } from './components/cart/cart.component';
import { AuthGuard } from './auth.guard';
import { PaymentComponent } from './components/payment/payment.component';
import { FavouritesComponent } from './components/profile/favourites/favourites.component';
import { OrdersComponent } from './components/profile/orders/orders.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Women', component: WomenHomeComponent },
  { path: 'dresses', component: DressesComponent },
  { path: 'women-shirts', component: WomenShirtsComponent },
  { path: 'women-sweatshirts', component: WomenSweatshirtsComponent },
  { path: 'women-pants', component: WomenPantsComponent},
  { path: 'women-shoes', component: WomenShoesComponent},
  {path: 'Men', component: MenHomeComponent},
  { path: 'men-shirts', component: MenShirtsComponent},
  { path: 'men-sweatshirts', component: MenSweatshirtsComponent},
  { path: 'men-pants', component: MenPantsComponent},
  { path: 'men-shoes', component: MenShoesComponent },
  {path: 'New in', component: NewInComponent},
  {path: 'Sale', component: SaleComponent},
  {path: 'lookbook-women', component:LookbookWomenComponent},
  {path: 'lookbook-men', component:LookbookMenComponent},
  {path: 'privacy-policy', component:PrivacyPolicyComponent},
  {path: 'shipping', component:ShippingComponent},
  {path: 'contains', component:ContainsComponent},
  {path: 'product-details', component: ProductDetailsComponent},
  {path: 'cart-component', component: CartComponent},
  {path: 'favourites-component', component: FavouritesComponent},
  {path:"payment", component: PaymentComponent, canActivate: [AuthGuard]},
  {path:"orders", component: OrdersComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
