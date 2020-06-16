import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

import { Observable, of } from 'rxjs'
import { catchError, map, tap } from 'rxjs/operators'

import { Itinerary } from '../common/itinerary';
import { ApiUrl } from '../common/api-url'

@Injectable({
  providedIn: 'root'
})
export class TrouverDestinationService {

  private baseURL = ApiUrl.getBaseURL;

  constructor(private http: HttpClient) { }

  getItineraries(): Observable<Itinerary[]> {
    const url = `${this.baseURL}/itinerary/summary/97739`;

    return this.http.get<Itinerary[]>(url).pipe(
        tap(_ => console.log('fetched itineraries')),
        catchError(this.handleError<Itinerary[]>('getItineraries', []))
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
