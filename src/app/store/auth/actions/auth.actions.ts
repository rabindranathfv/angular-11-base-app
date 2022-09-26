import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/interfaces/user/user';

export enum AuthActions {
  login = '[Login View] Login',
  loginSuccess = '[Auth Effect] Login Success',
  loginFailure = '[Auth Effect] Login Failure',
  recoverPassword = '[Recover Password View] Recover Password',
  recoverPasswordSuccess = '[Auth Effect] Recover Password Success',
  recoverPasswordFailure = '[Auth Effect] Recover Password Failure',
  changePassword = '[Change Password View] Change Password',
  changePasswordSuccess = '[Auth Effect] Change Password Success',
  changePasswordFailure = '[Auth Effect] Change Password Failure',
  logout = '[Layout View] Logout',
}

export const login = createAction(
  AuthActions.login,
  props<{ email: string , password: string }>()
);

export const loginSuccess = createAction(
  AuthActions.loginSuccess,
  props<{ token: string, user: User}>()
);

export const loginFailure = createAction(
  AuthActions.loginFailure,
  props<{ error: any }>()
);

export const recoverPassword = createAction(
  AuthActions.recoverPassword,
  props<{ email: string }>()
);

export const recoverPasswordSuccess = createAction(
  AuthActions.recoverPasswordSuccess
);

export const recoverPasswordFailure = createAction(
  AuthActions.recoverPasswordFailure,
  props<{ error: any }>()
);

export const changePassword = createAction(
  AuthActions.changePassword,
  props<{ token: string, password: string, cPassword: string }>()
);

export const changePasswordSuccess = createAction(
  AuthActions.changePasswordSuccess
);

export const changePasswordFailure = createAction(
  AuthActions.changePasswordFailure,
  props<{ error: any }>()
);

export const logout = createAction(
  AuthActions.logout
);

export const fromAuthActions = {
  login,
  loginSuccess,
  loginFailure,
  recoverPassword,
  recoverPasswordSuccess,
  recoverPasswordFailure,
  changePassword,
  changePasswordSuccess,
  changePasswordFailure,
  logout
};
