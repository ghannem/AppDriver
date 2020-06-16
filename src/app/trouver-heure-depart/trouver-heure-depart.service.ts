import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

import { Observable, of } from 'rxjs'
import { catchError, map, tap } from 'rxjs/operators'

import { Trip } from '../common/trip';
import { ApiUrl } from '../common/api-url'

@Injectable({
  providedIn: 'root'
})
export class TrouverHeureDepartService {

  private baseURL = ApiUrl.getBaseURL;

  constructor(private http: HttpClient) { }

  getTimeTable(): Observable<Trip[]> {
    const url = `${this.baseURL}/timetable/97739-1-1/plannedAndCanceledAndFreeTimetables`;

    return this.http.get<Trip[]>(url).pipe(
        tap(_ => console.log('fetched timetable')),
        catchError(this.handleError<Trip[]>('getTimeTable', []))
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
