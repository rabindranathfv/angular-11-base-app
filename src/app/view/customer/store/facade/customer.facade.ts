import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';

import * as fromCustomerActions from '../actions/customers.actions';
import { CustomerAppState } from '../reducers/customers.reducer';
import { customerSelectors } from '../selectors/customer.selectors';

import { Customer } from 'src/app/interfaces/customers/customers.interface';

import { Observable } from 'rxjs';

@Injectable()
export class CustomerFacade {

    customersData$: any = this.store.select(customerSelectors.selectCustomers);
    error$: any = this.store.select(customerSelectors.getError);
    constructor( private store: Store<CustomerAppState> ) {}

    getCustomers() {
        this.store.dispatch( fromCustomerActions.loadCustomers());
    }

    loadCustomers(): Observable<Customer[]> {
        return this.store.pipe(select(customerSelectors.selectCustomers));
    }

    getCustomer(id: number ) {
        return this.store.pipe(select(customerSelectors.selectCustomer, {id}));
    }

    loadCustomer(id: number) {
        this.store.dispatch(fromCustomerActions.loadCustomer({id}));
    }

    createCustomer(customer: Customer) {
        this.store.dispatch(fromCustomerActions.createCustomer({customer}));
    }

    updateCustomer(customer: Customer) {
        this.store.dispatch(fromCustomerActions.updateCustomer({customer}));
    }

    deleteCustomer(id: number ) {
        this.store.dispatch( fromCustomerActions.deleteCustomer({id}));
    }

}
