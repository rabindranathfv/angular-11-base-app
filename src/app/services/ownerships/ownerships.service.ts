import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { Ownership } from 'src/app/interfaces/ownership/ownership.interface';

@Injectable({
  providedIn: 'root'
})
export class OwnershipsService {

  keyEndpoint = 'ownership';

  constructor( private http: HttpClient) { }

  public getAllOwnerships(): Observable<any> {
    return this.http.get(`${environment.apiUrl}${this.keyEndpoint}s`);
  }

  public getOwnership(id: number) {
    return this.http.get(`${environment.apiUrl}${this.keyEndpoint}/${id}`);
  }

  public deleteOwnership(id: number) {
    return this.http.delete(`${environment.apiUrl}${this.keyEndpoint}/${id}`);
  }

  public createOwnership(owner: Ownership) {
    return this.http.post(`${environment.apiUrl}${this.keyEndpoint}`, owner );
  }

  public updateOwnership(owner: Ownership) {
    return this.http.put(`${environment.apiUrl}${this.keyEndpoint}/${owner.id}`, owner );
  }

}
