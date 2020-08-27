import { CounterProductsService } from './../../services/counter-products/counter-products.service';
import { ProductsService } from './../../services/products/products.service';
import { Component, OnInit, Input, ɵConsole } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../../interfaces/item';
import { Router } from '@angular/router';

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
  public productId: string;
  public qty: number;
  // public status: string = 'pending';
  // public dateEntry: number = Date.now();
  // public totalQuantity: number;
  public subscription: any;

  constructor(
    private counterProductService: CounterProductsService,
    private productsService: ProductsService,
    private router: Router
    ) {
    // this.counterProductService.currentDataCart.subscribe(item => this.counter = item);

    // this.counterProductService.currentNumber.subscribe(numb => {
    //   this.counter = numb;
    // });
  }

  ngOnInit(): void {
    this.subscription = this.counterProductService.currentDataCart.subscribe(productInCar => {
      if (productInCar) {
        this.items = productInCar;

        // this.totalQuantity = productInCar.length;
        this.totalPrice = productInCar.reduce((sum, current) => sum + (current.price * current.quantity), 0);
      }
    });
  }

  // disminuir(item: any): void {
  //   if (item.quantity === undefined){
  //             item.quantity = 0;
  //      } else if (item.quantity !== undefined && item.quantity > 0){
  //             --item.quantity;
  //      }
  //  }

  // ngOnChange(): void {
  //   this.counterProductService.currentDataCart.subscribe(productInCar => {
  //     if (productInCar) {
  //       this.items = productInCar;

  //       // this.totalQuantity = productInCar.length;
  //       this.totalPrice = productInCar.reduce((sum, current) => sum + (current.price * current.quantity), 0);
  //     }
  //   });
  // }

//   changeQty(product): void {
//   this.counterProductService.changeCart(product);
//   console.log(product);
// }

  public remove(product: Item): void {
    this.counterProductService.removeElementCart(product);
  }

  sendOrder(items): any {
    // const obj = {items: this.qty};

    this.order = { // orders obj products array
      client: this.client,
      products: items.map(prod => {
        const obj = {
          qty: prod.quantity,
          idprod: prod._id,
          name: prod.name,
          price: prod.price
        };
        console.log(obj);
        return obj;
      }
        ),
      // products: obj.items
      // .map(item => {
      //   this.qty = item.quantity,
      //   this.productId = item._id;
      // }),
      // map para destructurar el obj
      // status: this.status,
      // dateEntry: this.dateEntry
    };
    console.log(this.order);
    this.productsService.sendOrder(this.order);
    // this.productsService.sendOrder(items);
    this.router.navigate(['/orders']);
    this.subscription.unsubscribe();

    // setTimeout(() => {
    //   this.subscription.unsubscribe();
    // }, 10000);

  }

  // ngOnDestroy() { this.subscription(`onDestroy`); }
}
