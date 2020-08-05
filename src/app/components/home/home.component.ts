import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],

})

export class HomeComponent implements OnInit {
  title = 'LIM012-fe-burger-queen-api-client';
<<<<<<< HEAD
  // parentMessage = "message from parent"
=======
  padre = 'mensaje desde el padre';

>>>>>>> e5f7b3cfb6b2cd49b69ba427234cb86c87fefde8
  constructor() { }

  private router: Router;

  ngOnInit(): void {
  }

}
