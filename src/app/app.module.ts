
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ConfigcontrollerAuthService } from '../app/services/auth/config-controller-auth.service';

// routes
import { RouterRoutingModule } from './router–routing.module';

// components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegisterComponent } from './components/user/register/register.component';
import { LoginComponent } from './components/user/login/login.component';
import { Page404Component } from './components/page404/page404.component';
import { OrdersComponent } from './components/orders/orders.component';
import { MilogoComponent } from './components/milogo/milogo.component';
import { FoodOrdersComponent } from './components/food-orders/food-orders.component';
import { DateComponent } from './components/date/date.component';
import { BillOrdersComponent } from './components/bill-orders/bill-orders.component';
import { MenuListProductsComponent } from './components/menu-list-products/menu-list-products.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    RegisterComponent,
    Page404Component,
    OrdersComponent,
    MilogoComponent,
    FoodOrdersComponent,
    DateComponent,
    BillOrdersComponent,
    MenuListProductsComponent
  ],
  imports: [
    BrowserModule,
    RouterRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {
      provide:  HTTP_INTERCEPTORS,
      useClass: ConfigcontrollerAuthService,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
