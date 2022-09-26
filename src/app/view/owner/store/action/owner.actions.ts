import { createAction, props } from '@ngrx/store';
import { Owner } from 'src/app/interfaces/owner/owner.interface';

export enum OwnersActions {
  createOwner = '[Owners View] Create Owner',
  createOwnerSuccess = '[Owners Effect] Create Owner Success',
  createOwnerFailure = '[Owners Effect] Create Owner Failure',
  updateOwner = '[Owners View] Update Owner',
  updateOwnerSuccess = '[Owners Effect] Update Owner Success',
  updateOwnerFailure = '[Owners Effect] Update Owner Failure',
  loadOwner = '[Owners View] Load Owner',
  loadOwnerSuccess = '[Owners Effect] Load Owner Success',
  loadOwnerFailure = '[Owners Effect] Load Owner Failure',
  deleteOwner = '[Owners View] Delete Owner',
  deleteOwnerSuccess = '[Owners Effect] Delete Owner Success',
  deleteOwnerFailure = '[Owners Effect] Delete Owner Failure',
  loadOwners = '[Owners View] Load Owners',
  loadOwnersSuccess = '[Owners Effect] Load Owners Success',
  loadOwnersFailure = '[Owners Effect] Load Owners Failure',
}

export const createOwner = createAction(
  OwnersActions.createOwner,
  props<{ owner: Owner }>()
);

export const createOwnerSuccess = createAction(
  OwnersActions.createOwnerSuccess,
  props<{ owner: Owner }>()
);

export const createOwnerFailure = createAction(
  OwnersActions.createOwnerFailure,
  props<{ error: any }>()
);

export const updateOwner = createAction(
  OwnersActions.updateOwner,
  props<{ owner: Owner }>()
);

export const updateOwnerSuccess = createAction(
  OwnersActions.updateOwnerSuccess,
  props<{ owner: Owner }>()
);

export const updateOwnerFailure = createAction(
  OwnersActions.updateOwnerFailure,
  props<{ error: any }>()
);



export const loadOwner = createAction(
  OwnersActions.loadOwner,
  props<{ id: number }>()
);

export const loadOwnerSuccess = createAction(
  OwnersActions.loadOwnerSuccess,
  props<{ owner: Owner }>()
);

export const loadOwnerFailure = createAction(
  OwnersActions.loadOwnerFailure,
  props<{ error: any }>()
);

export const deleteOwner = createAction(
  OwnersActions.deleteOwner,
  props<{ id: number }>()
);

export const deleteOwnerSuccess = createAction(
  OwnersActions.deleteOwnerSuccess,
  props<{ id: number }>()
);

export const deleteOwnerFailure = createAction(
  OwnersActions.deleteOwnerFailure,
  props<{ error: any }>()
);

export const loadOwners = createAction(
  OwnersActions.loadOwners
);

export const loadOwnersSuccess = createAction(
  OwnersActions.loadOwnersSuccess,
  props<{ owners: Owner[] }>()
);

export const loadOwnersFailure = createAction(
  OwnersActions.loadOwnersFailure,
  props<{ error: any }>()
);



export const fromOwnersActions = {
  createOwner,
  createOwnerSuccess,
  createOwnerFailure,
  updateOwner,
  updateOwnerSuccess,
  updateOwnerFailure,
  loadOwner,
  loadOwnerSuccess,
  loadOwnerFailure,
  deleteOwner,
  deleteOwnerSuccess,
  deleteOwnerFailure,
  loadOwners,
  loadOwnersSuccess,
  loadOwnersFailure
};





