import { TestBed } from '@angular/core/testing';

import { SaveSecureService } from './saveSecure.service';

describe('SaveSecureService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SaveSecureService = TestBed.inject(SaveSecureService);
    expect(service).toBeTruthy();
  });
});
