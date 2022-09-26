import { SessionService } from '../services/session/session.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthFacade } from '../store/auth/facade/auth.facade';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private authFacade: AuthFacade,
    private router: Router) {
  }

  canActivate(next: ActivatedRouteSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    this.authFacade.user$.subscribe(
      (user) => {
          if (next.data.roles && next.data.roles.indexOf(user.role.name) === -1) {
            this.router.navigate(['/']);
          }
      }
    );
    return this.authFacade.isLoggedIn$;

  }

}
