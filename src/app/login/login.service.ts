import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

import { BehaviorSubject, Observable, of } from 'rxjs'
import { catchError, map, tap } from 'rxjs/operators'

import { User } from '../common/user'
import { TokenHolder } from '../common/token-holder'
import { ApiUrl } from '../common/api-url'

const httpOptions = {
  headers: new HttpHeaders({
     'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  private currentTokenHolderSubject: BehaviorSubject<TokenHolder>;
  public currentTokenHolder: Observable<TokenHolder>;

  private baseURL = ApiUrl.getBaseURL;

  constructor(private http: HttpClient) { 
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
    this.currentTokenHolderSubject = new BehaviorSubject<TokenHolder>(JSON.parse(localStorage.getItem('currentTokenHolder')));
    this.currentTokenHolder = this.currentTokenHolderSubject.asObservable();
  }

  get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  get currentTokenHolderValue(): TokenHolder {
    return this.currentTokenHolderSubject.value;
  }

  authenticate(user: User): Observable<TokenHolder> {
    const url = `${this.baseURL}/auth`;

    return this.http.post<TokenHolder>(url, user, httpOptions).pipe(
      map(tokenHolder => {
        if(user && tokenHolder){
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
          localStorage.setItem('currentTokenHolder', JSON.stringify(tokenHolder));
          this.currentTokenHolderSubject.next(tokenHolder);
        }

        return tokenHolder;
      }),
      tap((tokenHolder: TokenHolder) => console.log('login success and token = ' + tokenHolder.token)),
      catchError(this.handleError<TokenHolder>('authentication'))
    );
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    localStorage.removeItem('currentTokenHolder');
    this.currentTokenHolderSubject.next(null);
  }

  private handleError <T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // loggin error to console, TODO: send the error to remote logging infrastructure
      console.log(error);
      console.log(`${operation} FAILED: ${error.message}`);

      // let the app keep running by returning an empty result
      return of(result as T);
    };
  }

}
