import * as fromCustomersActions from './customers.actions';
import { Customer } from 'src/app/interfaces/customers/customers.interface';

const customers: Customer[] = [
  {
    id: 1,
    name: 'Admin Chile',
    country: 'CHL',
    taxInternationalIdentifier: '26260462-4',
    address: 'Santiago',
    legalRepresentative: 'Yamil Ferreira',
    email: 'contactoadminchile@gmail.com',
    primaryPhone: '56945454544',
    secondaryPhone: '569454554',
    areas: [
        ''
    ],
    configurationId: 1,
    configuration: {
        id: 1,
        modules: {},
        logo: 'https://domain-test.com',
        logoMobile: 'https://domain-test.com',
        language: 'ES',
        mainColor: '#FFFFFF',
        secondaryColor: '#000000',
        slogan: 'Slogan Test'
    }
},
{
    id: 2,
    name: 'customer test 1',
    country: 'chl',
    taxInternationalIdentifier: '111111111',
    address: 'address',
    legalRepresentative: 'test',
    email: 'customearTest1@gmail.com',
    primaryPhone: '56993167551',
    secondaryPhone: '43434',
    areas: [
        'retail'
    ],
    configurationId: 2,
    configuration: {
        id: 2,
        modules: {
            adm: 'administration',
            customers: 'customers'
        },
        logo: 'https://www.test.com',
        logoMobile: 'https://www.test-mobile.com',
        language: 'es',
        mainColor: '211',
        secondaryColor: '2112',
        slogan: 'slong customer test 1'
    }
}];

const error: any = {
  code: 'ERROR',
  url: 'localhost:3000/customers/'
};

describe('Customers Actions', () => {
  it('should return an action for loadCustomers', () => {
    const action = fromCustomersActions.loadCustomers();
    expect(action.type).toBe(fromCustomersActions.CustomersActions.loadCustomers);
  });

  it('should return an action for loadCustomersSuccess', () => {
    const payloadCustomers: Customer[] = customers;
    const action = fromCustomersActions.loadCustomersSuccess({ customers: payloadCustomers});
    expect(action.type).toBe(fromCustomersActions.CustomersActions.loadCustomersSuccess);
  });

  it('should return an action for loadCustomersFailure', () => {
    const payloadError: any = error;
    const action = fromCustomersActions.loadCustomersFailure({ error: payloadError});
    expect(action.type).toBe(fromCustomersActions.CustomersActions.loadCustomersFailure);
  });

  it('should return an action for loadCustomer', () => {
    const customerId = customers[0].id;
    const action = fromCustomersActions.loadCustomer({id: customerId});
    expect(action.type).toBe(fromCustomersActions.CustomersActions.loadCustomer);
  });

  it('should return an action for loadCustomerSuccess', () => {
    const payloadCustomer: Customer = customers[0];
    const action = fromCustomersActions.loadCustomerSuccess({ customer: payloadCustomer});
    expect(action.type).toBe(fromCustomersActions.CustomersActions.loadCustomerSuccess);
  });

  it('should return an action for loadCustomerFailure', () => {
    const payloadError: any = error;
    const action = fromCustomersActions.loadCustomerFailure({ error: payloadError});
    expect(action.type).toBe(fromCustomersActions.CustomersActions.loadCustomerFailure);
  });

  it('should return an action for createCustomer', () => {
    const newCustomer = customers[0];
    const action = fromCustomersActions.createCustomer({customer: newCustomer});
    expect(action.type).toBe(fromCustomersActions.CustomersActions.createCustomer);
  });

  it('should return an action for createCustomerSuccess', () => {
    const newCustomer = customers[0];
    const action = fromCustomersActions.createCustomerSuccess({ customer: newCustomer});
    expect(action.type).toBe(fromCustomersActions.CustomersActions.createCustomerSuccess);
  });

  it('should return an action for createCustomerFailure', () => {
    const payloadError: any = error;
    const action = fromCustomersActions.createCustomerFailure({ error: payloadError});
    expect(action.type).toBe(fromCustomersActions.CustomersActions.createCustomerFailure);
  });

  it('should return an action for updateCustomer', () => {
    const updatedCustomer = customers[0];
    const action = fromCustomersActions.updateCustomer({customer: updatedCustomer});
    expect(action.type).toBe(fromCustomersActions.CustomersActions.updateCustomer);
  });

  it('should return an action for updateCustomerSuccess', () => {
    const updatedCustomer = customers[0];
    const action = fromCustomersActions.updateCustomerSuccess({ customer: updatedCustomer});
    expect(action.type).toBe(fromCustomersActions.CustomersActions.updateCustomerSuccess);
  });

  it('should return an action for updateCustomerFailure', () => {
    const payloadError: any = error;
    const action = fromCustomersActions.updateCustomerFailure({ error: payloadError});
    expect(action.type).toBe(fromCustomersActions.CustomersActions.updateCustomerFailure);
  });

  it('should return an action for deleteCustomer', () => {
    const customerId = customers[0].id;
    const action = fromCustomersActions.deleteCustomer({id: customerId});
    expect(action.type).toBe(fromCustomersActions.CustomersActions.deleteCustomer);
  });

  it('should return an action for deleteCustomerSuccess', () => {
    const customerId = customers[0].id;
    const action = fromCustomersActions.deleteCustomerSuccess({ id: customerId});
    expect(action.type).toBe(fromCustomersActions.CustomersActions.deleteCustomerSuccess);
  });

  it('should return an action for deleteCustomerFailure', () => {
    const payloadError: any = error;
    const action = fromCustomersActions.deleteCustomerFailure({ error: payloadError});
    expect(action.type).toBe(fromCustomersActions.CustomersActions.deleteCustomerFailure);
  });

});
