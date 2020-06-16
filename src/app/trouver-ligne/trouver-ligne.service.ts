import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Line } from '../common/line';
import { ApiUrl } from '../common/api-url';

@Injectable({
  providedIn: 'root'
})
export class TrouverLigneService {

  private baseURL = ApiUrl.getBaseURL;

  constructor(private http: HttpClient) { }

  getLines (): Observable<Line[]> {
    const url = `${this.baseURL}/line/all`;

    return this.http.get<Line[]>(url).pipe(
        tap(_ => console.log('fetched lines')),
        catchError(this.handleError<Line[]>('getLines', []))
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
