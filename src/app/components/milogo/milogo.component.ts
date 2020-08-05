import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-milogo',
  templateUrl: './milogo.component.html',
  styleUrls: ['./milogo.component.css']
})
export class MilogoComponent implements OnInit {
  @Input() childMessage: string;

  constructor() { }

  ngOnInit(): void {
  }

}
