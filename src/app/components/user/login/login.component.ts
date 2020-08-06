import { Component, OnInit } from '@angular/core';
import { ConfigService } from './../../config/config.service';
import { Router } from '@angular/router';
import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [ConfigService],
})
export class LoginComponent implements OnInit {
  public email: string;
  public password: string;
  public user: any;
  public isError = false;
  logoPadre = 'mensaje desde el padre';

  constructor(
    private configService: ConfigService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  login(): void{
    this.user = {email: this.email || '', password: this.password || ''};
    sessionStorage.setItem('emailCurrentUser', this.email);
    console.log(this.user);

    // const property = JSON.stringify(this.user);
    // console.log(property);
    this.configService.login(this.user).subscribe(
      data => {
      console.log(data);
      // sessionStorage.setItem('token', data.token);
      this.configService.setToken(data.token);
      this.router.navigate(['/home']);
    },
       error => {
         this.messageError();
       }
    );
  }
    messageError(): void {
    this.isError = true;
    setTimeout(() => {
      this.isError = false;
    }, 8000);
    console.log('Ops esto es un error');
  }
}


