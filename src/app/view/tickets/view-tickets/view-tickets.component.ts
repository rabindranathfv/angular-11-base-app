import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { TicketFacade } from '../store/facade/ticket.facade'
import { Ticket } from './../../../interfaces/ticket/ticket';

@Component({
  selector: 'app-view-tickets',
  templateUrl: './view-tickets.component.html',
  styleUrls: ['./view-tickets.component.scss']
})
export class ViewTicketsComponent implements OnInit {

  public columnDefs = [
    {
      headerName: 'Entity',
      field: 'actionLink',
      sortable: false,
      filter: false,
      cellRenderer: 'iconCell',
      cellRendererParams: { icon: { name: 'fa fa-ticket fa-2x', color: '#ff8000' } },
    },
    { headerName: 'Ticket Identifier', field: 'id', sortable: true, filter: true },
    {
      headerName: 'Title',
      field: 'title',
      sortable: false,
      filter: false,
    },
    {
      headerName: 'Description',
      field: 'description',
      sortable: false,
      filter: false,
    },
    {
      headerName: 'Creator',
      field: 'creator',
      sortable: false,
      filter: false,
    },
    { headerName: 'Date', field: 'date', sortable: true, filter: true },
    {
      headerName: 'Algorithm generator type',
      field: 'type',
      sortable: true,
      filter: false,
    }
  ];

  tickets$: Observable<Ticket[]>;

  constructor(
    private ticketFacade: TicketFacade,
  ) { }

  ngOnInit(): void {
    this.getAlltickets();
  }

  /**
   * getAlltickets
   */
  public getAlltickets() {
    console.log("launch get tickets")
    this.ticketFacade.getAllTickets();
    this.tickets$ = this.ticketFacade.loadAllTickets();
  }

  /**
   * getTickets
   */
  public generateRandomTickets() {
    this.ticketFacade.generateTickets();
    this.getAlltickets();
  }

}
