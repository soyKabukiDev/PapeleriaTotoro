import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../interface/product';  // Asegúrate de ajustar la ruta según tu estructura de proyecto

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = '/api/products';  // Ajusta la URL a tu API

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }
}
