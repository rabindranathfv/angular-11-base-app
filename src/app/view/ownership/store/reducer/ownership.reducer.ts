import { createReducer, on } from '@ngrx/store';
import * as OwnershipActions from '../action/ownership.actions';
import { Ownership } from '../../../../interfaces/ownership/ownership.interface';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

export const ownershipsFeatureKey = 'ownerships';

export interface OwnershipAppState extends EntityState<Ownership> {
  error: any;
}

export const adapter: EntityAdapter<Ownership> = createEntityAdapter<Ownership>();

export const initialState = adapter.getInitialState({
  error: undefined
});


export const ownershipReducer = createReducer(
  initialState,
  on(OwnershipActions.createOwnership,
    (state ) => ({...state, error: null })
   ),
  on(OwnershipActions.createOwnershipSuccess,
    (state, { ownership }) => (adapter.addOne( ownership, {...state, error: false}))
  ),
  on(OwnershipActions.createOwnershipFailure,
    (state, { error } ) => ({...state, error })
  ),
  on(OwnershipActions.updateOwnership,
    (state ) => ({...state, error: null })
  ),
  on(OwnershipActions.updateOwnershipSuccess,
    (state, { ownership }) => (adapter.updateOne({ id: ownership.id, changes: ownership }, {...state, error: false}))
  ),
  on(OwnershipActions.updateOwnershipFailure,
    (state, { error } ) => ({...state, error })
  ),
  on(OwnershipActions.loadOwnership,
    state => ({...state})),
  on(OwnershipActions.loadOwnershipSuccess,
    (state, { ownership }) => (adapter.upsertOne( ownership , {...state, error: false}))
  ),
  on(OwnershipActions.loadOwnershipFailure,
    (state, { error } ) => ({...state, error })
  ),
  on(OwnershipActions.deleteOwnership,
    state => ({...state})),
  on(OwnershipActions.deleteOwnershipSuccess,
    (state, { id }) => (adapter.removeOne(id, {...state, error: false}))
  ),
  on(OwnershipActions.deleteOwnershipFailure,
    (state, { error } ) => ({...state, error })
  ),
  on(OwnershipActions.loadOwnerships,
    state => ({...state})),
  on(OwnershipActions.loadOwnershipsSuccess,
    (state, { ownerships }) => (adapter.setAll(ownerships, {...state, error: false}))
  ),
  on(OwnershipActions.loadOwnershipsFailure,
    (state, { error } ) => ({...state, error })
  ),
);

export function OwnershipAppReducer(state, action) {
  return ownershipReducer(state, action);
}

const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();

// select the array of Ownership ids
export const selectOwnershipIds = selectIds;

// select the dictionary of Ownership entities
export const selectOwnershipEntities = selectEntities;

// select the array of Ownerships
export const selectAllOwnerships = selectAll;

// select the total Ownership count
export const selectOwnershipTotal = selectTotal;
