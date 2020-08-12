import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterProductsService {
  private numberSource = new BehaviorSubject(0);
  currentNumber = this.numberSource.asObservable();
  constructor() { }

  changeNumber(value) {
    this.numberSource.next(value);
  }
}
