import { createAction, props } from '@ngrx/store';
import { Ticket } from 'src/app/interfaces/ticket/ticket';

export enum TicketsActions {
  loadTickets = '[Tickets View] Load Tickets',
  loadTicketsSuccess = '[Tickets Effect] Load Tickets Success',
  loadTicketsFailure = '[Tickets Effect] Load Tickets Failure',
  generateTickets = '[Tickets View] Generate Tickets',
  generateTicketsSuccess = '[Tickets Effect] generate Tickets Success',
  generateTicketsFailure = '[Tickets Effect] generate Tickets Failure',
}

export const loadTicketsSuccess = createAction(
  TicketsActions.loadTicketsSuccess,
  props<{ tickets: Ticket[] }>()
);

export const loadTicketsFailure = createAction(
  TicketsActions.loadTicketsFailure,
  props<{ error: any }>()
);

export const loadTickets = createAction(
  TicketsActions.loadTickets
);

export const generateTicketsSuccess = createAction(
  TicketsActions.generateTicketsSuccess,
  props<{ tickets: Ticket[] }>()
);

export const generateTicketsFailure = createAction(
  TicketsActions.generateTicketsFailure,
  props<{ error: any }>()
);

export const generateTickets = createAction(
  TicketsActions.generateTickets
);

export const fromTicketsActions = {
  loadTickets,
  loadTicketsFailure,
  loadTicketsSuccess,
  generateTickets,
  generateTicketsFailure,
  generateTicketsSuccess
};
