import { Store } from '@ngrx/store';
import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { Observable, of } from 'rxjs';

import { OwnershipsService } from 'src/app/services/ownerships/ownerships.service';
import { OwnershipEffects } from './ownership.effects';

import * as fromOwnershipActions from '../action/ownership.actions';
import * as fromOwnershipReducer from '../reducer/ownership.reducer';
import { Ownership } from 'src/app/interfaces/ownership/ownership.interface';

describe('OwnershipEffects', () => {
  let actions$: Observable<any>;
  let ownershipEffects: OwnershipEffects;
  let httpMock: HttpTestingController;
  let ownershipService: OwnershipsService;
  let store: MockStore<fromOwnershipReducer.OwnershipAppState>;
  let ownership: Ownership;

  const initialOwnershipState = {
    [fromOwnershipReducer.ownershipsFeatureKey] : fromOwnershipReducer.initialState
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        OwnershipEffects,
        OwnershipsService,
        provideMockActions(() => actions$),
        provideMockStore({ initialState: initialOwnershipState }),
      ]
    });
    ownershipEffects = TestBed.inject(OwnershipEffects);
    ownershipService = TestBed.inject(OwnershipsService);
    store = TestBed.inject(Store) as MockStore<fromOwnershipReducer.OwnershipAppState>;
    httpMock = TestBed.inject(HttpTestingController);
    ownership = {
      id: 2,
      admissionDate: '2020-06-24',
      street: 'La Florida O',
      number: '12',
      department: '11',
      communes: [
          'Recreo',
          'Sabana Grande'
      ],
      propertyType: 'Department',
      hasWarehouse: '2',
      hasParking: '3',
      role: 'some',
      minimumAmount: '300',
      maximumAmount: '500',
      administrationPhone: '944423',
      administrationContact: '9293232',
      isAssertion: false,
      electricityClientNumber: '4343456',
      waterClientNumber: '456576',
      bedrooms: [
          '5',
          '1'
      ],
      bathrooms: [
          '5',
          '1'
      ],
      gasClientNumber: '3456467',
      surfaceM2: '120',
      orientation: 'E',
      realState: 'Some',
      metro: 'Chacaito',
      availableDate: '2020-06-27',
      moreFeatures: 'Some',
      images: [
          'e86-4356-a1cb-7234bf009a0f'
      ],
      customerId: 1,
      customer: {
          id: 1,
          name: 'Yamil Ferreira',
          country: 'usa',
          taxInternationalIdentifier: '306869574',
          address: 'Eaddress',
          legalRepresentative: 'Yamil Ferreira',
          email: 'skajskaj@gmail.com',
          primaryPhone: '212132',
          secondaryPhone: '43434',
          areas: [],
          configurationId: 1
      },
      ownerships_owners: [
          {
              id: 2,
              ownershipId: 2,
              ownerId: 5,
              owner: {
                  id: 5,
                  business: 'ASDADSA',
                  position: 'adsSDdsadsad',
                  comercialAddress: 'dfgdfg',
                  admissionDate: '2020-10-31T00:00:00.000Z',
                  fixedAmount: 5,
                  administrationPercent: 5,
                  brokeragePercent: 5,
                  portfolioExecutives: [
                      'In Proccess'
                  ],
                  observations: 'dfgdfgdfg',
                  assistantFirstName: 'dfgfdg',
                  assistantLastName: 'dfgdfgfd',
                  assistantPhone: '456465465',
                  assistantEmail: 'dfgdfg@hgjgj.com',
                  userId: 7
              }
          }
      ]
    };
  });

  it('should be created', () => {
    expect(ownershipEffects).toBeTruthy();
  });

  it('should call when getAllOwnerships and it works call loadOwnershipsSuccess', () => {
    const action = fromOwnershipActions.loadOwnerships();

    jest.spyOn(ownershipService, 'getAllOwnerships');

    actions$ = of({ type: action });

    ownershipEffects.loadOwnerships$.subscribe( () => {
      expect(action.type).toBe(fromOwnershipActions.loadOwnershipsSuccess);
      expect(ownershipService.getAllOwnerships).toHaveBeenCalled();
    });
  });

  it('should call when getAllOwnerships and it fails call loadOwnershipsFailure', () => {
    const action = fromOwnershipActions.loadOwnerships();

    jest.spyOn(ownershipService, 'getAllOwnerships');

    actions$ = of({ type: action });

    ownershipEffects.loadOwnerships$.subscribe( () => {
      expect(action.type).toBe(fromOwnershipActions.loadOwnershipsFailure);
      expect(ownershipService.getAllOwnerships).toHaveBeenCalled();
    });
  });

  it('should call when getOwnership and it works call loadOwnershipSuccess', () => {
    const action = fromOwnershipActions.loadOwnership({id: 1});

    jest.spyOn(ownershipService, 'getOwnership');

    actions$ = of({ type: action });

    ownershipEffects.loadOwnership$.subscribe( () => {
      expect(action.type).toBe(fromOwnershipActions.loadOwnershipSuccess);
      expect(ownershipService.getOwnership).toHaveBeenCalled();
    });
  });

  it('should call when getOwnership and it works call loadOwnershipsFailure', () => {
    const action = fromOwnershipActions.loadOwnership({id: 1});

    jest.spyOn(ownershipService, 'getOwnership');

    actions$ = of({ type: action });

    ownershipEffects.loadOwnership$.subscribe( () => {
      expect(action.type).toBe(fromOwnershipActions.loadOwnershipsFailure);
      expect(ownershipService.getOwnership).toHaveBeenCalled();
    });
  });

  it('should call when deleteOwnership and it works call deleteOwnershipSuccess', () => {
    const action = fromOwnershipActions.deleteOwnership({id: 1});

    jest.spyOn(ownershipService, 'deleteOwnership');

    actions$ = of({ type: action });

    ownershipEffects.deleteOwnership$.subscribe( () => {
      expect(action.type).toBe(fromOwnershipActions.deleteOwnershipSuccess);
      expect(ownershipService.deleteOwnership).toHaveBeenCalled();
    });
  });

  it('should call when deleteOwnership and it works call deleteOwnershipFailure', () => {
    const action = fromOwnershipActions.deleteOwnership({id: 1});

    jest.spyOn(ownershipService, 'deleteOwnership');

    actions$ = of({ type: action });

    ownershipEffects.deleteOwnership$.subscribe( () => {
      expect(action.type).toBe(fromOwnershipActions.deleteOwnershipFailure);
      expect(ownershipService.deleteOwnership).toHaveBeenCalled();
    });
  });

  it('should call when createOwnership and it works call createOwnershipSuccess', () => {
    const action = fromOwnershipActions.createOwnership({ownership});

    jest.spyOn(ownershipService, 'createOwnership');

    actions$ = of({ type: action });

    ownershipEffects.createOwnership$.subscribe( () => {
      expect(action.type).toBe(fromOwnershipActions.createOwnershipSuccess);
      expect(ownershipService.createOwnership).toHaveBeenCalled();
    });
  });

  it('should call when createOwnership and it works call createOwnershipFailure', () => {
    const action = fromOwnershipActions.createOwnership({ownership});

    jest.spyOn(ownershipService, 'createOwnership');

    actions$ = of({ type: action });

    ownershipEffects.createOwnership$.subscribe( () => {
      expect(action.type).toBe(fromOwnershipActions.createOwnershipFailure);
      expect(ownershipService.createOwnership).toHaveBeenCalled();
    });
  });

  it('should call when updateOwnership and it works call updateOwnershipSuccess', () => {
    const action = fromOwnershipActions.updateOwnership({ownership});

    jest.spyOn(ownershipService, 'updateOwnership');

    actions$ = of({ type: action });

    ownershipEffects.updateOwnership$.subscribe( () => {
      expect(action.type).toBe(fromOwnershipActions.updateOwnershipSuccess);
      expect(ownershipService.updateOwnership).toHaveBeenCalled();
    });
  });

  it('should call when updateOwnership and it works call updateOwnershipFailure', () => {
    const action = fromOwnershipActions.updateOwnership({ownership});

    jest.spyOn(ownershipService, 'updateOwnership');

    actions$ = of({ type: action });

    ownershipEffects.updateOwnership$.subscribe( () => {
      expect(action.type).toBe(fromOwnershipActions.updateOwnershipFailure);
      expect(ownershipService.updateOwnership).toHaveBeenCalled();
    });
  });



});
