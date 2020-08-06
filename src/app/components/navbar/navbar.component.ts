import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  padreLogo = 'mensaje desde el padre';
  @Input() hijoNavbar: any;
  constructor() { }

  ngOnInit(): void {
  }

}
