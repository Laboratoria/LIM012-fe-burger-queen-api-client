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

  public changeCart(NewProduct: Item): void {
    let listCart = this.cart.getValue();
    console.log(NewProduct);
    const objCant: Item = {
      _id: NewProduct._id,
      dateEntry: NewProduct.dateEntry,
      image: NewProduct.image,
      name: NewProduct.name,
      price: NewProduct.price,
      type: NewProduct.type,
      quantity: 1
  };
    if (listCart.length !== 0) {
      const objIndex = listCart.findIndex((obj => obj._id === NewProduct._id));
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
        // listCart.push(NewProduct);
      }

    } else {
      // listCart = [];
      const firstNewArr = listCart.concat(objCant);
      this.cart.next(firstNewArr);
      // listCart.concat(objCant);
    }
    // this.cart.next(listCart);
  }

  public removeElementCart(NewProduct: Item): void{
    const listCart = this.cart.getValue();
    const objIndex = listCart.findIndex((obj => obj._id === NewProduct._id));
    if (objIndex !== -1) {
      listCart[objIndex].quantity = 1;
      listCart.splice(objIndex, 1 );
    }
    this.cart.next(listCart);
  }


  changeNumber(value): void {
    this.numberSource.next(value);
  }
}
