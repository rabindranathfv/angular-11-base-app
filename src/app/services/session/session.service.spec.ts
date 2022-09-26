import { TestBed } from '@angular/core/testing';

import { SessionService } from './session.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('SessionService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ RouterTestingModule]
   }));

  it('should be created', () => {
    const service: SessionService = TestBed.inject(SessionService);
    expect(service).toBeTruthy();
  });
});
