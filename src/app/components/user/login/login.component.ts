import { Component, OnInit } from '@angular/core';
import { AuthConfigService } from '../../../services/auth-config.service';
import { Router } from '@angular/router';
import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { MenuListProductsComponent } from '../../menu-list-products/menu-list-products.component';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [AuthConfigService],
})
export class LoginComponent implements OnInit {
  public email: string;
  public password: string;
  public user: {
    email: string,
    password: string
  };
  public isError = false;
  public menuListProductsComponent: MenuListProductsComponent;

  constructor(
    private authConfigService: AuthConfigService,
    private router: Router,
    private productsService: ProductsService,
  ) { }

  ngOnInit(): void {
  }

  login(): string {
    let userLogged = 'invalid_form';
    this.user = { email: this.email || '', password: this.password || '' };
    sessionStorage.setItem('emailCurrentUser', this.email);
    console.log(this.user);
    // const property = JSON.stringify(this.user);
    // console.log(property);
    this.authConfigService.login(this.user).subscribe(
      data => {
        console.log(data);
        // sessionStorage.setItem('token', data.token);
        this.authConfigService.setToken(data.token);
        userLogged = 'login_valid';
        this.router.navigate(['/home']);
        // this.menuListProductsComponent.getProducts('breakfast');
    },
      error => {
        this.messageError();
        userLogged = 'login_invalid';
      }
    );
    return userLogged;
  }

  messageError(): void {
    this.isError = true;
    setTimeout(() => {
      this.isError = false;
    }, 8000);
    console.log('Ops esto es un error');
  }
}


