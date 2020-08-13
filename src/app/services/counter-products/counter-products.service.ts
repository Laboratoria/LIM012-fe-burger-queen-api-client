import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Item } from '../../interfaces/item';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CounterProductsService {
  private url: string;
  public products: any = [];

  private cart = new BehaviorSubject<Array<Item>>([]);
  public currentDataCart$ = this.cart.asObservable();

  private numberSource = new BehaviorSubject(0);
  currentNumber = this.numberSource.asObservable();

  constructor(private http: HttpClient) {
    this.url = environment.apiUrl;
  }

  public changeCart(newData: Item): void {
    let listCart = this.cart.getValue();
    if (listCart) {
      const objIndex = listCart.findIndex((obj => obj.id === newData.id));
      if (objIndex !== -1)
      {
        listCart[objIndex].quantity += 1;
      } else {
        listCart.push(newData);
      }
    } else {
      listCart = [];
      listCart.push(newData);
    }
    this.cart.next(listCart);
  }

  public removeElementCart(newData: Item): void{
    let listCart = this.cart.getValue();
    let objIndex = listCart.findIndex((obj => obj.id === newData.id));
    if (objIndex !== -1) {
      listCart[objIndex].quantity = 1;
      listCart.splice(objIndex,1);
    }
    this.cart.next(listCart);
  }


  changeNumber(value): void {
    this.numberSource.next(value);
  }
}
