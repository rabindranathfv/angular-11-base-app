import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { UsersService } from './users.service';

import { of, Observable } from 'rxjs';

import { environment } from '../../../environments/environment';


describe('UsersService', () => {

  let usersService: UsersService;
  let injector: TestBed;
  let httpMock: HttpTestingController;

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        UsersService
      ]
    });
    injector = getTestBed();
    usersService = TestBed.inject(UsersService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    const service: UsersService = TestBed.inject(UsersService);
    expect(service).toBeTruthy();
  });

  it('Should response SUCCESS and code 200 when getAllUsers data correctly', () => {
    const users = [ { id: 1, name: 'user test 1'}, { id: 2, nanme: 'user test 2' }];

    usersService.getAllUsers().subscribe((resp) => {
      expect(of(resp)).toBeTruthy();
      expect(resp).toBeTruthy();
      expect(resp.status).toBe('200');
      expect(resp.code).toBe('SUCCESS');
      expect(resp.message).toBe('getAll Users successfully');
      expect(resp.ok).toBeTruthy();
      expect(resp.users).toEqual(users);
    }, (err) => {
      expect(of(err)).toBeFalsy();
    });

    const req = httpMock.expectOne({ method: 'GET', url: `${environment.apiUrl}users`});
    expect(req.request.method).toEqual('GET');

    // change this response
    req.flush(
      {
        status: '200',
        code: 'SUCCESS',
        message: 'getAll Users successfully',
        users: [...users],
        ok: true
      },
      {
        status: 200,
        statusText: 'OK'
      });
    httpMock.verify();
  });

  it('Should return error 500 when getAllUsers fails', () => {

    usersService.getAllUsers()
      .subscribe((data) => {
        expect(of(data)).toBeFalsy();
      }, (err) => {
        expect(of(err)).toBeTruthy();
        expect(err).toBeTruthy();
        expect(err.error.status).toBe('500');
        expect(err.error.code).toBe('NO_SUCCESS');
        expect(err.error.ok).toBeFalsy();
        expect(err.error.message).toBe('Non users exist!');
        expect(err.error.users).toEqual([]);
      });

    const req = httpMock.expectOne({ method: 'GET', url: `${environment.apiUrl}users`});
    expect(req.request.method).toEqual('GET');
    expect(req.request.responseType).toEqual('json');
    expect(req.request.url).toEqual('http://localhost:3000/users');

    req.flush(
      {
        status: '500',
        code: 'NO_SUCCESS',
        ok: false,
        message: 'Non users exist!',
        users: []
      },
      {
        status: 500,
        statusText: 'Server Error'
      });

    httpMock.verify();
  });

});
