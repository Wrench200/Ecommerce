import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import type { Product } from '../models';


@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private FAKE_API_URL = 'https://fakestoreapi.com';

  constructor(private http: HttpClient) { }

  getProducts( local : string ): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.FAKE_API_URL}/${local}`);
  }
  
}
