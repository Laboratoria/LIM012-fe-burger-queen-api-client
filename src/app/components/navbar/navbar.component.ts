import { Component, OnInit, Input } from '@angular/core';
import { AuthConfigService } from 'src/app/services/auth-config.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  padreLogo = 'mensaje desde el padre';
  @Input() hijoNavbar: any;
  constructor(
    private authService: AuthConfigService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  logOut(): void {
    this.authService.logout();
    this.router.navigate(['']);
  }
}
