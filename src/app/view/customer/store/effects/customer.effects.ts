import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import * as fromCustomerActions from '../actions/customers.actions';
import { CustomersService } from '../../../../services/customers/customers.service';
import { mergeMap, map, catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Customer } from '../../../../interfaces/customers/customers.interface';


@Injectable()
export class CustomerEffects {

  customerData: Customer[];

  loadCustomers$ = createEffect(() => this.actions$.pipe(
    ofType(fromCustomerActions.loadCustomers),
    mergeMap(() => this.customerServ.getAllCustomers().
      pipe(
        map( (resp: any) => {
          this.customerData = resp.customers.map( custo => {
            return {
                      name : custo.name,
                      id: custo.id,
                      address: custo.address,
                      email: custo.email,
                      phone: custo.primaryPhone,
                      buttons: [
                        {
                          icon: 'fa fa-trash',
                          color: 'danger',
                          route: 'delete'
                        },
                        {
                          icon: 'fa fa-edit',
                          color: 'warning',
                          route: 'customer/update'
                        },
                        {
                          icon: 'fa fa-eye',
                          color: 'info',
                          route: 'customer'
                        }
                      ]
                    };
          });
          return fromCustomerActions.loadCustomersSuccess({ customers: this.customerData });
        }),
        catchError( err => of(fromCustomerActions.loadCustomersFailure({ error: err })))
      )
    )
  ));

  loadCustomer$ = createEffect(() => this.actions$.pipe(
    ofType(fromCustomerActions.loadCustomer),
    mergeMap(
        (action) => this.customerServ.getCustomer(action.id).
        pipe(
          map( (resp: any) => fromCustomerActions.loadCustomerSuccess({ customer: resp.customer })),
          catchError( err => of(fromCustomerActions.loadCustomerFailure({ error: err })))
        )
      )
    )
  );

  deleteCustomer$ = createEffect(() => this.actions$.pipe(
    ofType(fromCustomerActions.deleteCustomer),
    mergeMap(
        (action) => this.customerServ.deleteCustomer(action.id).
        pipe(
          map( (resp: any) => fromCustomerActions.deleteCustomerSuccess({ id: resp.customer.id })),
          catchError( err => of(fromCustomerActions.deleteCustomerFailure({ error: err })))
        )
      )
    )
  );

  createCustomer$ = createEffect(() => this.actions$.pipe(
    ofType(fromCustomerActions.createCustomer),
    mergeMap(
        (action) => this.customerServ.createCustomer(action.customer).
        pipe(
          map(
            (resp: any) =>
              fromCustomerActions.createCustomerSuccess(
                { customer : {...resp.customer.customer, configuration: resp.customer.configuration} }
              )
            ),
          catchError( err => of(fromCustomerActions.createCustomerFailure({ error: err })))
        )
      )
    )
  );

  updateCustomer$ = createEffect(() => this.actions$.pipe(
    ofType(fromCustomerActions.updateCustomer),
    mergeMap(
        (action) => this.customerServ.updateCustomer(action.customer).
        pipe(
          map(
            (resp: any) =>
              fromCustomerActions.updateCustomerSuccess(
                { customer : {...resp.customer } }
              )
            ),
          catchError( err => of(fromCustomerActions.updateCustomerFailure({ error: err })))
        )
      )
    )
  );



  constructor(
    private actions$: Actions,
    private customerServ: CustomersService
    ) {}

}
