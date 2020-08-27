import { Component, OnInit } from '@angular/core';
import { CounterProductsService } from './../../services/counter-products/counter-products.service';
import { ProductsService } from './../../services/products/products.service';
import { Order } from '../../interfaces/order';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  navbarPadre = 'mensaje desde el padre';
  foodordersPadre = 'mensaje desde el padre';
  public showOrders: any;
  public orders: Order[];
  // public product: any;

  constructor(
    private counterProductService: CounterProductsService,
    private productsService: ProductsService,
  ) { }

  ngOnInit(): void {
    this.productsService.kitchenOrders().subscribe(
      (data: Order[]) => {
      this.orders = data;
      console.log(this.orders);

      /*this.showOrders = {
        order: data.forEach(element => {
          console.log(element);
          const obj = {
            client: element.client,
            id: element.id,
            prod: element.products
          };
          console.log(obj.client);
          console.log(obj.prod[0].name);
          return obj;
        }),
      };*/
    });
  }
 
}
