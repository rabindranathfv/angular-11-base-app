import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { TicketsService } from './tickets.service';

import { of, Observable } from 'rxjs';

import { environment } from '../../../environments/environment';


describe('TicketService', () => {

  let ticketsService: TicketsService;
  let injector: TestBed;
  let httpMock: HttpTestingController;

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        TicketsService
      ]
    });
    injector = getTestBed();
    ticketsService = TestBed.inject(TicketsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    const service: TicketsService = TestBed.inject(TicketsService);
    expect(service).toBeTruthy();
  });

  it('Should response SUCCESS and code 200 when getAllTickets data correctly', () => {
    const tickets = [
      {
          "id": "4jzjg9mk",
          "title": "Title-6hf51vwm7",
          "description": "This character description generator will generate a fairly random description of a belonging to a random race.",
          "creator": "Creators Mock Name",
          "date": "2022-09-29",
          "type": "numerosAleatorios"
      },
      {
          "id": "8qg12kdw8",
          "title": "Title-tw9xdjhgm",
          "description": "This character description generator will generate a fairly random description of a belonging to a random race.",
          "creator": "Creators Mock Name",
          "date": "2022-09-29",
          "type": "numerosAleatorios"
      },
      {
          "id": "o5p441ial",
          "title": "Title-l5u6s6f9j",
          "description": "This character description generator will generate a fairly random description of a belonging to a random race.",
          "creator": "Creators Mock Name",
          "date": "2022-09-29",
          "type": "numerosAleatorios"
      }]

    ticketsService.getAllTickets().subscribe((resp) => {
      expect(of(resp)).toBeTruthy();
      expect(resp).toBeTruthy();
      expect(resp.status).toBe('200');
      expect(resp.message).toBe('ticket generated suceesfully');
      expect(resp.ok).toBeTruthy();
      expect(resp.users).toEqual(tickets);
    }, (err) => {
      expect(of(err)).toBeFalsy();
    });

    const req = httpMock.expectOne({ method: 'GET', url: `${environment.apiUrl}ticket`});
    expect(req.request.method).toEqual('GET');

    // change this response
    req.flush(
      {
        status: '200',
        message: 'ticket generated suceesfully',
        ticket: [...tickets],
        ok: true
      },
      {
        status: 200,
        statusText: 'OK'
      });
    httpMock.verify();
  });

  it('Should return error 500 when getAllTickets fails', () => {

    ticketsService.getAllTickets()
      .subscribe((data) => {
        expect(of(data)).toBeFalsy();
      }, (err) => {
        expect(of(err)).toBeTruthy();
        expect(err).toBeTruthy();
        expect(err.error.status).toBe('500');
        expect(err.error.ok).toBeFalsy();
        expect(err.error.message).toBe('server side error getAllTickets');
        expect(err.error.users).toEqual([]);
      });

    const req = httpMock.expectOne({ method: 'GET', url: `${environment.apiUrl}ticket`});
    expect(req.request.method).toEqual('GET');
    expect(req.request.responseType).toEqual('json');
    expect(req.request.url).toEqual('http://localhost:4000/api/v1/ticket');

    req.flush(
      {
        status: '500',
        ok: false,
        message: 'server side error getAllTickets',
        tickets: []
      },
      {
        status: 500,
        statusText: 'Server Error'
      });

    httpMock.verify();
  });

  it('Should response SUCCESS and code 200 when generateTickets data correctly', () => {
    const tickets = [
      {
          "id": "4jzjg9mk",
          "title": "Title-6hf51vwm7",
          "description": "This character description generator will generate a fairly random description of a belonging to a random race.",
          "creator": "Creators Mock Name",
          "date": "2022-09-29",
          "type": "numerosAleatorios"
      },
      {
          "id": "8qg12kdw8",
          "title": "Title-tw9xdjhgm",
          "description": "This character description generator will generate a fairly random description of a belonging to a random race.",
          "creator": "Creators Mock Name",
          "date": "2022-09-29",
          "type": "numerosAleatorios"
      },
      {
          "id": "o5p441ial",
          "title": "Title-l5u6s6f9j",
          "description": "This character description generator will generate a fairly random description of a belonging to a random race.",
          "creator": "Creators Mock Name",
          "date": "2022-09-29",
          "type": "numerosAleatorios"
      }]

    ticketsService.generateTickets().subscribe((resp) => {
      expect(of(resp)).toBeTruthy();
      expect(resp).toBeTruthy();
      expect(resp.status).toBe('200');
      expect(resp.message).toBe('ticket generated suceesfully');
      expect(resp.ok).toBeTruthy();
      expect(resp.users).toEqual(tickets);
    }, (err) => {
      expect(of(err)).toBeFalsy();
    });

    const req = httpMock.expectOne({ method: 'GET', url: `${environment.apiUrl}ticket/generate`});
    expect(req.request.method).toEqual('GET');

    // change this response
    req.flush(
      {
        status: '200',
        message: 'ticket generated suceesfully',
        ticket: [...tickets],
        ok: true
      },
      {
        status: 200,
        statusText: 'OK'
      });
    httpMock.verify();
  });

  it('Should return error 500 when generateTickets fails', () => {

    ticketsService.generateTickets()
      .subscribe((data) => {
        expect(of(data)).toBeFalsy();
      }, (err) => {
        expect(of(err)).toBeTruthy();
        expect(err).toBeTruthy();
        expect(err.error.status).toBe('500');
        expect(err.error.ok).toBeFalsy();
        expect(err.error.message).toBe('server side error getAllTickets');
        expect(err.error.users).toEqual([]);
      });

    const req = httpMock.expectOne({ method: 'GET', url: `${environment.apiUrl}ticket/generate`});
    expect(req.request.method).toEqual('GET');
    expect(req.request.responseType).toEqual('json');
    expect(req.request.url).toEqual('http://localhost:4000/api/v1/ticket/generate');

    req.flush(
      {
        status: '500',
        ok: false,
        message: 'server side error getAllTickets',
        tickets: []
      },
      {
        status: 500,
        statusText: 'Server Error'
      });

    httpMock.verify();
  });

});
