import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private http: HttpClient) { }

  /**
   * User Login
   */
  public login( body ): Observable<any> {
    return (this.http.post(`${environment.apiUrl}login`, body ));
  }

  public recoverPassword( body ): Observable<any>  {
    return (this.http.post(`${environment.apiUrl}auth/recover-password`, body ));
  }

  public changePassword( body ): Observable<any>  {
    return (this.http.post(`${environment.apiUrl}auth/set-password-recover`, body ));
  }
}
