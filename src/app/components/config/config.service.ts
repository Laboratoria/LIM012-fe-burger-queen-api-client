import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: "root"
})

export class ConfigService {
  constructor(private http: HttpClient) {}

  login(users: any): Observable<any> {
    return this.http.post<any>(`${environment}auth`, users);
  }
  tokenId(): string {
     return sessionStorage.getItem('token');
  }
}
