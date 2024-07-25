import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VentaService {
  private apiUrl = 'http://localhost:8080/api/'; // Asegúrate de que esta URL coincida con la ruta base en tu backend

  constructor(private http: HttpClient) {}

  public getAllDetail(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}detail_sell`); // Ajusta la ruta para coincidir con las rutas en tu controlador
  }

  public postDetail(detail: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post<any>(`${this.apiUrl}add_detail`, detail, { headers }); // Ajusta la ruta para coincidir con las rutas en tu controlador
  }
}
