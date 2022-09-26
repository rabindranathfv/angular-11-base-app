import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ConfigAppState } from './configApp.reducer';

export const configAppKey = 'configApp';

const getConfigAppState = createFeatureSelector<ConfigAppState>(configAppKey);

export const getLoading = createSelector(
    getConfigAppState,
    (state: ConfigAppState) => state.loading
);

export const getActiveTheme = createSelector(
    getConfigAppState,
    (state: ConfigAppState) => state.activeTheme
);

export const getTableTheme = createSelector(
    getConfigAppState,
    (state: ConfigAppState) => state.tableTheme
);


export const configAppSelectors = {
    getLoading,
    getActiveTheme,
    getTableTheme
};
