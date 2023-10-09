import { Title } from '@angular/platform-browser';
import { HostListener, OnInit, TemplateRef } from '@angular/core';
import { Component } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { user } from './Auth/user';
import { Router } from '@angular/router';
import { AuthService } from './Auth/auth.service';
import { LocalStorageService } from './Auth/services/local-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  auth!: user;
  error_message: string | null = null
  route: any;
  constructor(
    private authservice: AuthService,
    private router: Router,
    private localstorage: LocalStorageService
  ) {
  
  
  }

  title = 'Ecommerce'
 
  login(): boolean {
    if (this.localstorage.select('auth') === null) {
      return false
    } else {
      return true
    }
  }
  @HostListener('window:scroll', ['$event'])
  scroll() {
    let a = window.scrollY;
    let b = 100;
    if (a >= b) {
      return true

    } else {
      return false

    }
  }

  ngOnInit(): void {
    initFlowbite();
    const auth = this.authservice.auth();
    this.auth = auth.data;
   this.login()
    
  }

  onexit() {
    const deletelocal: any = localStorage.removeItem('auth');

    this.redirectTo('home')
  }
  redirectTo(uri: string) {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
      this.router.navigate([uri]));
  }
}

