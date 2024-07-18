import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
  export class inventoryService {
  
    private apiUrl = 'http://localhost:80/api/';
    constructor(private http: HttpClient){}
    public getallInventory(): Observable<any[]>{
      return this.http.get<any[]>(`${this.apiUrl}productos`);
    }
    public postInventory(producto: any): Observable<any>{
      const headers = new HttpHeaders({
        'Content-Type': 'application/json'
      });
      return this.http.post<any>(`${this.apiUrl}add_product`, producto, {headers});
    
    
    }
  }