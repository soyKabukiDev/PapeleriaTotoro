import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
  export class ventaService {
    /*private apiUrl = '/api/products';  // Ajusta la URL a tu API
  
    constructor(private http: HttpClient) { }
  
    getProducts(): Observable<Product[]> {
      return this.http.get<Product[]>(this.apiUrl);
    }*/
  
    private apiUrl = 'http://localhost:80/api/';
    constructor(private http: HttpClient){}
    public getallDetail(): Observable<any[]>{
      return this.http.get<any[]>(`${this.apiUrl}detail_venta`);
    }
  }
  