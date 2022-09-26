import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthFacade } from '../store/auth/facade/auth.facade';
import { environment } from 'src/environments/environment';
@Injectable()
export class Interceptor implements HttpInterceptor {

  constructor(private authFacade: AuthFacade) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let customReq;
    this.authFacade.token$.subscribe((token) => {
      customReq = request.clone({
        headers: request.headers
                .set('x-channel', environment.channel)
                .set('Content-Type', 'application/json')
                .set('sessionId', token)
      });
    });
    return next.handle(customReq);
  }
}
