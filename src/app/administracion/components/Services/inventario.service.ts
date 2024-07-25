import { Injectable } from '@angular/core';
import { HttpClient,HttpEvent,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
  export class inventoryService {
  
    private apiUrl = 'http://localhost:8080/api/'; // Asegúrate de que esta URL coincida con la ruta base en tu backend

  constructor(private http: HttpClient) {}

  public getAllInventory(): Observable<any[]> { // Ajustado el nombre del método para seguir las convenciones de nomenclatura
    return this.http.get<any[]>(`${this.apiUrl}products`); // Asegúrate de que esta ruta coincida con la ruta en tu controlador de Spring Boot
  }

  public postInventory(productFormData: FormData): Observable<HttpEvent<any>> {
    console.log('si llego la imagen',productFormData.get('image'))
    return this.http.post<any>(`${this.apiUrl}products`, productFormData, {
      reportProgress: true,
      observe: 'events'
    });
    
  }

  // Método para obtener un producto por su ID
  public getProductById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}products/${id}`);
  }

  public updateProduct(id: number, productFormData: FormData): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}products/${id}`, productFormData);
  }

  public deleteProduct(id: number): Observable<any>{
    return this.http.delete<any>(`${this.apiUrl}products/${id}`)
  }  
  }