import { Action, createReducer, on } from '@ngrx/store';
import * as authActions from '../actions/auth.actions';
import { User } from 'src/app/interfaces/user/user';


export const authFeatureKey = 'auth';

export interface AuthState {
  token: string;
  loggedIn: boolean;
  error: any;
  user: User;
}

export const initialAuthState: AuthState = {
  token : '',
  loggedIn : null,
  error: null,
  user: null
};


export const authReducer = createReducer(
  initialAuthState,
  on(
    authActions.login,
    state => ({...state})
  ),
  on(
    authActions.loginSuccess,
    (state, { token, user } ) => ({ ...state, token, loggedIn : true, user })
  ),
  on(
    authActions.loginFailure,
    (state, { error } ) => ({ ...state, error, loggedIn : false })
  ),
  on(
    authActions.recoverPassword,
    state => ({...state})
  ),
  on(
    authActions.recoverPasswordSuccess,
    (state) => ({ ...state, error: false })
  ),
  on(
    authActions.recoverPasswordFailure,
    (state, { error } ) => ({ ...state, error })
  ),
  on(
    authActions.changePassword,
    state => ({...state})
  ),
  on(
    authActions.changePasswordSuccess,
    (state) => ({ ...state, error: false })
  ),
  on(
    authActions.changePasswordFailure,
    (state, { error } ) => ({ ...state, error })
  ),
  on(
    authActions.logout,
    (state) => (initialAuthState)
  )

);

export function AuthReducer(state, action) {
  return authReducer(state, action);
}

