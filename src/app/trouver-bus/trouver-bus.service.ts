import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

import { Observable, of } from 'rxjs'
import { catchError, map, tap } from 'rxjs/operators'

import { Bus } from '../common/bus'
import { ApiUrl } from '../common/api-url'

@Injectable({
  providedIn: 'root'
})
export class TrouverBusService {

  private baseURL = ApiUrl.getBaseURL;

  constructor(private http: HttpClient) { }

  getBuses (): Observable<Bus[]> {
    const url = `${this.baseURL}/bus/all`;

    return this.http.get<Bus[]>(url).pipe(
        tap(_ => console.log('fetched buses')),
        catchError(this.handleError<Bus[]>('getBuses', []))
      );
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
