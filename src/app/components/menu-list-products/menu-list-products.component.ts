import { CounterProductsService } from './../../services/counter-products/counter-products.service';
import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../../interfaces/item';
import { ProductsService } from '../../services/products/products.service';

@Component({
  selector: 'app-menu-list-products',
  templateUrl: './menu-list-products.component.html',
  styleUrls: ['./menu-list-products.component.scss'],
  providers: [ProductsService],
})
export class MenuListProductsComponent implements OnInit {
  // public listProducts: Array<Item> = [];
  public products: any;
  // public orders: any;
  // @Input() typeProduct: string;
  @Input() hijoMenuListProducts: any; // esposibleQ sea typeproduct
  counter: number;

  constructor(
    private productsService: ProductsService,
    private counterProductsService: CounterProductsService
  ) {
    this.counterProductsService.currentNumber.subscribe(product => {
      this.counter = product;
    });
  }

  ngOnInit(): void {
    this.getProducts('breakfast');
  }

  getProducts(typeSelect): void {
    this.productsService.getListProduct().subscribe(
      response => {
        this.products = response;
        const breakfast = this.products.filter(products => products.type === typeSelect);
        this.products = breakfast;
      }
    );
    }

    // sum(id): void {
    //   const newNumber = this.counter + 1;
    //   this.counterProductsService.changeNumber(newNumber);
    // }

    public addCart(product: Item): void {
      this.counterProductsService.changeCart(product);
  }

  // public rest(product: Item): number {
  //     if ( this.counter > 0 ){
  //     const newNumber = this.counter - 1;
  //     this.counterProductsService.changeNumber(newNumber);
  //   } else {
  //     return this.counter = 0;
  //   }
  // }
  // sendOrder(product) {
  //   this.productsService.addListProducts(product);
  // }
}
