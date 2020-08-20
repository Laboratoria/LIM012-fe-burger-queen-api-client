import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  public url: string;
  // public products: any = [];

  constructor(private http: HttpClient) {
    this.url = environment.apiUrl;
  }

  // private listProducts = new BehaviorSubject<Array<any>>([]);
  // public currentListProducts = this.listProducts.asObservable();

  // addListProducts(order) {
  //   const indexProduct = this.products.findIndex(product => product.name === order.name);

  //   if (indexProduct < 0 ) {
  //     const newOrder = {...order, quantity: 1};
  //     this.products.push(newOrder);
  //   } else {
  //     this.products[indexProduct].quantity += 1;
  //   }

  //   this.listProducts.next(this.products);
  // }
  sendOrder(order: any): void{
    this.http.post('http://localhost:3000/orders', order).subscribe(data => {
      console.log(data);
    });
  }

  getListProduct(): Observable<any> {
    return this.http.get<any>(`${this.url}products`);
  }
}

