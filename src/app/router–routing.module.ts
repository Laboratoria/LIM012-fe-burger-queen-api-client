import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
// components
import { LoginComponent } from './components/user/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { Page404Component } from './components/page404/page404.component';
import { RegisterComponent } from './components/user/register/register.component';
import { OrdersComponent } from './components/orders/orders.component';

const appRoutes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent },

  {path: 'orders', component: OrdersComponent },
  {path: '**', component: Page404Component },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class RouterRoutingModule { }
