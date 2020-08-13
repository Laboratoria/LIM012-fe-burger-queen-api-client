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
    console.log(newData);
    
    const objCant: Item = {
      _id: newData._id,
      dateEntry: newData.dateEntry,
      image: newData.image,
      name: newData.name,
      price: newData.price,
      type: newData.type,
      quantity: 1
  };
    if (listCart.length !== 0) {
      const objIndex = listCart.findIndex((obj => obj._id === newData._id));
      if (objIndex !== -1)
      {
            const newArrOrder = listCart.map(product => {
              if (product._id === objCant._id) {
                objCant.quantity = product.quantity + 1;
                return objCant;
              } else {
                return product;
              }
            })
            console.log(newArrOrder);
            this.cart.next(newArrOrder);
      //   // objCant.quantity + 1;
      //   objCant.quantity = listCart[objIndex].quantity + 1;
      //   console.log(objCant);
        
      } else {
        
        let newProductInOlderList = listCart.concat(objCant);
        this.cart.next(newProductInOlderList);
        console.log(this.cart);
        
        // listCart.push(newData);
      }

    } else {
      // listCart = [];
      let firstNewArr = listCart.concat(objCant);
      this.cart.next(firstNewArr);
      // listCart.concat(objCant);
    }
    // this.cart.next(listCart);
  }

  public removeElementCart(newData: Item): void{
    let listCart = this.cart.getValue();
    let objIndex = listCart.findIndex((obj => obj._id === newData._id));
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
