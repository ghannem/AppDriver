import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { LoginService } from '../login/login.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

    constructor(private loginService: LoginService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let currentUser = this.loginService.currentUserValue;
        let currentTokenHolder = this.loginService.currentTokenHolderValue;

        if (currentUser && currentTokenHolder) {
            // add authorization header with jwt token
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${currentTokenHolder.token}`
                }
            });
        }

        return next.handle(request);
    }

}