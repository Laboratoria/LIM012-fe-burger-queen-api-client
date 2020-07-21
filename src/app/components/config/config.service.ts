import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: "root"
})

export class ConfigService {
  constructor(private http: HttpClient) {}

  login(users): Observable<any> {
    return this.http.post("http://localhost:3000/users", users);
  // headers: HttpHeaders = new HttpHeaders({
  //   "Content-Type": "application/json"
  // });
}
}
