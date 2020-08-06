import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],

})
export class HomeComponent implements OnInit {
  title = 'LIM012-fe-burger-queen-api-client';
  logoPadre = 'mensaje desde el padre';

  constructor() { }

  private router: Router;

  ngOnInit(): void {
  }

}
