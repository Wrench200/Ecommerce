import { Injectable } from '@angular/core';
import { Product } from '../models';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = []
  user = localStorage.getItem('auth');
  

  addToCart(product: Product) {
    this.items.push(product);
    const local = localStorage.setItem('cart', JSON.stringify(this.items));
    console.log();
    
  }
constructor(private router: Router){}
  getItems() {

    return this.items;
    
  }
  delete() {
  
}
  clearCart() {
    this.items = [];
    this.redirectTo('cart')
    return this.items;
  }
  redirectTo(uri: string) {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
      this.router.navigate([uri]));
  }

  checkout() {
    if (this.user) {
      this.router.navigate(['checkout'])

    }
    else {
      this.router.navigate(['signin'])
    }
  }
}
