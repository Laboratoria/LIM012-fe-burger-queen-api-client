import { Component, OnInit, Input } from '@angular/core';
import { ProductsService } from '../../services/products/products.service';

@Component({
  selector: 'app-menu-list-products',
  templateUrl: './menu-list-products.component.html',
  styleUrls: ['./menu-list-products.component.scss'],
  providers: [ProductsService],
})
export class MenuListProductsComponent implements OnInit {
  public products: any;
  // public orders: any;
  // @Input() typeProduct: string;
  @Input() hijoMenuListProducts: any; // esposibleQ sea typeproduct

  constructor(
    private productsService: ProductsService,
  ) {
    // this.productsService.currentListProducts.subscribe(product => { this.orders = product; });
  }

  ngOnInit(): void {
    this.getProducts(this.products.type);
  }

  getProducts(typeSelect): void {
    this.productsService.getListProduct(this.products).subscribe(
      response => {
        this.products = response;
        const breakfast = this.products.filter(products => products.type === typeSelect);
        this.products = breakfast;
      }
    );
    }

  // sendOrder(product) {
  //   this.productsService.addListProducts(product);
  // }
}
