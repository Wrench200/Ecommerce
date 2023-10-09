import { DolarPipe } from './../pipes/dolar.pipe';
import { Component, OnInit, TemplateRef, NgModule , Inject} from '@angular/core';
import { ProductsService } from './Shop-apiservic.service';
import { Product } from '../models';
import { TitlePipe } from '../pipes/title.pipe';

import { Observable } from 'rxjs';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomElementSchemaRegistry } from '@angular/compiler';
import { ActivatedRoute } from '@angular/router';
import { CartService } from './cart.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  
})
export class ProductsComponent implements OnInit {
  title = 'Our Products';
  products: Product[] = [];
  item: Product = {
    category: '',
    description: '',
    id: 0,
    image: '',
    price: 0 ,
    title:'ooo'
  }

  

  constructor(private productsService: ProductsService, public dialog: MatDialog, private route: ActivatedRoute,
    private cartService: CartService) { }

  ngOnInit(): void {
    this.getProducts('products');
  }

  getProducts(val: string): void {
    this.productsService.getProducts(val)
      .subscribe(products => this.products = products);
   
    
    
    
  }
  
  openDialog(val: any) {
    this.item = val
    this.dialog.open(DialogElementsExampleDialog, { data: this.item },);
    
  }
  addtocart(val: any) {
    this.cartService.addToCart(val);
    window.alert('Your product has been added to the cart!');
    
  }
  
 
}
@Component({
  selector: 'dialog-elements-example-dialog',
  templateUrl: 'dialog-elements-example-dialog.html',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule , DolarPipe , TitlePipe],
})
export class DialogElementsExampleDialog {

  constructor(@Inject(MAT_DIALOG_DATA) public data: Product, private cartService: CartService) { }
  addtocart(val: any) {
    this.cartService.addToCart(val)
    window.alert('Your product has been added to the cart!');
  }
  
}
 
 

