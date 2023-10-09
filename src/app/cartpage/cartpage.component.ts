import { CartService } from './../products/cart.service';
import { Component } from '@angular/core';
import { DolarPipe } from '../pipes/dolar.pipe';
import { Product } from '../models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cartpage',
  templateUrl: './cartpage.component.html',
  styleUrls: ['./cartpage.component.scss']
})
export class CartpageComponent {
  items: Product[] = this.CartService.getItems();
  
  constructor(private CartService: CartService) {
  

  }
  clear() {
    this.CartService.clearCart()
  }
  checkout() {
    this.CartService.checkout()
  }
}
