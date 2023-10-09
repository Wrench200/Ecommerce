import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';

import { AboutComponent } from './about/about.component';
import { Title } from '@angular/platform-browser';
import { CartpageComponent } from './cartpage/cartpage.component';
import { SignInComponent } from './Auth/sign-in/sign-in.component';
import { SignUpComponent } from './Auth/sign-up/sign-up.component';
import { CheckoutComponent } from './checkout/checkout.component';

const routes: Routes = [
  { path: '', component: HomeComponent, title: 'home'},
  { path: 'home', component: HomeComponent, title: 'Home' },
  { path: 'products', component: ProductsComponent, title: 'Products' },
  { path: 'about', component: AboutComponent, title: 'About'},
  {path: 'checkout', component: CheckoutComponent, title: 'Checkout'},
  { path: 'cart', component: CartpageComponent, title: 'Cart' },
  {path: 'signin', component: SignInComponent, title: 'Signin'},
  {path: 'signup', component: SignUpComponent, title: 'Signup'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
