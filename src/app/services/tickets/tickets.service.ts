import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { environment } from './../../../environments/environment';
import { Observable } from 'rxjs';
import { Ticket } from './../../interfaces/ticket/ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketsService {

  // TODO: Add unit test of this SERVICE

  keyEndpoint = 'ticket';

  constructor( private http: HttpClient) { }

  public getAllTickets(): Observable<any> {
    return this.http.get(`${environment.apiUrl}${this.keyEndpoint}`);
  }

  public generateTickets(): Observable<any> {
    return this.http.get(`${environment.apiUrl}${this.keyEndpoint}/generate`);
  }

}
