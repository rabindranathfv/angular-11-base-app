import { createAction, props } from '@ngrx/store';
import { Ownership } from 'src/app/interfaces/ownership/ownership.interface';

export enum OwnershipsActions {
  createOwnership = '[Ownerships View] Create Ownership',
  createOwnershipSuccess = '[Ownerships Effect] Create Ownership Success',
  createOwnershipFailure = '[Ownerships Effect] Create Ownership Failure',
  updateOwnership = '[Ownerships View] Update Ownership',
  updateOwnershipSuccess = '[Ownerships Effect] Update Ownership Success',
  updateOwnershipFailure = '[Ownerships Effect] Update Ownership Failure',
  loadOwnership = '[Ownerships View] Load Ownership',
  loadOwnershipSuccess = '[Ownerships Effect] Load Ownership Success',
  loadOwnershipFailure = '[Ownerships Effect] Load Ownership Failure',
  deleteOwnership = '[Ownerships View] Delete Ownership',
  deleteOwnershipSuccess = '[Ownerships Effect] Delete Ownership Success',
  deleteOwnershipFailure = '[Ownerships Effect] Delete Ownership Failure',
  loadOwnerships = '[Ownerships View] Load Ownerships',
  loadOwnershipsSuccess = '[Ownerships Effect] Load Ownerships Success',
  loadOwnershipsFailure = '[Ownerships Effect] Load Ownerships Failure',
}

export const createOwnership = createAction(
  OwnershipsActions.createOwnership,
  props<{ ownership: Ownership }>()
);

export const createOwnershipSuccess = createAction(
  OwnershipsActions.createOwnershipSuccess,
  props<{ ownership: Ownership }>()
);

export const createOwnershipFailure = createAction(
  OwnershipsActions.createOwnershipFailure,
  props<{ error: any }>()
);

export const updateOwnership = createAction(
  OwnershipsActions.updateOwnership,
  props<{ ownership: Ownership }>()
);

export const updateOwnershipSuccess = createAction(
  OwnershipsActions.updateOwnershipSuccess,
  props<{ ownership: Ownership }>()
);

export const updateOwnershipFailure = createAction(
  OwnershipsActions.updateOwnershipFailure,
  props<{ error: any }>()
);



export const loadOwnership = createAction(
  OwnershipsActions.loadOwnership,
  props<{ id: number }>()
);

export const loadOwnershipSuccess = createAction(
  OwnershipsActions.loadOwnershipSuccess,
  props<{ ownership: Ownership }>()
);

export const loadOwnershipFailure = createAction(
  OwnershipsActions.loadOwnershipFailure,
  props<{ error: any }>()
);

export const deleteOwnership = createAction(
  OwnershipsActions.deleteOwnership,
  props<{ id: number }>()
);

export const deleteOwnershipSuccess = createAction(
  OwnershipsActions.deleteOwnershipSuccess,
  props<{ id: number }>()
);

export const deleteOwnershipFailure = createAction(
  OwnershipsActions.deleteOwnershipFailure,
  props<{ error: any }>()
);

export const loadOwnerships = createAction(
  OwnershipsActions.loadOwnerships
);

export const loadOwnershipsSuccess = createAction(
  OwnershipsActions.loadOwnershipsSuccess,
  props<{ ownerships: Ownership[] }>()
);

export const loadOwnershipsFailure = createAction(
  OwnershipsActions.loadOwnershipsFailure,
  props<{ error: any }>()
);



export const fromOwnershipsActions = {
  createOwnership,
  createOwnershipSuccess,
  createOwnershipFailure,
  updateOwnership,
  updateOwnershipSuccess,
  updateOwnershipFailure,
  loadOwnership,
  loadOwnershipSuccess,
  loadOwnershipFailure,
  deleteOwnership,
  deleteOwnershipSuccess,
  deleteOwnershipFailure,
  loadOwnerships,
  loadOwnershipsSuccess,
  loadOwnershipsFailure
};





