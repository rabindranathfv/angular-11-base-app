import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from '../reducers/auth.reducer';

export const authKey = 'auth';

const getAuthState = createFeatureSelector<AuthState>(authKey);

export const getToken = createSelector(
    getAuthState,
    (state: AuthState) => state.token
);

export const getUser = createSelector(
    getAuthState,
    (state: AuthState) => state.user
);

export const getCustomerId = createSelector(
    getAuthState,
    (state: AuthState) => state.user.customerId
);

export const getError = createSelector(
    getAuthState,
    (state: AuthState) => state.error
);

export const isLoggedIn = createSelector(
    getAuthState,
    (state: AuthState) => state.loggedIn
);

export const getPermissions = createSelector(
    getAuthState,
    (state: AuthState) => state.user.role.permissions
);

export const authSelectors = {
    getToken,
    getError,
    isLoggedIn,
    getUser,
    getCustomerId,
    getPermissions
};
