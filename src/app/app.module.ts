import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { TitlePipe } from './pipes/title.pipe';
import { DolarPipe } from './pipes/dolar.pipe';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { MatButtonModule  } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { CartpageComponent } from './cartpage/cartpage.component';
import { SignInComponent } from './Auth/sign-in/sign-in.component';
import { SignUpComponent } from './Auth/sign-up/sign-up.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CheckoutComponent } from './checkout/checkout.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    
   
    
   
    FooterComponent,
    AboutComponent,
    ProductsComponent,
    CartpageComponent,
    SignInComponent,
    SignUpComponent,
    CheckoutComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DolarPipe,
    MatButtonModule,
    MatDialogModule,
    TitlePipe,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
   
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
