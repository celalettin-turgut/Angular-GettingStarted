import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces/product';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private productUrl: string = 'api/products/products.json ';
  constructor(private http: HttpClient) {}

  getProducts():Observable<Product[]> {
    return this.http.get<Product[]>(this.productUrl);
  }
}
