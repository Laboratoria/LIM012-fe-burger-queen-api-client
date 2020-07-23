import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})

export class ConfigService {

  constructor(private http: HttpClient) { }

  login(users: any): Observable<any> {
    return this.http.post<any>('http://localhost:8000/auth', users);
  }

  tokenId(): string {
    return sessionStorage.getItem('token');
  }

  // login(users): Observable<any> {
  //   return this.http.post('http://localhost:8000/auth', users);
  // headers: HttpHeaders = new HttpHeaders({
  //   "Content-Type": "application/json"
  // });
}
