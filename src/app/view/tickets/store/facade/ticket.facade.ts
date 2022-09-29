import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';

import * as fromTicketsActions from '../action/ticket.actions';
import { TicketAppState } from '../reducer/ticket.reducer';
import { TicketsSelectors } from '../selector/ticket.selectors';

import { Observable } from 'rxjs';
import { Ticket } from './../../../../interfaces/ticket/ticket';

@Injectable()
export class TicketFacade {

    ticketData$: any = this.store.select(TicketsSelectors.selectTickets);
    error$: any = this.store.select(TicketsSelectors.getError);

    constructor( private store: Store<TicketAppState> ) {}

    getAllTickets() {
        this.store.dispatch( fromTicketsActions.loadTickets());
    }

    loadAllTickets(): Observable<Ticket[]> {
        return this.store.pipe(select(TicketsSelectors.selectTickets));
    }

    generateTickets() {
        this.store.dispatch( fromTicketsActions.generateTickets());
    }
}
