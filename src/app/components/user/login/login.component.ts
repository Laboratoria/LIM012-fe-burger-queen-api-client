import { Component, OnInit } from '@angular/core';
import { ConfigService } from './../../config/config.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [ConfigService],
})
export class LoginComponent implements OnInit {
  public email: string;
  public password: string;

  constructor(
    private configService: ConfigService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  login(): void{
    const user = {email: this.email, password: this.password};
    sessionStorage.setItem('emailCurrentUser', this.email);
    const property = JSON.stringify(this.email);
    this.configService.login(user).subscribe( data => {
      this.configService.setToken(data.token);
      this.router.navigate(['/home']);
      console.log(data.token);
    });

  }
}


