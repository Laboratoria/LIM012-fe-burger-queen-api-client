import { Component, OnInit } from '@angular/core';
// import { CounterProductsService } from './../../services/counter-products/counter-products.service';
import { ProductsService } from './../../services/products/products.service';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  navbarPadre = 'mensaje desde el padre';
  foodordersPadre = 'mensaje desde el padre';
  public showOrders: any;
  public order: any;

  constructor(
    // private counterProductService: CounterProductsService,
    private productsService: ProductsService,
  ) { }

  ngOnInit(): void {
    this.productsService.kitchenOrders().subscribe(data => {
      console.log(data);
      this.showOrders = {
        order: data.forEach(element => {
          console.log(element);
          const obj = {
            client: element.client,
            id: element.id,
            prod: element.products
            // price: element.products.price,
            // qty: element.products.qty,
          };
          console.log(obj.prod);
          return obj;
        }),
      };
      console.log(this.showOrders);

    });
  }
}
