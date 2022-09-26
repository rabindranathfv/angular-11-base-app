import { TestBed, getTestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { environment } from 'src/environments/environment';
import { of } from 'rxjs';

describe('AuthService', () => {
  const credentials = {email: 'test@test.com', password: '123456789'};
  let authService: AuthService;
  let injector: TestBed;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        AuthService
      ]
    });
    injector = getTestBed();
    authService = TestBed.inject(AuthService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(authService).toBeTruthy();
  });

  it('Should response SUCCESS and code 200 when login is correct', () => {
    const token = 'AXxxvzzdsvmm32mnids43mi4mcdsvs';
    const user = {
      id : 7,
      firstName : 'Geraldo ',
      lastName : 'Villarroel ',
      dni : '65646464 ',
      dniFile : 'https://www.test.com ',
      street : 'calle ',
      number : '333 ',
      department : '122 ',
      email : 'gvillarroel9@gmail.com ',
      phone : '23232 ',
      mobile : '343434 ',
      business : 'H ',
      position : 'dsd ',
      comercialAddress : '2sdsd ',
      anotherContactFullName : 'sdsd ',
      anotherContactPhone : '232323 ',
      anotherContactEmail : 'sdsds@gmail.com ',
      observations : 'sds ',
      image : 'https://www.test.com ',
      isActive : true,
      customerId : 1,
      roleId : 1,
      role : {
        id : 1,
        name : 'Super Admin ',
        customerId : null
      }
    };
    authService.login(credentials).subscribe((resp) => {
      expect(of(resp)).toBeTruthy();
      expect(resp).toBeTruthy();
      expect(resp.status).toBe('200');
      expect(resp.code).toBe('SUCCESS');
      expect(resp.message).toBe('User logged successfully!');
      expect(resp.token).toBe(token);
      expect(resp.ok).toBeTruthy();
      expect(resp.user).toEqual(user);
    }, (err) => {
      expect(of(err)).toBeFalsy();
    });

    const req = httpMock.expectOne({ method: 'POST', url: `${environment.apiUrl}login`});
    expect(req.request.method).toEqual('POST');

    // change this response
    req.flush(
      {
        status: '200',
        code: 'SUCCESS',
        message: 'User logged successfully!',
        token,
        user,
        ok: true
      },
      {
        status: 200,
        statusText: 'OK'
      }
    );
    httpMock.verify();
  });

  it('Should return error 403 when login is incorrect', () => {

    authService.login(credentials).subscribe((resp) => {
      expect(of(resp)).toBeFalsy();
    }, (err) => {
      expect(of(err)).toBeTruthy();
      expect(err).toBeTruthy();
      expect(err.error.status).toBe('403');
      expect(err.error.code).toBe('FORBIDDEN');
      expect(err.error.message).toBe('Not logged in!');
      expect(err.error.token).toBeFalsy();
      expect(err.ok).toBeFalsy();
    });

    const req = httpMock.expectOne({ method: 'POST', url: `${environment.apiUrl}login`});
    expect(req.request.method).toEqual('POST');

    // change this response
    req.flush(
      {
        status: '403',
        code: 'FORBIDDEN',
        token: null,
        message: 'Not logged in!',
        ok: false
      },
      {
        status: 500,
        statusText: 'Forbidden'
      }
    );
    httpMock.verify();
  });



});
