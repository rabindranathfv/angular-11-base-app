import { createReducer, on } from '@ngrx/store';
import * as customerActions from '../actions/customers.actions';
import { Customer } from '../../../../interfaces/customers/customers.interface';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

export const customersFeatureKey = 'customers';

export interface CustomerAppState extends EntityState<Customer> {
  error: any;
}

export const adapter: EntityAdapter<Customer> = createEntityAdapter<Customer>();

export const initialState = adapter.getInitialState({
  error: undefined
});


export const customerReducer = createReducer(
  initialState,
  on(customerActions.createCustomer,
    (state ) => ({...state, error: null })
  ),
  on(customerActions.createCustomerSuccess,
    (state, { customer }) => (adapter.addOne( customer,  {...state, error: false}))
  ),
  on(customerActions.createCustomerFailure,
    (state, { error } ) => ({...state, error })
  ),
  on(customerActions.updateCustomer,
    (state ) => ({...state, error: null })
  ),
  on(customerActions.updateCustomerSuccess,
    (state, { customer }) => (adapter.updateOne({ id: customer.id, changes: customer },  {...state, error: false}))
  ),
  on(customerActions.updateCustomerFailure,
    (state, { error } ) => ({...state, error })
  ),
  on(customerActions.loadCustomer,
    state => ({...state})),
  on(customerActions.loadCustomerSuccess,
    (state, { customer }) => (adapter.upsertOne( customer ,  {...state, error: false}))
  ),
  on(customerActions.loadCustomerFailure,
    (state, { error } ) => ({...state, error })
  ),
  on(customerActions.loadCustomers,
    state => ({...state})),
  on(customerActions.loadCustomersSuccess,
    (state, { customers }) => (adapter.setAll(customers,  {...state, error: false}))
  ),
  on(customerActions.loadCustomersFailure,
    (state, { error } ) => ({...state, error })
  ),
  on(customerActions.deleteCustomer,
    state => ({...state})),
  on(customerActions.deleteCustomerSuccess,
    (state, { id }) => (adapter.removeOne(id,  {...state, error: false}))
  ),
  on(customerActions.deleteCustomerFailure,
    (state, { error } ) => ({...state, error })
  ),

);

export function CustomerAppReducer(state, action) {
  return customerReducer(state, action);
}

const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();

// select the array of customer ids
export const selectCustomerIds = selectIds;

// select the dictionary of customer entities
export const selectCustomerEntities = selectEntities;

// select the array of customers
export const selectAllCustomers = selectAll;

// select the total customer count
export const selectCustomerTotal = selectTotal;
