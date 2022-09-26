import { Store } from '@ngrx/store';
import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { Observable, of } from 'rxjs';

import { OwnersService } from 'src/app/services/owners/owners.service';
import { OwnerEffects } from './owner.effects';

import * as fromOwnerActions from '../action/owner.actions';
import * as fromOwnerReducer from '../reducer/owner.reducer';
import { Owner } from 'src/app/interfaces/owner/owner.interface';

describe('OwnerEffects', () => {
  let actions$: Observable<any>;
  let ownerEffects: OwnerEffects;
  let httpMock: HttpTestingController;
  let ownerService: OwnersService;
  let store: MockStore<fromOwnerReducer.OwnerAppState>;
  let owner: Owner;

  const initialOwnerState = {
    [fromOwnerReducer.ownersFeatureKey] : fromOwnerReducer.initialState
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        OwnerEffects,
        OwnersService,
        provideMockActions(() => actions$),
        provideMockStore({ initialState: initialOwnerState }),
      ]
    });
    ownerEffects = TestBed.inject(OwnerEffects);
    ownerService = TestBed.inject(OwnersService);
    store = TestBed.inject(Store) as MockStore<fromOwnerReducer.OwnerAppState>;
    httpMock = TestBed.inject(HttpTestingController);
    owner = {
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
      assistantEmail: 'dfgdfg@hgjgj.com',
      assistantFirstName: 'dfgfdg',
      assistantLastName: 'dfgdfgfd',
      assistantPhone: '456465465',
      userId: 7,
      user : {
        id: 7,
        firstName : 'Geraldo',
        lastName: 'Villarroel',
        dni: '65646464',
        dniFile: 'https://www.test.com',
        street: 'calle',
        number: '333',
        department: '122',
        email: 'gvillarroel9@gmail.com',
        phone: '23232',
        mobile: '343434',
        business: 'H',
        position: 'dsd',
        comercialAddress: '2sdsd',
        anotherContactFullName: 'sdsd',
        anotherContactPhone: '232323',
        anotherContactEmail: 'sdsds@gmail.com',
        observations: 'sds',
        image: 'https://www.test.com',
        isActive: true,
        customerId: 1,
        roleId: 1,
        role: 'Admin',
        buttons: ''
      },
      account: {
        accountNumber: '306869574',
        accountType: '306869574',
        bank: '306869574',
        id: 2,
        ownerId: 5,
        titularFirstName: 'adsad',
        titularLastName: 'asdafda',
        titularTaxInternationalIdentifier: '306869574'
      }
    };
  });

  it('should be created', () => {
    expect(ownerEffects).toBeTruthy();
  });

  it('should call when getAllOwners and it works call loadOwnersSuccess', () => {
    const action = fromOwnerActions.loadOwners();

    jest.spyOn(ownerService, 'getAllOwners');

    actions$ = of({ type: action });

    ownerEffects.loadOwners$.subscribe( () => {
      expect(action.type).toBe(fromOwnerActions.loadOwnersSuccess);
      expect(ownerService.getAllOwners).toHaveBeenCalled();
    });
  });

  it('should call when getAllOwners and it fails call loadOwnersFailure', () => {
    const action = fromOwnerActions.loadOwners();

    jest.spyOn(ownerService, 'getAllOwners');

    actions$ = of({ type: action });

    ownerEffects.loadOwners$.subscribe( () => {
      expect(action.type).toBe(fromOwnerActions.loadOwnersFailure);
      expect(ownerService.getAllOwners).toHaveBeenCalled();
    });
  });

  it('should call when getOwner and it works call loadOwnerSuccess', () => {
    const action = fromOwnerActions.loadOwner({id: 1});

    jest.spyOn(ownerService, 'getOwner');

    actions$ = of({ type: action });

    ownerEffects.loadOwner$.subscribe( () => {
      expect(action.type).toBe(fromOwnerActions.loadOwnerSuccess);
      expect(ownerService.getOwner).toHaveBeenCalled();
    });
  });

  it('should call when getOwner and it works call loadOwnersFailure', () => {
    const action = fromOwnerActions.loadOwner({id: 1});

    jest.spyOn(ownerService, 'getOwner');

    actions$ = of({ type: action });

    ownerEffects.loadOwner$.subscribe( () => {
      expect(action.type).toBe(fromOwnerActions.loadOwnersFailure);
      expect(ownerService.getOwner).toHaveBeenCalled();
    });
  });

  it('should call when deleteOwner and it works call deleteOwnerSuccess', () => {
    const action = fromOwnerActions.deleteOwner({id: 1});

    jest.spyOn(ownerService, 'deleteOwner');

    actions$ = of({ type: action });

    ownerEffects.deleteOwner$.subscribe( () => {
      expect(action.type).toBe(fromOwnerActions.deleteOwnerSuccess);
      expect(ownerService.deleteOwner).toHaveBeenCalled();
    });
  });

  it('should call when deleteOwner and it works call deleteOwnerFailure', () => {
    const action = fromOwnerActions.deleteOwner({id: 1});

    jest.spyOn(ownerService, 'deleteOwner');

    actions$ = of({ type: action });

    ownerEffects.deleteOwner$.subscribe( () => {
      expect(action.type).toBe(fromOwnerActions.deleteOwnerFailure);
      expect(ownerService.deleteOwner).toHaveBeenCalled();
    });
  });

  it('should call when createOwner and it works call createOwnerSuccess', () => {
    const action = fromOwnerActions.createOwner({owner});

    jest.spyOn(ownerService, 'createOwner');

    actions$ = of({ type: action });

    ownerEffects.createOwner$.subscribe( () => {
      expect(action.type).toBe(fromOwnerActions.createOwnerSuccess);
      expect(ownerService.createOwner).toHaveBeenCalled();
    });
  });

  it('should call when createOwner and it works call createOwnerFailure', () => {
    const action = fromOwnerActions.createOwner({owner});

    jest.spyOn(ownerService, 'createOwner');

    actions$ = of({ type: action });

    ownerEffects.createOwner$.subscribe( () => {
      expect(action.type).toBe(fromOwnerActions.createOwnerFailure);
      expect(ownerService.createOwner).toHaveBeenCalled();
    });
  });

  it('should call when updateOwner and it works call updateOwnerSuccess', () => {
    const action = fromOwnerActions.updateOwner({owner});

    jest.spyOn(ownerService, 'updateOwner');

    actions$ = of({ type: action });

    ownerEffects.updateOwner$.subscribe( () => {
      expect(action.type).toBe(fromOwnerActions.updateOwnerSuccess);
      expect(ownerService.updateOwner).toHaveBeenCalled();
    });
  });

  it('should call when updateOwner and it works call updateOwnerFailure', () => {
    const action = fromOwnerActions.updateOwner({owner});

    jest.spyOn(ownerService, 'updateOwner');

    actions$ = of({ type: action });

    ownerEffects.updateOwner$.subscribe( () => {
      expect(action.type).toBe(fromOwnerActions.updateOwnerFailure);
      expect(ownerService.updateOwner).toHaveBeenCalled();
    });
  });



});
