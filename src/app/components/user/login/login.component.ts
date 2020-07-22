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
    sessionStorage.setItem('emailCurrentUser', this.email);
    const property = JSON.stringify(this.email);

    const user = {email: this.email, password: this.password};

    this.configService.login(user).subscribe( data => {
      console.log(data);
      this.router.navigate(['/home']);
    });

  }
}


