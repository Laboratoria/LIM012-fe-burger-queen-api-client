import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../../services/products/products.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [ProductsService],

})

export class HomeComponent implements OnInit {
  public product: any;
  logoPadre = 'mensaje desde el padre';
  padreNavbar = 'soy un header';

  constructor(
    private productsService: ProductsService,
    private router: Router
  )
  {}

  ngOnInit(): void {

  }

getProducts(): void {
  this.productsService.getListProduct(this.product).subscribe(
    response => {
      this.product = response;
      console.log(this.product);
      console.log(this.product.id);
   }
  );
  }
}
