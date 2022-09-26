import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(
    private router: Router
  ) { }

  public setSession( key: string, value: string ): void {
    sessionStorage.setItem( key, value );
  }

  public getSession( key: string ): any {
    return sessionStorage.getItem(key);
  }

  public deleteSesion( key: string ): void {
    sessionStorage.removeItem(key);
  }

  public deleteAllSessions() {
    sessionStorage.clear();
    this.logOut();
  }

  public logOut(): void {
    this.router.navigateByUrl('/');
  }

  public isSessionActive( key: string ): boolean {
    return (this.getSession(key) == null) ? false : true ;
  }
}
