import { CounterProductsService } from './../../services/counter-products/counter-products.service';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-bill-orders',
  templateUrl: './bill-orders.component.html',
  styleUrls: ['./bill-orders.component.scss']
})
export class BillOrdersComponent implements OnInit {
  // etiqueta Input en el componente hijo
  @Input() hijoBillOrders: any;
  counter: number;

  constructor(private counterProductService: CounterProductsService) {
    this.counterProductService.currentNumber.subscribe(numb => {
      this.counter = numb;
    });
   }

  ngOnInit(): void {
  }

}
