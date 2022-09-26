import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';


import { environment } from 'src/environments/environment';
import { BehaviorSubject, Subject, Observable, throwError} from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  private handleError( errorResponse: HttpErrorResponse ) {
    if ( errorResponse.error instanceof ErrorEvent) {
      console.error('cliente Side Error', errorResponse.error.message);
    } else {
      console.error('Server Side Error', errorResponse);
    }
    return throwError('there is a problem with the service. We are working to solve that..thx U');
  }
}
