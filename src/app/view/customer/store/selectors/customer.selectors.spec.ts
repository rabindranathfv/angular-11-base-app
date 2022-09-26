import * as fromCustomerSelectors from './customer.selectors';
import { Customer } from 'src/app/interfaces/customers/customers.interface';

// example for make test for selectors from https://timdeschryver.dev/blog/how-i-test-my-ngrx-selectors

const createCustomerAppState = ({
  customers = {
      1: {
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
      2: {
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
      }
  }
} = {} ) => ({
  customers: {
    ids : [1, 2],
    entities: customers,
    error: undefined
  }
});

describe('Customer Selectors', () => {
  it('should select all customers from Store', () => {
    const fakeStore = createCustomerAppState();
    const selector = fromCustomerSelectors.selectCustomers(fakeStore);
    const customers: Customer [] = Object.values(fakeStore.customers.entities);
    expect(selector).toEqual(customers);
  });

  it('should select customer from Store', () => {
    const fakeStore = createCustomerAppState();
    const selector = fromCustomerSelectors.selectCustomer(fakeStore, {id: 1});
    const customer: Customer = Object.values(fakeStore.customers.entities)[0];
    expect(selector).toEqual(customer);
  });

});
