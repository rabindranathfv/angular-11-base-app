import { Store } from '@ngrx/store';
import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { Observable, of } from 'rxjs';

import { CustomersService } from 'src/app/services/customers/customers.service';
import { CustomerEffects } from './customer.effects';

import * as fromCustomerActions from '../actions/customers.actions';
import * as fromCustomerReducer from '../reducers/customers.reducer';
import { Customer } from 'src/app/interfaces/customers/customers.interface';


describe('CustomerEffects', () => {
  let actions$: Observable<any>;
  let customerEffects: CustomerEffects;
  let httpMock: HttpTestingController;
  let customerService: CustomersService;
  let store: MockStore<fromCustomerReducer.CustomerAppState>;
  let customer: Customer;

  const initialCustomerState = {
    [fromCustomerReducer.customersFeatureKey] : fromCustomerReducer.initialState
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        CustomerEffects,
        CustomersService,
        provideMockActions(() => actions$),
        provideMockStore({ initialState: initialCustomerState }),
      ]
    });
    customerEffects = TestBed.inject(CustomerEffects);
    customerService = TestBed.inject(CustomersService);
    store = TestBed.inject(Store) as MockStore<fromCustomerReducer.CustomerAppState>;
    httpMock = TestBed.inject(HttpTestingController);
    customer = {
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
    };
  });

  it('should be created', () => {
    expect(customerEffects).toBeTruthy();
  });

  it('should call when getAllCustomers and it works call loadCustomersSuccess', () => {
    const action = fromCustomerActions.loadCustomers();

    jest.spyOn(customerService, 'getAllCustomers');

    actions$ = of({ type: action });

    customerEffects.loadCustomers$.subscribe( () => {
      expect(action.type).toBe(fromCustomerActions.loadCustomersSuccess);
      expect(customerService.getAllCustomers).toHaveBeenCalled();
    });
  });

  it('should call when getAllCustomers and it fails call loadCustomersFailure', () => {
    const action = fromCustomerActions.loadCustomers();

    jest.spyOn(customerService, 'getAllCustomers');

    actions$ = of({ type: action });

    customerEffects.loadCustomers$.subscribe( () => {
      expect(action.type).toBe(fromCustomerActions.loadCustomersFailure);
      expect(customerService.getAllCustomers).toHaveBeenCalled();
    });
  });

  it('should call when getCustomer and it works call loadCustomerSuccess', () => {
    const action = fromCustomerActions.loadCustomer({id: 1});

    jest.spyOn(customerService, 'getCustomer');

    actions$ = of({ type: action });

    customerEffects.loadCustomer$.subscribe( () => {
      expect(action.type).toBe(fromCustomerActions.loadCustomerSuccess);
      expect(customerService.getCustomer).toHaveBeenCalled();
    });
  });

  it('should call when getCustomer and it works call loadCustomersFailure', () => {
    const action = fromCustomerActions.loadCustomer({id: 1});

    jest.spyOn(customerService, 'getCustomer');

    actions$ = of({ type: action });

    customerEffects.loadCustomer$.subscribe( () => {
      expect(action.type).toBe(fromCustomerActions.loadCustomersFailure);
      expect(customerService.getCustomer).toHaveBeenCalled();
    });
  });

  it('should call when deleteCustomer and it works call deleteCustomerSuccess', () => {
    const action = fromCustomerActions.deleteCustomer({id: 1});

    jest.spyOn(customerService, 'deleteCustomer');

    actions$ = of({ type: action });

    customerEffects.deleteCustomer$.subscribe( () => {
      expect(action.type).toBe(fromCustomerActions.deleteCustomerSuccess);
      expect(customerService.deleteCustomer).toHaveBeenCalled();
    });
  });

  it('should call when deleteCustomer and it works call deleteCustomerFailure', () => {
    const action = fromCustomerActions.deleteCustomer({id: 1});

    jest.spyOn(customerService, 'deleteCustomer');

    actions$ = of({ type: action });

    customerEffects.deleteCustomer$.subscribe( () => {
      expect(action.type).toBe(fromCustomerActions.deleteCustomerFailure);
      expect(customerService.deleteCustomer).toHaveBeenCalled();
    });
  });

  it('should call when createCustomer and it works call createCustomerSuccess', () => {
    const action = fromCustomerActions.createCustomer({customer});

    jest.spyOn(customerService, 'createCustomer');

    actions$ = of({ type: action });

    customerEffects.createCustomer$.subscribe( () => {
      expect(action.type).toBe(fromCustomerActions.createCustomerSuccess);
      expect(customerService.createCustomer).toHaveBeenCalled();
    });
  });

  it('should call when createCustomer and it works call createCustomerFailure', () => {
    const action = fromCustomerActions.createCustomer({customer});

    jest.spyOn(customerService, 'createCustomer');

    actions$ = of({ type: action });

    customerEffects.createCustomer$.subscribe( () => {
      expect(action.type).toBe(fromCustomerActions.createCustomerFailure);
      expect(customerService.createCustomer).toHaveBeenCalled();
    });
  });

  it('should call when updateCustomer and it works call updateCustomerSuccess', () => {
    const action = fromCustomerActions.updateCustomer({customer});

    jest.spyOn(customerService, 'updateCustomer');

    actions$ = of({ type: action });

    customerEffects.updateCustomer$.subscribe( () => {
      expect(action.type).toBe(fromCustomerActions.updateCustomerSuccess);
      expect(customerService.updateCustomer).toHaveBeenCalled();
    });
  });

  it('should call when updateCustomer and it works call updateCustomerFailure', () => {
    const action = fromCustomerActions.updateCustomer({customer});

    jest.spyOn(customerService, 'updateCustomer');

    actions$ = of({ type: action });

    customerEffects.updateCustomer$.subscribe( () => {
      expect(action.type).toBe(fromCustomerActions.updateCustomerFailure);
      expect(customerService.updateCustomer).toHaveBeenCalled();
    });
  });



});
