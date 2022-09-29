import { createReducer, on } from '@ngrx/store';
import * as TicketsActions from '../action/ticket.actions';
import { Ticket } from './../../../../interfaces/ticket/ticket';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

export const ticketsFeatureKey = 'tickets';

export interface TicketAppState extends EntityState<Ticket> {
  error: any;
  tickets: Ticket[];
}

export const adapter: EntityAdapter<Ticket> = createEntityAdapter<Ticket>();

export const initialState = adapter.getInitialState({
  error: undefined,
  tickets: []
});


export const TicketReducer = createReducer(
  initialState,
  on(TicketsActions.loadTickets,
    state => ({...state})),
  on(TicketsActions.loadTicketsSuccess,
    (state, { tickets }) => (adapter.upsertMany( tickets , {...state, error: false}))
  ),
  on(TicketsActions.loadTicketsFailure,
    (state, { error } ) => ({...state, error })
  )
);

export function TicketAppReducer(state, action) {
  return TicketReducer(state, action);
}

const {
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();

// select the dictionary of Ticket entities
export const selectTicketEntities = selectEntities;

// select the array of Tickets
export const selectAllTickets = selectAll;

// select the total Ticket count
export const selectTicketTotal = selectTotal;
