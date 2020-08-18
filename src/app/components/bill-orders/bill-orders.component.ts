import { CounterProductsService } from './../../services/counter-products/counter-products.service';
import { ProductsService } from './../../services/products/products.service';
import { Component, OnInit, Input, ɵConsole } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../../interfaces/item';



@Component({
  selector: 'app-bill-orders',
  templateUrl: './bill-orders.component.html',
  styleUrls: ['./bill-orders.component.scss']
})
export class BillOrdersComponent implements OnInit {
  // etiqueta Input en el componente hijo
  @Input() hijoBillOrders: any;
  counter: any;
  client: string;
  public items: Array<Item>;
  public totalPrice: number;
  public order: any;
  public status: string = 'pending';
  public dateEntry: number = Date.now();
  // public totalQuantity: number;

  constructor(
    private counterProductService: CounterProductsService,
    private productsService: ProductsService
    ) {
    // this.counterProductService.currentDataCart.subscribe(item => this.counter = item);

    // this.counterProductService.currentNumber.subscribe(numb => {
    //   this.counter = numb;
    // });
   }

  ngOnInit(): void {
    this.counterProductService.currentDataCart.subscribe(productInCar => {
      if (productInCar) {
        this.items = productInCar;

        // this.totalQuantity = productInCar.length;
        this.totalPrice = productInCar.reduce((sum, current) => sum + (current.price * current.quantity), 0);
      }
    });
  }

  public remove(product: Item): void {
    this.counterProductService.removeElementCart(product);
  }

  sendOrder(items): void {
    this.order = [{
      client: this.client,
      products: this.items,
      status: this.status,
      dateEntry: this.dateEntry
    }];
    console.log(this.order);
    this.productsService.sendOrder(this.order);
  }
}
