import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { environment } from './../../../environments/environment';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/interfaces/customers/customers.interface';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  keyEndpoint = 'customer';

  constructor( private http: HttpClient) { }

  /**
   * getAllCustomers
   */
  public getAllCustomers(): Observable<any> {
    return this.http.get(`${environment.apiUrl}${this.keyEndpoint}s`);
  }

  public getCustomer(id: number) {
    return this.http.get(`${environment.apiUrl}${this.keyEndpoint}/${id}`);
  }

  public deleteCustomer(id: number) {
    return this.http.delete(`${environment.apiUrl}${this.keyEndpoint}/${id}`);
  }

  public createCustomer(customer: Customer) {
    return this.http.post(`${environment.apiUrl}${this.keyEndpoint}`, customer );
  }

  public updateCustomer(customer: Customer) {
    return this.http.put(`${environment.apiUrl}${this.keyEndpoint}/${customer.id}`, customer );
  }
}
