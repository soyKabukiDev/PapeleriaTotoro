import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interface/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:8080/users'; // URL de tu API

  constructor(private http: HttpClient) {}

  // Obtener todos los usuarios
  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  // Obtener un usuario por ID
  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${id}`);
  }

  // Crear un nuevo usuario
  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, user);
  }

  // Actualizar un usuario existente
  updateUser(id: number, user: User): Observable<User> {
    return this.http.put<User>(`${this.apiUrl}/${id}`, user);
  }

  // Eliminar un usuario
  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  // Autenticación de usuario
  authenticateUser(username: string, password: string): Observable<User> {
    const params = new HttpParams()
      .set('username', username)
      .set('password', password);
    return this.http.post<User>(`${this.apiUrl}/authenticate`, null, { params });
  }
}
