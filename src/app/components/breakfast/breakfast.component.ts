import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-breakfast',
  templateUrl: './breakfast.component.html',
  styleUrls: ['./breakfast.component.scss']
})
export class BreakfastComponent implements OnInit {
  navbarPadre = 'mensaje desde el padre';
  constructor() { }

  ngOnInit(): void {
  }

}
