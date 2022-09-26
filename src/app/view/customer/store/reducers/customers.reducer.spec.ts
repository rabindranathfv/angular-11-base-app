import * as fromCustomerReducer from './customers.reducer';
import * as fromCustomersActions from './../actions/customers.actions';
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

describe('Customers Reducer', () => {
  describe('should run all reducers with actions', () => {
    it('should load initial customer state', () => {
      const action = {} as any;

      const result = fromCustomerReducer.CustomerAppReducer(fromCustomerReducer.initialState, action);

      expect(result).toBe(fromCustomerReducer.initialState);
    });

    it('should apply reducer loadCustomers into state', (done) => {
      const actionInitial = {} as any;
      const initialCustomerState = fromCustomerReducer.CustomerAppReducer(fromCustomerReducer.initialState, actionInitial);

      const newAction = fromCustomersActions.loadCustomers();
      const newState = fromCustomerReducer.customerReducer(initialCustomerState, newAction);

      expect(newState).toEqual(initialCustomerState);
      done();
    });

    it('should apply reducer loadCustomersSuccess into state', (done) => {
      const actionInitial = {} as any;
      const initialCustomerState = fromCustomerReducer.CustomerAppReducer(fromCustomerReducer.initialState, actionInitial);

      const payloadCustomers: Customer[] = customers;
      const newAction = fromCustomersActions.loadCustomersSuccess({ customers: payloadCustomers});
      const newState = fromCustomerReducer.customerReducer(initialCustomerState, newAction);

      expect(Object.values(newState.entities)).toEqual(payloadCustomers);
      done();
    });

    it('should apply reducer loadCustomersFailure into state', () => {
      const actionInitial = {} as any;
      const initialCustomerState = fromCustomerReducer.CustomerAppReducer(fromCustomerReducer.initialState, actionInitial);

      const payloadError: any = new Error('http error');
      const newAction = fromCustomersActions.loadCustomersFailure({ error: payloadError});
      const newState = fromCustomerReducer.customerReducer(initialCustomerState, newAction);

      expect(newState.error).toBe(payloadError);
    });

    it('should apply reducer loadCustomer into state', (done) => {
      const actionInitial = {} as any;
      const initialCustomerState = fromCustomerReducer.CustomerAppReducer(fromCustomerReducer.initialState, actionInitial);

      const newAction = fromCustomersActions.loadCustomer({id: 2});
      const newState = fromCustomerReducer.customerReducer(initialCustomerState, newAction);

      expect(newState).toEqual(initialCustomerState);
      done();
    });

    it('should apply reducer loadCustomerSuccess into state', (done) => {
      const actionInitial = {} as any;
      const initialCustomerState = fromCustomerReducer.CustomerAppReducer(fromCustomerReducer.initialState, actionInitial);

      const payloadCustomer: Customer = customers[0];
      const newAction = fromCustomersActions.loadCustomerSuccess({ customer: payloadCustomer});
      const newState = fromCustomerReducer.customerReducer(initialCustomerState, newAction);
      expect(Object.values(newState.entities)[0]).toEqual(payloadCustomer);
      done();
    });

    it('should apply reducer loadCustomerFailure into state', () => {
      const actionInitial = {} as any;
      const initialCustomerState = fromCustomerReducer.CustomerAppReducer(fromCustomerReducer.initialState, actionInitial);

      const payloadError: any = new Error('http error');
      const newAction = fromCustomersActions.loadCustomerFailure({ error: payloadError});
      const newState = fromCustomerReducer.customerReducer(initialCustomerState, newAction);

      expect(newState.error).toBe(payloadError);
    });

    it('should apply reducer createCustomer into state', (done) => {
      const actionInitial = {} as any;
      const initialCustomerState = fromCustomerReducer.CustomerAppReducer(fromCustomerReducer.initialState, actionInitial);
      const payloadCustomer: Customer = customers[0];
      const newAction = fromCustomersActions.createCustomer({customer: payloadCustomer});
      const newState = fromCustomerReducer.customerReducer(initialCustomerState, newAction);

      expect(newState).toEqual({...initialCustomerState, error: null});
      done();
    });

    it('should apply reducer createCustomerSuccess into state', (done) => {
      const actionInitial = {} as any;
      const initialCustomerState = fromCustomerReducer.CustomerAppReducer(fromCustomerReducer.initialState, actionInitial);

      const payloadCustomer: Customer = customers[0];
      const newAction = fromCustomersActions.createCustomerSuccess({ customer: payloadCustomer});
      const newState = fromCustomerReducer.customerReducer(initialCustomerState, newAction);
      expect(Object.values(newState.entities)[0]).toEqual(payloadCustomer);
      done();
    });

    it('should apply reducer createCustomerFailure into state', () => {
      const actionInitial = {} as any;
      const initialCustomerState = fromCustomerReducer.CustomerAppReducer(fromCustomerReducer.initialState, actionInitial);

      const payloadError: any = new Error('http error');
      const newAction = fromCustomersActions.createCustomerFailure({ error: payloadError});
      const newState = fromCustomerReducer.customerReducer(initialCustomerState, newAction);

      expect(newState.error).toBe(payloadError);
    });

    it('should apply reducer updateCustomer into state', (done) => {
      const actionInitial = {} as any;
      const initialCustomerState = fromCustomerReducer.CustomerAppReducer(fromCustomerReducer.initialState, actionInitial);
      const payloadCustomer: Customer = customers[0];
      const newAction = fromCustomersActions.updateCustomer({customer: payloadCustomer});
      const newState = fromCustomerReducer.customerReducer(initialCustomerState, newAction);

      expect(newState).toEqual({...initialCustomerState, error: null});
      done();
    });

    it('should apply reducer updateCustomerSuccess into state', (done) => {
      const actionInitial = {} as any;
      const initialCustomerState = fromCustomerReducer.CustomerAppReducer(fromCustomerReducer.initialState, actionInitial);

      const payloadCustomer: Customer = customers[0];
      const secondaryAction = fromCustomersActions.createCustomerSuccess({ customer: payloadCustomer});
      const secondaryState = fromCustomerReducer.customerReducer(initialCustomerState, secondaryAction);

      const editedCustomer: Customer = {...payloadCustomer, name: 'EditedName'};
      const newAction = fromCustomersActions.updateCustomerSuccess({ customer: editedCustomer});
      const newState = fromCustomerReducer.customerReducer(secondaryState, newAction);

      expect(Object.values(newState.entities)[0]).toEqual(editedCustomer);
      done();
    });

    it('should apply reducer updateCustomerFailure into state', () => {
      const actionInitial = {} as any;
      const initialCustomerState = fromCustomerReducer.CustomerAppReducer(fromCustomerReducer.initialState, actionInitial);

      const payloadError: any = new Error('http error');
      const newAction = fromCustomersActions.updateCustomerFailure({ error: payloadError});
      const newState = fromCustomerReducer.customerReducer(initialCustomerState, newAction);

      expect(newState.error).toBe(payloadError);
    });

    it('should apply reducer deleteCustomer into state', (done) => {
      const actionInitial = {} as any;
      const initialCustomerState = fromCustomerReducer.CustomerAppReducer(fromCustomerReducer.initialState, actionInitial);

      const customerId = customers[0].id;
      const newAction = fromCustomersActions.deleteCustomer({id: customerId});
      const newState = fromCustomerReducer.customerReducer(initialCustomerState, newAction);

      expect(newState).toEqual(initialCustomerState);
      done();
    });

    it('should apply reducer deleteCustomerSuccess into state', (done) => {
      const actionInitial = {} as any;
      const initialCustomerState = fromCustomerReducer.CustomerAppReducer(fromCustomerReducer.initialState, actionInitial);

      const payloadCustomer: Customer = customers[0];
      const secondaryAction = fromCustomersActions.createCustomerSuccess({ customer: payloadCustomer});
      const secondaryState = fromCustomerReducer.customerReducer(initialCustomerState, secondaryAction);

      const newAction = fromCustomersActions.deleteCustomerSuccess({id: payloadCustomer.id});
      const newState = fromCustomerReducer.customerReducer(secondaryState, newAction);

      expect(Object.values(newState.entities)).toEqual([]);
      done();
    });

    it('should apply reducer deleteCustomerFailure into state', () => {
      const actionInitial = {} as any;
      const initialCustomerState = fromCustomerReducer.CustomerAppReducer(fromCustomerReducer.initialState, actionInitial);

      const payloadError: any = new Error('http error');
      const newAction = fromCustomersActions.deleteCustomerFailure({ error: payloadError});
      const newState = fromCustomerReducer.customerReducer(initialCustomerState, newAction);

      expect(newState.error).toBe(payloadError);
    });

  });
});
