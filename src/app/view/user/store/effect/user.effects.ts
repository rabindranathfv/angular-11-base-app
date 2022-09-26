import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import * as fromUserActions from '../action/user.actions';
import { UsersService } from '../../../../services/users/users.service';
import { mergeMap, map, catchError, tap, first } from 'rxjs/operators';
import { of } from 'rxjs';
import { User } from 'src/app/interfaces/user/user';
import { AuthFacade } from 'src/app/store/auth/facade/auth.facade';


@Injectable()
export class UserEffects {

  userData: User[];
  buttons = [
    {
      icon: 'fa fa-trash',
      color: 'danger',
      route: 'delete',
      type: 'delete'
    },
    {
      icon: 'fa fa-edit',
      color: 'warning',
      route: 'user/update',
      type: 'update'
    },
    {
      icon: 'fa fa-eye',
      color: 'info',
      route: 'user',
      type: 'read'
    }
  ];

  loadUsers$ = createEffect(() => this.actions$.pipe(
    ofType(fromUserActions.loadUsers),
    mergeMap(() => this.userServ.getAllUsers().
      pipe(
        map( (resp: any) => {
          let permissions;
          this.authFacade.permissions$.pipe(first()).subscribe((perm) => {permissions = perm; });
          const availableButtons = this.buttons.filter((button) => permissions.user[button.type]);
          this.userData = resp.users.map( user => {
            return {
                      firstName : user.firstName,
                      lastName : user.lastName,
                      id: user.id,
                      email: user.email,
                      phone: user.phone,
                      role: user.role.name,
                      image: user.image,
                      buttons: availableButtons
                    };
          });
          return fromUserActions.loadUsersSuccess({ users: this.userData });
        }),
        catchError( err => of(fromUserActions.loadUsersFailure({ error: err })))
      )
    )
  ));

  loadUser$ = createEffect(() => this.actions$.pipe(
    ofType(fromUserActions.loadUser),
    mergeMap(
        (action) => this.userServ.getUser(action.id).
        pipe(
          map( (resp: any) => fromUserActions.loadUserSuccess({ user: resp.user })),
          catchError( err => of(fromUserActions.loadUserFailure({ error: err })))
        )
      )
    )
  );

  deleteUser$ = createEffect(() => this.actions$.pipe(
    ofType(fromUserActions.deleteUser),
    mergeMap(
        (action) => this.userServ.deleteUser(action.id).
        pipe(
          map( (resp: any) => fromUserActions.deleteUserSuccess({ id: action.id})),
          catchError( err => of(fromUserActions.deleteUserFailure({ error: err })))
        )
      )
    )
  );

  createUser$ = createEffect(() => this.actions$.pipe(
    ofType(fromUserActions.createUser),
    mergeMap(
        (action) => this.userServ.createUser(action.user).
        pipe(
          map(
            (resp: any) =>
              fromUserActions.createUserSuccess(
                { user : {...resp.user } }
              )
            ),
          catchError( err => of(fromUserActions.createUserFailure({ error: err })))
        )
      )
    )
  );

  updateUser$ = createEffect(() => this.actions$.pipe(
    ofType(fromUserActions.updateUser),
    mergeMap(
        (action) => this.userServ.updateUser(action.user).
        pipe(
          map(
            (resp: any) =>
              fromUserActions.updateUserSuccess(
                { user : {...resp.user} }
              )
            ),
          catchError( err => of(fromUserActions.updateUserFailure({ error: err })))
        )
      )
    )
  );

  loadRoles$ = createEffect(() => this.actions$.pipe(
    ofType(fromUserActions.loadRoles),
    mergeMap(() => this.userServ.getAllRoles().
      pipe(
        map( (resp: any) => {
          return fromUserActions.loadRolesSuccess({ roles: resp.roles });
        }),
        catchError( err => of(fromUserActions.loadRolesFailure({ error: err })))
      )
    )
  ));


  constructor(
    private actions$: Actions,
    private userServ: UsersService,
    private authFacade: AuthFacade
    ) {}

}
