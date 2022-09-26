import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { OwnersService } from './owners.service';

describe('OwnersService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [
      OwnersService
    ]
  }));

  it('should be created', () => {
    const service: OwnersService = TestBed.inject(OwnersService);
    expect(service).toBeTruthy();
  });
});
