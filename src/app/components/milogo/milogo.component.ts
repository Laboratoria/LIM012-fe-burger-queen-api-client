import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-milogo',
  templateUrl: './milogo.component.html',
  styleUrls: ['./milogo.component.scss']
})
export class MilogoComponent implements OnInit {
  // etiqueta Input en el componente hijo
  @Input() hijoLogo: any;

  constructor() { }

  ngOnInit(): void {
  }

}
