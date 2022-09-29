import { ActionReducerMap } from '@ngrx/store';
import * as configApp from './view/layout/state/configApp.reducer';
import * as auth from './store/auth/reducers/auth.reducer';
import * as ticket from './view/tickets/store/reducer/ticket.reducer'

export interface AppState {
    configApp: configApp.ConfigAppState;
    auth: auth.AuthState;
    ticket: ticket.TicketAppState
}

export const appReducers: ActionReducerMap<AppState> = {
    configApp: configApp.ConfigAppReducer,
    auth: auth.AuthReducer,
    ticket: ticket.TicketReducer
};
