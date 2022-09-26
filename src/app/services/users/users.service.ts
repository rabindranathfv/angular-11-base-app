import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { environment } from './../../../environments/environment';
import { Observable } from 'rxjs';
import { User } from 'src/app/interfaces/user/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  keyEndpoint = 'user';

  constructor( private http: HttpClient) { }

  public getAllUsers(): Observable<any> {
    return this.http.get(`${environment.apiUrl}${this.keyEndpoint}s`);
  }

  public getUser(id: number) {
    return this.http.get(`${environment.apiUrl}${this.keyEndpoint}/${id}`);
  }

  public deleteUser(id: number) {
    return this.http.delete(`${environment.apiUrl}${this.keyEndpoint}/${id}`);
  }

  public createUser(user: User) {
    console.log(user);
    return this.http.post(`${environment.apiUrl}${this.keyEndpoint}`, user );
  }

  public updateUser(user: User) {
    return this.http.put(`${environment.apiUrl}${this.keyEndpoint}/${user.id}`, user );
  }

  public getAllRoles(): Observable<any> {
    return this.http.get(`${environment.apiUrl}roles`);
  }
}
