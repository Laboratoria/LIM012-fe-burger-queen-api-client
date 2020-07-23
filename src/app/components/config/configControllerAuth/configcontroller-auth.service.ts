import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConfigService } from '../config.service';


@Injectable({
  providedIn: 'root'
})
export class ConfigcontrollerAuthService implements HttpInterceptor {

  constructor(private configService: ConfigService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const idToken = sessionStorage.getItem('currentUser');
    // const idToken = this.configService.tokenId();

    if (idToken) {
      const clones = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${sessionStorage.currentUser}`)
      });
      return next.handle(clones);
    }
    else {
      return next.handle(req);
    }
  }
}
