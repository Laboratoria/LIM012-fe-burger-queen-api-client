import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-breakfast',
  templateUrl: './breakfast.component.html',
  styleUrls: ['./breakfast.component.scss']
})
export class BreakfastComponent implements OnInit {
  padreNavbar = 'soy un header';
  constructor() { }

  ngOnInit(): void {
  }

}
