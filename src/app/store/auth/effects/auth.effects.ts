import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import * as fromAuthActions from '../actions/auth.actions';
import { mergeMap, map, catchError, tap, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';
import { LocalStorageService } from 'src/app/services/local-storage/localStorage.service';


@Injectable()
export class AuthEffects {

    login$ = createEffect(
        () => this.actions$.pipe(
            ofType(fromAuthActions.login),
            mergeMap(
                (action) => this.authService.login({email: action.email, password: action.password}).pipe(
                    map(
                        (data) => {
                            this.localStorageService.setValue('token', data.token);
                            return fromAuthActions.loginSuccess({token: data.token, user: data.user});
                        }
                    ),
                    catchError(
                        (error) => of(fromAuthActions.loginFailure({error}))
                    )
                )
            )

        )
    );

    recoverPassword$ = createEffect(
        () => this.actions$.pipe(
            ofType(fromAuthActions.recoverPassword),
            mergeMap(
                (action) => this.authService.recoverPassword({email: action.email}).pipe(
                    map(
                        (data) =>  {
                            if (data.ok) {
                                return fromAuthActions.recoverPasswordSuccess();
                            } else {
                                return fromAuthActions.recoverPasswordFailure({ error : data.message });
                            }
                        }
                    ),
                    catchError(
                        (error) => of(fromAuthActions.recoverPasswordFailure({error}))
                    )
                )
            )

        )
    );

    changePassword$ = createEffect(
        () => this.actions$.pipe(
            ofType(fromAuthActions.changePassword),
            mergeMap(
                (action) =>
                    this.authService
                    .changePassword(
                        { recoverPasswordToken: action.token, password: action.password, confirmPassword: action.cPassword}
                    )
                    .pipe(
                        map(
                            (data) =>  {
                                if (data.code === 'SUCCESS') {
                                    return fromAuthActions.changePasswordSuccess();
                                } else {
                                    return fromAuthActions.changePasswordFailure({ error : data.message });
                                }
                            }
                        ),
                        catchError(
                            (error) => of(fromAuthActions.recoverPasswordFailure({error}))
                        )
                    )
            )

        )
    );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private localStorageService: LocalStorageService
    ) {}

}
