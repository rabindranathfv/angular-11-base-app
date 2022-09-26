import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { OwnershipsService } from './ownerships.service';

describe('OwnershipsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [
      OwnershipsService
    ]
  }));

  it('should be created', () => {
    const service: OwnershipsService = TestBed.inject(OwnershipsService);
    expect(service).toBeTruthy();
  });
});
