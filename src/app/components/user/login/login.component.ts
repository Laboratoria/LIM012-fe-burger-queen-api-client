import { Component, OnInit } from '@angular/core';
import { ConfigService } from './../../config/config.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [ConfigService],
})
export class LoginComponent {
  email: string;
  password: string;

  constructor(
    public configService: ConfigService,
    private router: Router
  ) { }

  // ngOnInit(): void {
  //   throw new Error('Method not implemented.');
  // }

  // ngOnInit(): any {
  //   this.configService.getUsers().subscribe(arg => {
  //     return this.users = arg;
  //   });
  // }

  login(): void{
    this.router.navigate(['/home']);
    const user = {email: this.email, password: this.password};
    this.configService.login(user).subscribe( data => {
      console.log(data);
    });
  }
}


