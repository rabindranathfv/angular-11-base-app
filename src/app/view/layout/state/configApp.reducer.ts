import { createReducer, on } from '@ngrx/store';
import * as configAppActions from './configApp.actions';

export interface ConfigAppState {
    loading: boolean;
    activeTheme: string;
    tableTheme: string;
}

export const initialStateConfigApp: ConfigAppState = {
    loading: false,
    activeTheme: 'light',
    tableTheme: 'ag-theme-alpine'
};

const configAppReducer = createReducer(initialStateConfigApp,
  on(configAppActions.showLoading, state => ({ ...state, loading: true })),
  on(configAppActions.hideLoading, state => ({ ...state, loading: false })),
  on(configAppActions.loadTheme,
    (state, {activeTheme, tableTheme} ) =>
    ({ ...state, activeTheme, tableTheme })
  )
);

export function ConfigAppReducer(state, action) {
  return configAppReducer(state, action);
}
