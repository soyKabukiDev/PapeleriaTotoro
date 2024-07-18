import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
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
    public getstock(): Observable<any[]>{
        return this.http.get<any[]>(`${this.apiUrl}stock_warning`);
    }
  }