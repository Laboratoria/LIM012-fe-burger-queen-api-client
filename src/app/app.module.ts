import { ConfigService } from './components/config/config.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ConfigcontrollerAuthService } from './components/config/configControllerAuth/configcontroller-auth.service';

// routes
import { RouterRoutingModule } from './router–routing.module';

// components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegisterComponent } from './components/user/register/register.component';
import { LoginComponent } from './components/user/login/login.component';
import { Page404Component } from './components/page404/page404.component';
import { BreakfastComponent } from './components/breakfast/breakfast.component';

import { OrdersComponent } from './components/orders/orders.component';
import { MilogoComponent } from './components/milogo/milogo.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    RegisterComponent,
    Page404Component,
    BreakfastComponent,
    OrdersComponent,
    OrdersComponent,
    MilogoComponent
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
