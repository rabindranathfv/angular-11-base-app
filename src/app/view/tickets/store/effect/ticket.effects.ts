import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { fromTicketsActions } from '../action/ticket.actions';
import { TicketsService } from 'src/app/services/Tickets/Tickets.service';
import { mergeMap, map, catchError, tap, first } from 'rxjs/operators';
import { of } from 'rxjs';
import { Ticket } from 'src/app/interfaces/ticket/ticket';
import { TicketFacade } from './../facade/ticket.facade';

@Injectable()
export class TicketEffects {

  ticketData: Ticket[];

  loadTickets$ = createEffect(() => this.actions$.pipe(
    ofType(fromTicketsActions.loadTickets),
    mergeMap(() => this.ticketsService.getAllTickets().
      pipe(
        map( (resp: any) => {
          this.ticketData = resp?.tickets;
          return fromTicketsActions.loadTicketsSuccess({ tickets: this.ticketData });
        }),
        catchError( err => of(fromTicketsActions.loadTicketsFailure({ error: err })))
      )
    )
  ));

  constructor(
    private actions$: Actions,
    private ticketsService: TicketsService,
    private ticketFacade: TicketFacade,
    ) {}

}
