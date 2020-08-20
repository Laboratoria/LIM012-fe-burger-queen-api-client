import { Component, OnInit, Input } from '@angular/core';
// import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})

export class HomeComponent implements OnInit {
  padreNavbar = 'soy un header';
  padreDate = 'Date&HOurs';
  padreBillOrders = 'mensaje desde caja amarilla derecha';
  padreMenuListProducts = 'mensaje caja amarilla izquierda';

  constructor(
   // private router: Router
  )
  {}

  ngOnInit(): void { }

  // getProductsLunch(): void {
  //   this.productsService.getListProduct(this.products).subscribe(
  //     response => {
  //       this.products = response;
  //       const lunch = this.products.filter(products => products.type === 'lunch');
  //       this.products = lunch;
  //       this.router.navigate(['/lunch']);
  //       console.log(lunch);
  //     }
  //   );
  //   }
}
