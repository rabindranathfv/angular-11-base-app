import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { CustomersService } from './customers.service';

import { of, Observable } from 'rxjs';

import { environment } from '../../../environments/environment';


describe('CustomersService', () => {

  let customersService: CustomersService;
  let injector: TestBed;
  let httpMock: HttpTestingController;

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        CustomersService
      ]
    });
    injector = getTestBed();
    customersService = TestBed.inject(CustomersService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    const service: CustomersService = TestBed.inject(CustomersService);
    expect(service).toBeTruthy();
  });

  it('Should response SUCCESS and code 200 when getAllCustomers data correctly', () => {
    const customers = [ { id: 1, name: 'customer test 1'}, { id: 2, nanme: 'customer test 2' }];

    customersService.getAllCustomers().subscribe((resp) => {
      expect(of(resp)).toBeTruthy();
      expect(resp).toBeTruthy();
      expect(resp.status).toBe('200');
      expect(resp.code).toBe('SUCCESS');
      expect(resp.message).toBe('getAll Customers successfully');
      expect(resp.ok).toBeTruthy();
      expect(resp.customers).toEqual(customers);
    }, (err) => {
      expect(of(err)).toBeFalsy();
    });

    const req = httpMock.expectOne({ method: 'GET', url: `${environment.apiUrl}customers`});
    expect(req.request.method).toEqual('GET');

    // change this response
    req.flush(
      {
        status: '200',
        code: 'SUCCESS',
        message: 'getAll Customers successfully',
        customers: [...customers],
        ok: true
      },
      {
        status: 200,
        statusText: 'OK'
      });
    httpMock.verify();
  });

  it('Should return error 500 when getAllCustomers fails', () => {

    customersService.getAllCustomers()
      .subscribe((data) => {
        expect(of(data)).toBeFalsy();
      }, (err) => {
        expect(of(err)).toBeTruthy();
        expect(err).toBeTruthy();
        expect(err.error.status).toBe('500');
        expect(err.error.code).toBe('NO_SUCCESS');
        expect(err.error.ok).toBeFalsy();
        expect(err.error.message).toBe('Non customers exist!');
        expect(err.error.customers).toEqual([]);
      });

    const req = httpMock.expectOne({ method: 'GET', url: `${environment.apiUrl}customers`});
    expect(req.request.method).toEqual('GET');
    expect(req.request.responseType).toEqual('json');
    expect(req.request.url).toEqual('http://localhost:4000/api/v1/customers');

    req.flush(
      {
        status: '500',
        code: 'NO_SUCCESS',
        ok: false,
        message: 'Non customers exist!',
        customers: []
      },
      {
        status: 500,
        statusText: 'Server Error'
      });

    httpMock.verify();
  });

});
