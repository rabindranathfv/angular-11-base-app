import { createFeatureSelector, createSelector, State } from '@ngrx/store';
import * as fromUserReducer from '../reducer/user.reducer';

export const selectUsersFeature = createFeatureSelector<fromUserReducer.UserAppState>(fromUserReducer.usersFeatureKey);

export const selectUsers = createSelector(
    selectUsersFeature,
    fromUserReducer.selectAllUsers
);

export const selectUser = createSelector(
    selectUsersFeature,
    (state, prop: { id: number }) => state.entities[prop.id]
);

export const selectRoles = createSelector(
    selectUsersFeature,
    (state) => state.roles
);

export const getError = createSelector(
    selectUsersFeature,
    (state) => state.error
);


export const UserSelectors = {
    selectUsers,
    selectUser,
    selectRoles,
    getError
};


