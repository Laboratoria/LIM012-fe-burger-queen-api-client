import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})

export class ConfigService {
  public url: string;

  constructor(private http: HttpClient) {
    this.url = environment.apiUrl;
  }

  login(users: any): Observable<any> {
    return this.http.post<any>(`${this.url}auth`, users);
  }

  // tokenId(): string {
  //  return sessionStorage.getItem('token');
  // }

  setToken(token: String) {
    return sessionStorage.set('token', token);
  }
  getToken(): string {
    return sessionStorage.get('token');
  }
  getUser() {
    return this.http.get(`${this.url}auth`);
  }
  getUserLogged() {
    const token = this.getToken();
    // Aquí iría el endpoint para devolver el usuario para un token
  }
}
