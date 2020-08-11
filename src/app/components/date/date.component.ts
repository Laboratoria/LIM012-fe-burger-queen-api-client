import { Component, OnInit, Input  } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss'],

})
export class DateComponent implements OnInit {
  today: number = Date.now();
  @Input() hijoDate: any;
  constructor() { }

  ngOnInit(): void {
  }

}
