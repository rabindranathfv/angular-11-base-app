import { Store } from '@ngrx/store';
import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { Observable, of } from 'rxjs';

import { UsersService } from 'src/app/services/users/users.service';
import { UserEffects } from './user.effects';

import * as fromUserActions from '../action/user.actions';
import * as fromUserReducer from '../reducer/user.reducer';
import { User } from 'src/app/interfaces/user/user';
import { AuthFacade } from 'src/app/store/auth/facade/auth.facade';

describe('UserEffects', () => {
  let actions$: Observable<any>;
  let userEffects: UserEffects;
  let httpMock: HttpTestingController;
  let userService: UsersService;
  let store: MockStore<fromUserReducer.UserAppState>;
  let user: User;

  const initialUserState = {
    [fromUserReducer.usersFeatureKey] : fromUserReducer.initialState
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        AuthFacade,
        UserEffects,
        UsersService,
        provideMockActions(() => actions$),
        provideMockStore({ initialState: initialUserState }),
      ]
    });
    userEffects = TestBed.inject(UserEffects);
    userService = TestBed.inject(UsersService);
    store = TestBed.inject(Store) as MockStore<fromUserReducer.UserAppState>;
    httpMock = TestBed.inject(HttpTestingController);
    user = {
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
    };
  });

  it('should be created', () => {
    expect(userEffects).toBeTruthy();
  });

  it('should call when getAllUsers and it works call loadUsersSuccess', () => {
    const action = fromUserActions.loadUsers();

    jest.spyOn(userService, 'getAllUsers');

    actions$ = of({ type: action });

    userEffects.loadUsers$.subscribe( () => {
      expect(action.type).toBe(fromUserActions.loadUsersSuccess);
      expect(userService.getAllUsers).toHaveBeenCalled();
    });
  });

  it('should call when getAllUsers and it fails call loadUsersFailure', () => {
    const action = fromUserActions.loadUsers();

    jest.spyOn(userService, 'getAllUsers');

    actions$ = of({ type: action });

    userEffects.loadUsers$.subscribe( () => {
      expect(action.type).toBe(fromUserActions.loadUsersFailure);
      expect(userService.getAllUsers).toHaveBeenCalled();
    });
  });

  it('should call when getUser and it works call loadUserSuccess', () => {
    const action = fromUserActions.loadUser({id: 1});

    jest.spyOn(userService, 'getUser');

    actions$ = of({ type: action });

    userEffects.loadUser$.subscribe( () => {
      expect(action.type).toBe(fromUserActions.loadUserSuccess);
      expect(userService.getUser).toHaveBeenCalled();
    });
  });

  it('should call when getUser and it works call loadUsersFailure', () => {
    const action = fromUserActions.loadUser({id: 1});

    jest.spyOn(userService, 'getUser');

    actions$ = of({ type: action });

    userEffects.loadUser$.subscribe( () => {
      expect(action.type).toBe(fromUserActions.loadUsersFailure);
      expect(userService.getUser).toHaveBeenCalled();
    });
  });

  it('should call when deleteUser and it works call deleteUserSuccess', () => {
    const action = fromUserActions.deleteUser({id: 1});

    jest.spyOn(userService, 'deleteUser');

    actions$ = of({ type: action });

    userEffects.deleteUser$.subscribe( () => {
      expect(action.type).toBe(fromUserActions.deleteUserSuccess);
      expect(userService.deleteUser).toHaveBeenCalled();
    });
  });

  it('should call when deleteUser and it works call deleteUserFailure', () => {
    const action = fromUserActions.deleteUser({id: 1});

    jest.spyOn(userService, 'deleteUser');

    actions$ = of({ type: action });

    userEffects.deleteUser$.subscribe( () => {
      expect(action.type).toBe(fromUserActions.deleteUserFailure);
      expect(userService.deleteUser).toHaveBeenCalled();
    });
  });

  it('should call when createUser and it works call createUserSuccess', () => {
    const action = fromUserActions.createUser({user});

    jest.spyOn(userService, 'createUser');

    actions$ = of({ type: action });

    userEffects.createUser$.subscribe( () => {
      expect(action.type).toBe(fromUserActions.createUserSuccess);
      expect(userService.createUser).toHaveBeenCalled();
    });
  });

  it('should call when createUser and it works call createUserFailure', () => {
    const action = fromUserActions.createUser({user});

    jest.spyOn(userService, 'createUser');

    actions$ = of({ type: action });

    userEffects.createUser$.subscribe( () => {
      expect(action.type).toBe(fromUserActions.createUserFailure);
      expect(userService.createUser).toHaveBeenCalled();
    });
  });

  it('should call when updateUser and it works call updateUserSuccess', () => {
    const action = fromUserActions.updateUser({user});

    jest.spyOn(userService, 'updateUser');

    actions$ = of({ type: action });

    userEffects.updateUser$.subscribe( () => {
      expect(action.type).toBe(fromUserActions.updateUserSuccess);
      expect(userService.updateUser).toHaveBeenCalled();
    });
  });

  it('should call when updateUser and it works call updateUserFailure', () => {
    const action = fromUserActions.updateUser({user});

    jest.spyOn(userService, 'updateUser');

    actions$ = of({ type: action });

    userEffects.updateUser$.subscribe( () => {
      expect(action.type).toBe(fromUserActions.updateUserFailure);
      expect(userService.updateUser).toHaveBeenCalled();
    });
  });



});
