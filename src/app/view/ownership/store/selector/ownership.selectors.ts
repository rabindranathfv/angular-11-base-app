import { createFeatureSelector, createSelector, State } from '@ngrx/store';
import * as fromOwnershipReducer from '../reducer/ownership.reducer';

export const selectOwnershipsFeature =
createFeatureSelector<fromOwnershipReducer.OwnershipAppState>(fromOwnershipReducer.ownershipsFeatureKey);

export const selectOwnerships = createSelector(
    selectOwnershipsFeature,
    fromOwnershipReducer.selectAllOwnerships
);

export const selectOwnership = createSelector(
    selectOwnershipsFeature,
    (state, prop: { id: number }) => state.entities[prop.id]
);

export const getError = createSelector(
    selectOwnershipsFeature,
    (state) => state.error
);


export const OwnershipSelectors = {
    selectOwnerships,
    selectOwnership,
    getError
};


