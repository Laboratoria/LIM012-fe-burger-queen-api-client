import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthConfigService } from '../auth-config.service';

@Injectable({
  providedIn: 'root'
})
export class ConfigcontrollerAuthService implements HttpInterceptor {

  constructor(private authConfigService: AuthConfigService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const idToken = sessionStorage.getItem('token');

    if (idToken) {
      const clones = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${idToken}`)
      });
      return next.handle(clones);
    }
    else {
      return next.handle(req);
    }
  }
}
