import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { environment } from './../../../environments/environment';
import { Observable } from 'rxjs';
import { Owner } from 'src/app/interfaces/owner/owner.interface';

@Injectable({
  providedIn: 'root'
})
export class OwnersService {

  keyEndpoint = 'owner';

  constructor( private http: HttpClient) { }

  public getAllOwners(): Observable<any> {
    return this.http.get(`${environment.apiUrl}${this.keyEndpoint}s`);
  }

  public getOwner(id: number) {
    return this.http.get(`${environment.apiUrl}${this.keyEndpoint}/${id}`);
  }

  public deleteOwner(id: number) {
    return this.http.delete(`${environment.apiUrl}${this.keyEndpoint}/${id}`);
  }

  public createOwner(owner: Owner) {
    return this.http.post(`${environment.apiUrl}${this.keyEndpoint}`, owner );
  }

  public updateOwner(owner: Owner) {
    return this.http.put(`${environment.apiUrl}${this.keyEndpoint}/${owner.id}`, owner );
  }

}
