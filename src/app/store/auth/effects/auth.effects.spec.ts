import { Store } from '@ngrx/store';
import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of } from 'rxjs';

import { AuthEffects } from './auth.effects';
import { AuthService } from 'src/app/services/auth/auth.service';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


import * as fromAuthActions from '../actions/auth.actions';
import * as fromAuthReducer from '../reducers/auth.reducer';


describe('AuthEffects', () => {

  let actions$: Observable<any>;
  let httpMock: HttpTestingController;
  let authEffects: AuthEffects;
  let authService: AuthService;
  let store: MockStore<fromAuthReducer.AuthState>;

  const initialAuthState = {
    [fromAuthReducer.authFeatureKey] : fromAuthReducer.initialAuthState
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        AuthEffects,
        provideMockActions(() => actions$),
        provideMockStore({ initialState: initialAuthState }),
      ]
    });
    authEffects = TestBed.inject(AuthEffects);
    authService = TestBed.inject(AuthService);
    store = TestBed.inject(Store) as MockStore<fromAuthReducer.AuthState>;
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(authEffects).toBeTruthy();
  });

  it('should call when login and it works call loginSuccess', () => {
    const credentials = {email: 'test@test.com', password: '123456789'};
    const action = fromAuthActions.login(credentials);

    jest.spyOn(authService, 'login');

    actions$ = of({ type: action });

    authEffects.login$.subscribe( () => {
      expect(action.type).toBe(fromAuthActions.loginSuccess);
      expect(authService.login).toHaveBeenCalled();
    });
  });

  it('should call when login and it fails call loginFailure', () => {
    const credentials = {email: 'test@test.com', password: '123456789'};
    const action = fromAuthActions.login(credentials);

    jest.spyOn(authService, 'login');

    actions$ = of({ type: action });

    authEffects.login$.subscribe( () => {
      expect(action.type).toBe(fromAuthActions.loginFailure);
      expect(authService.login).toHaveBeenCalled();
    });
  });

  it('should call when recoverPassword and it works call recoverPasswordSuccess', () => {
    const data = {email: 'test@test.com'};
    const action = fromAuthActions.recoverPassword(data);

    jest.spyOn(authService, 'recoverPassword');

    actions$ = of({ type: action });

    authEffects.recoverPassword$.subscribe( () => {
      expect(action.type).toBe(fromAuthActions.recoverPasswordSuccess);
      expect(authService.recoverPassword).toHaveBeenCalled();
    });
  });

  it('should call when recoverPassword and it fails call recoverPasswordFailure', () => {
    const data = {email: 'test@test.com'};
    const action = fromAuthActions.recoverPassword(data);

    jest.spyOn(authService, 'recoverPassword');

    actions$ = of({ type: action });

    authEffects.recoverPassword$.subscribe( () => {
      expect(action.type).toBe(fromAuthActions.recoverPasswordFailure);
      expect(authService.recoverPassword).toHaveBeenCalled();
    });
  });

  it('should call when changePassword and it works call changePasswordSuccess', () => {
    const data = {token: 'asdasdasd45454asd45sda', password: '12345678', cPassword: '12345678'};
    const action = fromAuthActions.changePassword(data);

    jest.spyOn(authService, 'changePassword');

    actions$ = of({ type: action });

    authEffects.changePassword$.subscribe( () => {
      expect(action.type).toBe(fromAuthActions.changePasswordSuccess);
      expect(authService.changePassword).toHaveBeenCalled();
    });
  });

  it('should call when changePassword and it fails call changePasswordFailure', () => {
    const data = {token: 'asdasdasd45454asd45sda', password: '12345678', cPassword: '12345678'};
    const action = fromAuthActions.changePassword(data);

    jest.spyOn(authService, 'changePassword');

    actions$ = of({ type: action });

    authEffects.changePassword$.subscribe( () => {
      expect(action.type).toBe(fromAuthActions.changePasswordFailure);
      expect(authService.changePassword).toHaveBeenCalled();
    });
  });

});
