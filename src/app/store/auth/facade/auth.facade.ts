import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as authActions from '../actions/auth.actions';

import { authSelectors } from '../selectors/auth.selectors';
import { AuthState } from '../reducers/auth.reducer';

@Injectable()
export class AuthFacade {

    token$ = this.store.select(authSelectors.getToken);
    error$ = this.store.select(authSelectors.getError);
    user$ = this.store.select(authSelectors.getUser);
    permissions$ = this.store.select(authSelectors.getPermissions);
    isLoggedIn$ = this.store.select(authSelectors.isLoggedIn);
    customerId$ = this.store.select(authSelectors.getCustomerId);

    constructor( private store: Store<AuthState> ) {}

    login( data: any ) {
        const { email, password } = data;
        this.store.dispatch( authActions.login( { email, password } ));
    }

    recoverPassword( email: string) {
        this.store.dispatch( authActions.recoverPassword( { email } ));
    }

    changePassword( data: any) {
        this.store.dispatch( authActions.changePassword( { ...data } ));
    }

    logout() {
        this.store.dispatch(authActions.logout());
    }

}
