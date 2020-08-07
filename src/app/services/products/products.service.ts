import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  public url: string;

  constructor(private http: HttpClient) {
    this.url = environment.apiUrl;
  }
  getListProduct(products: any): Observable<any> {
    return this.http.get<any>(`${this.url}products`, products);
  }
}
