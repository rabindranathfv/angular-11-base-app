import { createFeatureSelector, createSelector, State } from '@ngrx/store';
import * as fromOwnerReducer from '../reducer/owner.reducer';

export const selectOwnersFeature = createFeatureSelector<fromOwnerReducer.OwnerAppState>(fromOwnerReducer.ownersFeatureKey);

export const selectOwners = createSelector(
    selectOwnersFeature,
    fromOwnerReducer.selectAllOwners
);

export const selectOwner = createSelector(
    selectOwnersFeature,
    (state, prop: { id: number }) => state.entities[prop.id]
);

export const getError = createSelector(
    selectOwnersFeature,
    (state) => state.error
);


export const OwnerSelectors = {
    selectOwners,
    selectOwner,
    getError
};


