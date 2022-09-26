import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';

import * as fromUserActions from '../action/user.actions';
import { UserAppState } from '../reducer/user.reducer';
import { UserSelectors } from '../selector/user.selectors';


import { Observable } from 'rxjs';
import { User } from 'src/app/interfaces/user/user';

@Injectable()
export class UserFacade {

    usersData$: any = this.store.select(UserSelectors.selectUsers);
    roles$: any = this.store.select(UserSelectors.selectRoles);
    error$: any = this.store.select(UserSelectors.getError);

    constructor( private store: Store<UserAppState> ) {}

    getUsers() {
        this.store.dispatch( fromUserActions.loadUsers());
    }

    loadUsers(): Observable<User[]> {
        return this.store.pipe(select(UserSelectors.selectUsers));
    }

    getUser(id: number ) {
        return this.store.pipe(select(UserSelectors.selectUser, {id}));
    }

    loadUser(id: number) {
        this.store.dispatch(fromUserActions.loadUser({id}));
    }

    createUser(user: User) {
        this.store.dispatch(fromUserActions.createUser({user}));
    }

    updateUser(user: User) {
        this.store.dispatch(fromUserActions.updateUser({user}));
    }

    deleteUser(id: number ) {
        this.store.dispatch( fromUserActions.deleteUser({id}));
    }

    getRoles() {
        this.store.dispatch( fromUserActions.loadRoles());
    }

    loadRoles(): Observable<any[]> {
        return this.store.pipe(select(UserSelectors.selectRoles));
    }

}
