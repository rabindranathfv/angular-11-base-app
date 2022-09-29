import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { TicketFacade } from '../store/facade/ticket.facade'
import { UtilsService } from 'src/app/services/utils/utils.service';

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
      headerName: 'description',
      field: 'description',
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

  public rowDataTickets = [
    {
      id: '00001',
      description: 'some description',
      date: '14-05-2021 04:11',
      type: 'NumerosSecuenciales',
      actionLink: 'ticket',
    },
    {
      id: '000002',
      description: 'some description',
      date: '14-05-2021 04:11',
      type: 'NumerosSecuenciales',
      actionLink: 'ticket',
    },
    {
      id: 'asldke451',
      description: 'some description',
      date: '14-05-2022 04:11',
      type: 'NumerosAleatorios',
      actionLink: 'ticket',
    },
    {
      id: '00001',
      description: 'some description',
      date: '14-05-2021 04:11',
      type: 'NumerosSecuenciales',
      actionLink: 'ticket',
    },
    {
      id: '000002',
      description: 'some description',
      date: '14-05-2021 04:11',
      type: 'NumerosSecuenciales',
      actionLink: 'ticket',
    },
    {
      id: 'asldke451',
      description: 'some description',
      date: '14-05-2022 04:11',
      type: 'NumerosAleatorios',
      actionLink: 'ticket',
    },
    {
      id: '00001',
      description: 'some description',
      date: '14-05-2021 04:11',
      type: 'NumerosSecuenciales',
      actionLink: 'ticket',
    },
    {
      id: '000002',
      description: 'some description',
      date: '14-05-2021 04:11',
      type: 'NumerosSecuenciales',
      actionLink: 'ticket',
    },
    {
      id: 'asldke451',
      description: 'some description',
      date: '14-05-2022 04:11',
      type: 'NumerosAleatorios',
      actionLink: 'ticket',
    },
    {
      id: '00001',
      description: 'some description',
      date: '14-05-2021 04:11',
      type: 'NumerosSecuenciales',
      actionLink: 'ticket',
    },
    {
      id: '000002',
      description: 'some description',
      date: '14-05-2021 04:11',
      type: 'NumerosSecuenciales',
      actionLink: 'ticket',
    },
    {
      id: 'asldke451',
      description: 'some description',
      date: '14-05-2022 04:11',
      type: 'NumerosAleatorios',
      actionLink: 'ticket',
    }
  ]

  showUploadFiles = false;
  noTicketsAvailable = 'you must click in generate tickets';

  // TODO: Injection ticket service and TicketsFacade
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private ticketFacade: TicketFacade,
    private utils: UtilsService,

  ) { }

  ngOnInit(): void {
    this.getAlltickets();
  }

  /**
   * getAlltickets
   */
  public getAlltickets() {
    this.ticketFacade.getAllTickets();
    console.log("launch get tickets")
  }

  /**
   * getTickets
   */
  public generateRandomTickets() {
    console.log("launch generate ticket endpoint")
  }

  /**
   * generateTickets
   */
  public generateTicketsByFiles() {
    this.showUploadFiles = !this.showUploadFiles;
    console.log("launch ticket with post method")
  }

}
