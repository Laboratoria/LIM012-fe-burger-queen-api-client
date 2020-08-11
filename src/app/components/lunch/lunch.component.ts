import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../../services/products/products.service';

@Component({
  selector: 'app-lunch',
  templateUrl: './lunch.component.html',
  styleUrls: ['./lunch.component.scss'],
  providers: [ProductsService],
})
export class LunchComponent implements OnInit {
  public products: any;
  public lunch: any;
  navbarPadre = 'mensaje desde el padre';
  homePadre = 'Lunch';
  constructor(
    private productsService: ProductsService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  /* getProductsLunch(): void {
    this.productsService.getListProduct(this.products).subscribe(
      response => {
        this.products = response;
        const lunch = this.products.filter(products => products.type === 'lunch');
        this.products = lunch;
        this.router.navigate(['/lunch']);
        console.log(lunch);
      }
    );
     }*/

}
