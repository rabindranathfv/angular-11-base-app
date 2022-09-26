import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import * as fromOwnerActions from '../action/owner.actions';
import { OwnersService } from '../../../../services/owners/owners.service';
import { mergeMap, map, catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Owner } from 'src/app/interfaces/owner/owner.interface';


@Injectable()
export class OwnerEffects {

  ownerData: Owner[];

  loadOwners$ = createEffect(() => this.actions$.pipe(
    ofType(fromOwnerActions.loadOwners),
    mergeMap(() => this.ownerServ.getAllOwners().
      pipe(
        map( (resp: any) => {
          this.ownerData = resp.owners.map( owner => {
            return {
                      firstName : owner.user.firstName,
                      lastName : owner.user.lastName,
                      id: owner.id,
                      email: owner.user.email,
                      phone: owner.user.phone,
                      image: owner.user.image,
                      buttons: [
                        {
                          icon: 'fa fa-edit',
                          color: 'warning',
                          route: 'owner/update'
                        },
                        {
                          icon: 'fa fa-eye',
                          color: 'info',
                          route: 'owner'
                        }
                      ]
                    };
          });
          return fromOwnerActions.loadOwnersSuccess({ owners: this.ownerData });
        }),
        catchError( err => of(fromOwnerActions.loadOwnersFailure({ error: err })))
      )
    )
  ));

  loadOwner$ = createEffect(() => this.actions$.pipe(
    ofType(fromOwnerActions.loadOwner),
    mergeMap(
        (action) => this.ownerServ.getOwner(action.id).
        pipe(
          map( (resp: any) => fromOwnerActions.loadOwnerSuccess({ owner: resp.owner })),
          catchError( err => of(fromOwnerActions.loadOwnerFailure({ error: err })))
        )
      )
    )
  );

  deleteOwner$ = createEffect(() => this.actions$.pipe(
    ofType(fromOwnerActions.deleteOwner),
    mergeMap(
        (action) => this.ownerServ.deleteOwner(action.id).
        pipe(
          map( (resp: any) => fromOwnerActions.deleteOwnerSuccess({ id: action.id})),
          catchError( err => of(fromOwnerActions.deleteOwnerFailure({ error: err })))
        )
      )
    )
  );

  createOwner$ = createEffect(() => this.actions$.pipe(
    ofType(fromOwnerActions.createOwner),
    mergeMap(
        (action) => this.ownerServ.createOwner(action.owner).
        pipe(
          map(
            (resp: any) =>
              fromOwnerActions.createOwnerSuccess(
                { owner : {...resp.owner } }
              )
            ),
          catchError( err => of(fromOwnerActions.createOwnerFailure({ error: err })))
        )
      )
    )
  );

  updateOwner$ = createEffect(() => this.actions$.pipe(
    ofType(fromOwnerActions.updateOwner),
    mergeMap(
        (action) => this.ownerServ.updateOwner(action.owner).
        pipe(
          map(
            (resp: any) =>
              fromOwnerActions.updateOwnerSuccess(
                { owner : {...resp.owner} }
              )
            ),
          catchError( err => of(fromOwnerActions.updateOwnerFailure({ error: err })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private ownerServ: OwnersService
    ) {}
}
