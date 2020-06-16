import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

import { LoginService } from '../login/login.service'

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    constructor(
        private router: Router,
        private loginService: LoginService
    ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            console.log('status is : ' + err.status);

            // 401 response a.k.a unauthorized, request has not been applied because it lacks valid authentication credentials
            if (err.status === 401) {
                // error happens in login when authentication credentials are false
                // also happens when trying to load page while session has expired. So logout the user and reload page to go to login page
                this.loginService.logout();
                location.reload();
            }
            // 403 response a.k.a forbidden, server understood the request but refuses to authorize it
            else if (err.status === 403) {
                this.router.navigate(['error']).then( (e) => {
                    e ? console.log("Navigation is successful!") : console.log("Navigation has failed!");
                });
            }

            return throwError(err);
        }));
    }

}
