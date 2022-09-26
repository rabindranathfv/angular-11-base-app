import { Customer } from '../../../../interfaces/customers/customers.interface';
import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

export enum CustomersActions {
  updateCustomer = '[Customers View] Update Customer',
  updateCustomerSuccess = '[Customers Effect] Update Customer Success',
  updateCustomerFailure = '[Customers Effect] Update Customer Failure',
  createCustomer = '[Customers View] Create Customer',
  createCustomerSuccess = '[Customers Effect] Create Customer Success',
  createCustomerFailure = '[Customers Effect] Create Customer Failure',
  deleteCustomer = '[Customers View] Delete Customer',
  deleteCustomerSuccess = '[Customers Effect] Delete Customer Success',
  deleteCustomerFailure = '[Customers Effect] Delete Customer Failure',
  loadCustomer = '[Customers View] Load Customer',
  loadCustomerSuccess = '[Customers Effect] Load Customer Success',
  loadCustomerFailure = '[Customers Effect] Load Customer Failure',
  loadCustomers = '[Customers View] Load Customers',
  loadCustomersSuccess = '[Customers Effect] Load Customers Success',
  loadCustomersFailure = '[Customers Effect] Load Customers Failure',
}

export const updateCustomer = createAction(
  CustomersActions.updateCustomer,
  props<{ customer: Customer }>()
);

export const updateCustomerSuccess = createAction(
  CustomersActions.updateCustomerSuccess,
  props<{ customer: Customer }>()
);

export const updateCustomerFailure = createAction(
  CustomersActions.updateCustomerFailure,
  props<{ error: any }>()
);

export const createCustomer = createAction(
  CustomersActions.createCustomer,
  props<{ customer: Customer }>()
);

export const createCustomerSuccess = createAction(
  CustomersActions.createCustomerSuccess,
  props<{ customer: Customer }>()
);

export const createCustomerFailure = createAction(
  CustomersActions.createCustomerFailure,
  props<{ error: any }>()
);

export const loadCustomer = createAction(
  CustomersActions.loadCustomer,
  props<{ id: number }>()
);

export const loadCustomerSuccess = createAction(
  CustomersActions.loadCustomerSuccess,
  props<{ customer: Customer }>()
);

export const loadCustomerFailure = createAction(
  CustomersActions.loadCustomerFailure,
  props<{ error: any }>()
);

export const loadCustomers = createAction(
  CustomersActions.loadCustomers
);

export const loadCustomersSuccess = createAction(
  CustomersActions.loadCustomersSuccess,
  props<{ customers: Customer[] }>()
);

export const loadCustomersFailure = createAction(
  CustomersActions.loadCustomersFailure,
  props<{ error: any }>()
);

export const deleteCustomer = createAction(
  CustomersActions.deleteCustomer,
  props<{ id: number }>()
);

export const deleteCustomerSuccess = createAction(
  CustomersActions.deleteCustomerSuccess,
  props<{ id: number }>()
);

export const deleteCustomerFailure = createAction(
  CustomersActions.deleteCustomerFailure,
  props<{ error: any }>()
);


export const fromCustomersActions = {
  updateCustomer,
  updateCustomerSuccess,
  updateCustomerFailure,
  loadCustomers,
  loadCustomersSuccess,
  loadCustomersFailure,
  loadCustomer,
  loadCustomerSuccess,
  loadCustomerFailure,
  deleteCustomer,
  deleteCustomerSuccess,
  deleteCustomerFailure
};
