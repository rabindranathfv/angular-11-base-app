import { createFeatureSelector, createSelector, State } from '@ngrx/store';
import * as fromTicketsReducer from '../reducer/ticket.reducer';

export const selectTicketsFeature = createFeatureSelector<fromTicketsReducer.TicketAppState>(fromTicketsReducer.ticketsFeatureKey);

export const selectTickets = createSelector(
    selectTicketsFeature,
    fromTicketsReducer.selectAllTickets
);

export const getError = createSelector(
    selectTicketsFeature,
    (state) => state.error
);

export const TicketsSelectors = {
    selectTickets,
    getError
};


