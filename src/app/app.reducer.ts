import { ActionReducerMap } from '@ngrx/store';
import * as configApp from './view/layout/state/configApp.reducer';
import * as auth from './store/auth/reducers/auth.reducer';

export interface AppState {
    configApp: configApp.ConfigAppState;
    auth: auth.AuthState;
}

export const appReducers: ActionReducerMap<AppState> = {
    configApp: configApp.ConfigAppReducer,
    auth: auth.AuthReducer
};
