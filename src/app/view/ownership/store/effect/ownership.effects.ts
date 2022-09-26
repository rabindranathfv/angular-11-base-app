import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import * as fromOwnershipActions from '../action/ownership.actions';
import { OwnershipsService } from '../../../../services/ownerships/ownerships.service';
import { mergeMap, map, catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Ownership } from 'src/app/interfaces/ownership/ownership.interface';


@Injectable()
export class OwnershipEffects {

  ownershipData: Ownership[];

  loadOwnerships$ = createEffect(() => this.actions$.pipe(
    ofType(fromOwnershipActions.loadOwnerships),
    mergeMap(() => this.ownershipServ.getAllOwnerships().
      pipe(
        map( (resp: any) => {
          this.ownershipData = resp.ownerships.map( ownership => {
            return {
                      firstName : ownership.customer.name,
                      propertyType : ownership.propertyType,
                      id: ownership.id,
                      hasParking: ownership.hasParking,
                      hasWarehouse: ownership.hasWarehouse,
                      image: ownership.images[0],
                      buttons: [
                        {
                          icon: 'fa fa-edit',
                          color: 'warning',
                          route: 'ownership/update'
                        },
                        {
                          icon: 'fa fa-eye',
                          color: 'info',
                          route: 'ownership'
                        }
                      ]
                    };
          });
          return fromOwnershipActions.loadOwnershipsSuccess({ ownerships: this.ownershipData });
        }),
        catchError( err => of(fromOwnershipActions.loadOwnershipsFailure({ error: err })))
      )
    )
  ));

  loadOwnership$ = createEffect(() => this.actions$.pipe(
    ofType(fromOwnershipActions.loadOwnership),
    mergeMap(
        (action) => this.ownershipServ.getOwnership(action.id).
        pipe(
          map( (resp: any) => fromOwnershipActions.loadOwnershipSuccess({ ownership: resp.ownership })),
          catchError( err => of(fromOwnershipActions.loadOwnershipFailure({ error: err })))
        )
      )
    )
  );

  deleteOwnership$ = createEffect(() => this.actions$.pipe(
    ofType(fromOwnershipActions.deleteOwnership),
    mergeMap(
        (action) => this.ownershipServ.deleteOwnership(action.id).
        pipe(
          map( (resp: any) => fromOwnershipActions.deleteOwnershipSuccess({ id: action.id})),
          catchError( err => of(fromOwnershipActions.deleteOwnershipFailure({ error: err })))
        )
      )
    )
  );

  createOwnership$ = createEffect(() => this.actions$.pipe(
    ofType(fromOwnershipActions.createOwnership),
    mergeMap(
        (action) => this.ownershipServ.createOwnership(action.ownership).
        pipe(
          map(
            (resp: any) =>
              fromOwnershipActions.createOwnershipSuccess(
                { ownership : {...resp.ownership } }
              )
            ),
          catchError( err => of(fromOwnershipActions.createOwnershipFailure({ error: err })))
        )
      )
    )
  );

  updateOwnership$ = createEffect(() => this.actions$.pipe(
    ofType(fromOwnershipActions.updateOwnership),
    mergeMap(
        (action) => this.ownershipServ.updateOwnership(action.ownership).
        pipe(
          map(
            (resp: any) =>
              fromOwnershipActions.updateOwnershipSuccess(
                { ownership : {...resp.ownership} }
              )
            ),
          catchError( err => of(fromOwnershipActions.updateOwnershipFailure({ error: err })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private ownershipServ: OwnershipsService
    ) {}
}
