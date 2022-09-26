import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/interfaces/user/user';

export enum UsersActions {
  updateUser = '[Users View] Update User',
  updateUserSuccess = '[Users Effect] Update User Success',
  updateUserFailure = '[Users Effect] Update User Failure',
  createUser = '[Users View] Create User',
  createUserSuccess = '[Users Effect] Create User Success',
  createUserFailure = '[Users Effect] Create User Failure',
  deleteUser = '[Users View] Delete User',
  deleteUserSuccess = '[Users Effect] Delete User Success',
  deleteUserFailure = '[Users Effect] Delete User Failure',
  loadUser = '[Users View] Load User',
  loadUserSuccess = '[Users Effect] Load User Success',
  loadUserFailure = '[Users Effect] Load User Failure',
  loadUsers = '[Users View] Load Users',
  loadUsersSuccess = '[Users Effect] Load Users Success',
  loadUsersFailure = '[Users Effect] Load Users Failure',
  loadRoles = '[Users View] Load Roles',
  loadRolesSuccess = '[Users View] Load Roles Success',
  loadRolesFailure = '[Users View] Load Roles Failure'
}

export const updateUser = createAction(
  UsersActions.updateUser,
  props<{ user: User }>()
);

export const updateUserSuccess = createAction(
  UsersActions.updateUserSuccess,
  props<{ user: User }>()
);

export const updateUserFailure = createAction(
  UsersActions.updateUserFailure,
  props<{ error: any }>()
);

export const createUser = createAction(
  UsersActions.createUser,
  props<{ user: User }>()
);

export const createUserSuccess = createAction(
  UsersActions.createUserSuccess,
  props<{ user: User }>()
);

export const createUserFailure = createAction(
  UsersActions.createUserFailure,
  props<{ error: any }>()
);

export const loadUser = createAction(
  UsersActions.loadUser,
  props<{ id: number }>()
);

export const loadUserSuccess = createAction(
  UsersActions.loadUserSuccess,
  props<{ user: User }>()
);

export const loadUserFailure = createAction(
  UsersActions.loadUserFailure,
  props<{ error: any }>()
);

export const loadUsers = createAction(
  UsersActions.loadUsers
);

export const loadUsersSuccess = createAction(
  UsersActions.loadUsersSuccess,
  props<{ users: User[] }>()
);

export const loadUsersFailure = createAction(
  UsersActions.loadUsersFailure,
  props<{ error: any }>()
);

export const deleteUser = createAction(
  UsersActions.deleteUser,
  props<{ id: number }>()
);

export const deleteUserSuccess = createAction(
  UsersActions.deleteUserSuccess,
  props<{ id: number }>()
);

export const deleteUserFailure = createAction(
  UsersActions.deleteUserFailure,
  props<{ error: any }>()
);

export const loadRoles = createAction(
  UsersActions.loadRoles
);

export const loadRolesSuccess = createAction(
  UsersActions.loadRolesSuccess,
  props<{ roles: any[] }>()
);

export const loadRolesFailure = createAction(
  UsersActions.loadRolesFailure,
  props<{ error: any }>()
);


export const fromUsersActions = {
  updateUser,
  updateUserSuccess,
  updateUserFailure,
  loadUsers,
  loadUsersSuccess,
  loadUsersFailure,
  loadUser,
  loadUserSuccess,
  loadUserFailure,
  deleteUser,
  deleteUserSuccess,
  deleteUserFailure
};
