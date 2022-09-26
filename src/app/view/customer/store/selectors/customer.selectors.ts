import { createFeatureSelector, createSelector, State } from '@ngrx/store';
import * as fromCustomerReducer from '../reducers/customers.reducer';

export const selectCustomersFeature = createFeatureSelector<fromCustomerReducer.CustomerAppState>(fromCustomerReducer.customersFeatureKey);

export const selectCustomers = createSelector(
    selectCustomersFeature,
    fromCustomerReducer.selectAllCustomers
);

export const selectCustomer = createSelector(
    selectCustomersFeature,
    (state, prop: { id: number }) => state.entities[prop.id]
);

export const getError = createSelector(
    selectCustomersFeature,
    (state) => state.error
);

export const customerSelectors = {
    selectCustomers,
    selectCustomer,
    getError
};
