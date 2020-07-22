import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ConfigService } from '../config.service';

@Injectable({
  providedIn: 'root'
})

export class ConfigcontrollerAuthService {

  constructor(
    private configService: ConfigService
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const idToken = sessionStorage.getItem('currentUser');

