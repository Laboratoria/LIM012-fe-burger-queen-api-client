import { Component, OnInit } from '@angular/core';
import { ConfigService } from './../../config/config.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
  providers: [ConfigService],
})
export class LoginComponent implements OnInit {

  constructor(
    private configService: ConfigService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

}
