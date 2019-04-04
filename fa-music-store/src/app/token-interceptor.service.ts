import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {
  // tslint:disable-next-line:max-line-length
  token1: any = 'BQAd1rftGRdVx8hpdOAO8j0D0NW3b4KvW8nJWi14glmqw9-W41h1xcBy7inmI5AjEZPEcN0O-Ul6K0tDJ5F_CC10uZewHtnjyRciYO9ArWlscuCba-93hVEKwdIViY5p8x-NNLxeLWbRrtcAfc6GQs62tbvf030j4g';
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // const token: string = localStorage.getItem('token');
    // if (token) {
    //   req = req.clone({
    //     headers: req.headers.set('Authorization', 'Bearer ' + token)
    //   });
    // }
    // if (!req.headers.has('Content-Type')) {
    //   req = req.clone({
    //     headers: req.headers.set('Content-Type', 'application/json')
    //   });
    // }
    // req = req.clone({ headers: req.headers.set('Accept', 'application/json') });
    // req = req.clone({
    //   setHeaders: {
    //     Authorization: `Bearer ${this.token1}`
    //   }
    // });
    req = req.clone({
      headers: req.headers.set('Authorization', 'Bearer ' + this.token1)
    });
    return next.handle(req);
  }
  constructor() {}
}
