import { TestBed } from '@angular/core/testing';

import { LocalStorageService } from './localStorage.service';

describe('LocalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LocalStorageService = TestBed.inject(LocalStorageService);
    expect(service).toBeTruthy();
  });
});
