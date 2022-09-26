import { createReducer, on } from '@ngrx/store';
import * as OwnerActions from '../action/owner.actions';
import { Owner } from '../../../../interfaces/owner/owner.interface';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

export const ownersFeatureKey = 'owners';

export interface OwnerAppState extends EntityState<Owner> {
  error: any;
}

export const adapter: EntityAdapter<Owner> = createEntityAdapter<Owner>();

export const initialState = adapter.getInitialState({
  error: undefined
});


export const ownerReducer = createReducer(
  initialState,
  on(OwnerActions.createOwner,
    (state ) => ({...state, error: null })
   ),
  on(OwnerActions.createOwnerSuccess,
    (state, { owner }) => (adapter.addOne( owner, {...state, error: false}))
  ),
  on(OwnerActions.createOwnerFailure,
    (state, { error } ) => ({...state, error })
  ),
  on(OwnerActions.updateOwner,
    (state ) => ({...state, error: null })
  ),
  on(OwnerActions.updateOwnerSuccess,
    (state, { owner }) => (adapter.updateOne({ id: owner.id, changes: owner }, {...state, error: false}))
  ),
  on(OwnerActions.updateOwnerFailure,
    (state, { error } ) => ({...state, error })
  ),
  on(OwnerActions.loadOwner,
    state => ({...state})),
  on(OwnerActions.loadOwnerSuccess,
    (state, { owner }) => (adapter.upsertOne( owner , {...state, error: false}))
  ),
  on(OwnerActions.loadOwnerFailure,
    (state, { error } ) => ({...state, error })
  ),
  on(OwnerActions.deleteOwner,
    state => ({...state})),
  on(OwnerActions.deleteOwnerSuccess,
    (state, { id }) => (adapter.removeOne(id, {...state, error: false}))
  ),
  on(OwnerActions.deleteOwnerFailure,
    (state, { error } ) => ({...state, error })
  ),
  on(OwnerActions.loadOwners,
    state => ({...state})),
  on(OwnerActions.loadOwnersSuccess,
    (state, { owners }) => (adapter.setAll(owners, {...state, error: false}))
  ),
  on(OwnerActions.loadOwnersFailure,
    (state, { error } ) => ({...state, error })
  ),
);

export function OwnerAppReducer(state, action) {
  return ownerReducer(state, action);
}

const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();

// select the array of Owner ids
export const selectOwnerIds = selectIds;

// select the dictionary of Owner entities
export const selectOwnerEntities = selectEntities;

// select the array of Owners
export const selectAllOwners = selectAll;

// select the total Owner count
export const selectOwnerTotal = selectTotal;
